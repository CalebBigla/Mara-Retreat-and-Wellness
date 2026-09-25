import { AdminLayout } from "@/components/layout/AdminLayout";
import { useState, useEffect } from "react";
import { testimonialService } from "@/services/testimonialService";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function TestimonialsAdmin() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    testimonial: "",
    date: "",
    featured: false,
    status: "published"
  });

  // Fetch testimonials
  const fetchTestimonials = async () => {
    setLoading(true);
    try {
      const data = await testimonialService.getAll();
      setTestimonials(data);
    } catch (err) {
      setError("Failed to load testimonials");
    } finally {
      setLoading(false);
    }
  };

  // Fetch testimonials on mount
  useEffect(() => {
    fetchTestimonials();
  }, []);

  // Handle form change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (selectedTestimonial) {
        await testimonialService.update(selectedTestimonial.id, formData);
      } else {
        await testimonialService.create(formData);
      }
      // Reset form
      setFormData({
        name: "",
        testimonial: "",
        date: "",
        featured: false,
        status: "published"
      });
      setSelectedTestimonial(null);
      await fetchTestimonials();
    } catch (err) {
      setError("Failed to save testimonial");
    } finally {
      setLoading(false);
    }
  };

  // Handle delete
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this testimonial?")) {
      try {
        await testimonialService.delete(id);
        await fetchTestimonials();
      } catch (err) {
        setError("Failed to delete testimonial");
      }
    }
  };

  // Handle edit
  const handleEdit = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setFormData({
      name: testimonial.name,
      testimonial: testimonial.testimonial,
      date: testimonial.date,
      featured: testimonial.featured,
      status: testimonial.status
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="font-display text-3xl">Testimonials Management</h1>
        <div className="flex justify-between items-center mb-4">
          <Button onClick={() => {
            setSelectedTestimonial(null);
            setFormData({
              name: "",
              testimonial: "",
              date: "",
              featured: false,
              status: "published"
            });
          }} variant="outline">
            New Testimonial
          </Button>
        </div>
        {error && <p className="text-destructive">{error}</p>}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="space-y-4">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="border p-4 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.testimonial}</p>
                  </div>
                  <div className="space-x-3">
                    <Button onClick={() => handleEdit(testimonial)} variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button onClick={() => handleDelete(testimonial.id)} variant="destructive" size="sm">
                      Delete
                    </Button>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {selectedTestimonial && (
          <div className="border p-4 rounded-lg mt-6">
            <h2 className="font-semibold mb-4">{selectedTestimonial ? "Edit Testimonial" : "New Testimonial"}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-primary-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="testimonial" className="mb-2 block text-sm font-medium text-primary-foreground">
                  Testimonial
                </label>
                <textarea
                  id="testimonial"
                  placeholder="Enter testimonial"
                  value={formData.testimonial}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                  rows={4}
                />
              </div>
              <div>
                <label htmlFor="date" className="mb-2 block text-sm font-medium text-primary-foreground">
                  Date
                </label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="featured" className="mb-2 block text-sm font-medium text-primary-foreground">
                  Featured
                </label>
                <input
                  id="featured"
                  type="checkbox"
                  checked={formData.featured}
                  onChange={handleChange}
                />
              </div>
              <div className="flex justify-end">
                <Button type="button" onClick={() => {
                  setSelectedTestimonial(null);
                  setFormData({
                    name: "",
                    testimonial: "",
                    date: "",
                    featured: false,
                    status: "published"
                  });
                }} variant="outline">
                  Cancel
                </Button>
                <Button type="submit" disabled={loading}>
                  {loading ? "Saving..." : "Save"}
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}