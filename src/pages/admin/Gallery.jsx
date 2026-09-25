import { AdminLayout } from "@/components/layout/AdminLayout";
import { useState, useEffect } from "react";
import { galleryService } from "@/services/galleryService";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function GalleryAdmin() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    src: "",
    alt: "",
    title: "",
    category: "",
    featured: false
  });

  // Fetch images
  const fetchImages = async () => {
    setLoading(true);
    try {
      const data = await galleryService.getAll();
      setImages(data);
    } catch (err) {
      setError("Failed to load gallery images");
    } finally {
      setLoading(false);
    }
  };

  // Fetch images on mount
  useEffect(() => {
    fetchImages();
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
      if (selectedImage) {
        await galleryService.update(selectedImage.id, formData);
      } else {
        await galleryService.create(formData);
      }
      // Reset form
      setFormData({
        src: "",
        alt: "",
        title: "",
        category: "",
        featured: false
      });
      setSelectedImage(null);
      await fetchImages();
    } catch (err) {
      setError("Failed to save gallery image");
    } finally {
      setLoading(false);
    }
  };

  // Handle delete
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this gallery image?")) {
      try {
        await galleryService.delete(id);
        await fetchImages();
      } catch (err) {
        setError("Failed to delete gallery image");
      }
    }
  };

  // Handle edit
  const handleEdit = (image) => {
    setSelectedImage(image);
    setFormData({
      src: image.src,
      alt: image.alt,
      title: image.title,
      category: image.category,
      featured: image.featured
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="font-display text-3xl">Gallery Management</h1>
        <div className="flex justify-between items-center mb-4">
          <Button onClick={() => {
            setSelectedImage(null);
            setFormData({
              src: "",
              alt: "",
              title: "",
              category: "",
              featured: false
            });
          }} variant="outline">
            New Image
          </Button>
        </div>
        {error && <p className="text-destructive">{error}</p>}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="space-y-4">
            {images.map((image) => (
              <div key={image.id} className="border p-4 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{image.title}</h3>
                    <p className="text-sm text-muted-foreground">{image.alt}</p>
                  </div>
                  <div className="space-x-3">
                    <Button onClick={() => handleEdit(image)} variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button onClick={() => handleDelete(image.id)} variant="destructive" size="sm">
                      Delete
                    </Button>
                  </div>
                </div>
                <div className="mt-2">
                  <img src={image.src} alt={image.alt} className="w-32 h-24 object-cover rounded" />
                </div>
              </div>
            ))}
          </div>
        )}
        {selectedImage && (
          <div className="border p-4 rounded-lg mt-6">
            <h2 className="font-semibold mb-4">{selectedImage ? "Edit Image" : "New Image"}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="src" className="mb-2 block text-sm font-medium text-primary-foreground">
                  Image URL
                </label>
                <Input
                  id="src"
                  type="text"
                  placeholder="Enter image URL"
                  value={formData.src}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="alt" className="mb-2 block text-sm font-medium text-primary-foreground">
                  Alt Text
                </label>
                <Input
                  id="alt"
                  type="text"
                  placeholder="Enter alt text"
                  value={formData.alt}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="title" className="mb-2 block text-sm font-medium text-primary-foreground">
                  Title
                </label>
                <Input
                  id="title"
                  type="text"
                  placeholder="Enter title"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="category" className="mb-2 block text-sm font-medium text-primary-foreground">
                  Category
                </label>
                <Input
                  id="category"
                  type="text"
                  placeholder="Enter category"
                  value={formData.category}
                  onChange={change}
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
                  setSelectedImage(null);
                  setFormData({
                    src: "",
                    alt: "",
                    title: "",
                    category: "",
                    featured: false
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