import { AdminLayout } from "@/components/layout/AdminLayout";
import { useState, useEffect } from "react";
import { massageService } from "@/services/massageService";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function MassagesAdmin() {
  const [massages, setMassages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMassage, setSelectedMassage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    description: "",
    duration: "",
    spaPrice: "",
    homePrice: "",
    image: "",
    featured: false,
    status: "published"
  });

  // Fetch massages
  const fetchMassages = async () => {
    setLoading(true);
    try {
      const data = await massageService.getAll();
      setMassages(data);
    } catch (err) {
      setError("Failed to load massages");
    } finally {
      setLoading(false);
    }
  };

  // Fetch massages on mount
  useEffect(() => {
    fetchMassages();
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
      if (selectedMassage) {
        await massageService.update(selectedMassage.id, formData);
      } else {
        await massageService.create(formData);
      }
      // Reset form
      setFormData({
        name: "",
        slug: "",
        description: "",
        duration: "",
        spaPrice: "",
        homePrice: "",
        image: "",
        featured: false,
        status: "published"
      });
      setSelectedMassage(null);
      await fetchMassages();
    } catch (err) {
      setError("Failed to save massage");
    } finally {
      setLoading(false);
    }
  };

  // Handle delete
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this massage?")) {
      try {
        await massageService.delete(id);
        await fetchMassages();
      } catch (err) {
        setError("Failed to delete massage");
      }
    }
  };

  // Handle edit
  const handleEdit = (massage) => {
    setSelectedMassage(massage);
    setFormData({
      name: massage.name,
      slug: massage.slug,
      description: massage.description,
      duration: massage.duration,
      spaPrice: massage.spaPrice,
      homePrice: massage.homePrice,
      image: massage.image,
      featured: massage.featured,
      status: massage.status
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="font-display text-3xl">Massages Management</h1>
        <div className="flex justify-between items-center mb-4">
          <Button onClick={() => {
            setSelectedMassage(null);
            setFormData({
              name: "",
              slug: "",
              description: "",
              duration: "",
              spaPrice: "",
              homePrice: "",
              image: "",
              featured: false,
              status: "published"
            });
          }} variant="outline">
            New Massage
          </Button>
        </div>
        {error && <p className="text-destructive">{error}</p>}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="space-y-4">
            {massages.map((massage) => (
              <div key={massage.id} className="border p-4 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{massage.name}</h3>
                    <p className="text-sm text-muted-foreground">{massage.description}</p>
                  </div>
                  <div className="space-x-3">
                    <Button onClick={() => handleEdit(massage)} variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button onClick={() => handleDelete(massage.id)} variant="destructive" size="sm">
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {selectedMassage && (
          <div className="border p-4 rounded-lg mt-6">
            <h2 className="font-semibold mb-4">{selectedMassage ? "Edit Massage" : "New Massage"}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-primary-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter massage name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="slug" className="mb-2 block text-sm font-medium text-primary-foreground">
                  Slug
                </label>
                <Input
                  id="slug"
                  type="text"
                  placeholder="Enter slug (e.g., swedish-massage)"
                  value={formData.slug}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="description" className="mb-2 block text-sm font-medium text-primary-foreground">
                  Description
                </label>
                <input
                  id="description"
                  type="text"
                  placeholder="Enter description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="duration" className="mb-2 block text-sm font-medium text-primary-foreground">
                    Duration
                  </label>
                  <Input
                    id="duration"
                    type="text"
                    placeholder="Enter duration"
                    value={formData.duration}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="spaPrice" className="mb-2 block text-sm font-medium text-primary-foreground">
                    Spa Price
                  </label>
                  <Input
                    id="spaPrice"
                    type="text"
                    placeholder="Enter spa price"
                    value={formData.spaPrice}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="homePrice" className="mb-2 block text-sm font-medium text-primary-foreground">
                    Home Price
                  </label>
                  <Input
                    id="homePrice"
                    type="text"
                    placeholder="Enter home price"
                    value={formData.homePrice}
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
              </div>
              <div>
                <label htmlFor="status" className="mb-2 block text-sm font-medium text-primary-foreground">
                  Status
                </label>
                <select
                  id="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                  <option value="archived">Archived</option>
                </select>
              </div>
              <div className="flex justify-end">
                <Button type="button" onClick={() => {
                  setSelectedMassage(null);
                  setFormData({
                    name: "",
                    slug: "",
                    description: "",
                    duration: "",
                    spaPrice: "",
                    homePrice: "",
                    image: "",
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