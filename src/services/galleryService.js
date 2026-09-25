import { galleryImages } from "../data/gallery";

// Mock service for gallery
export const galleryService = {
  getAll: () => galleryImages,
  getById: (id) => galleryImages.find(g => g.id === id),
  getFeatured: () => galleryImages.filter(g => g.featured),
  // For admin: create, update, delete (mock)
  create: (image) => {
    console.log("Creating gallery image:", image);
    return Promise.resolve({ ...image, id: Date.now().toString() });
  },
  update: (id, updates) => {
    console.log(`Updating gallery image ${id}:`, updates);
    return Promise.resolve({ id, ...updates });
  },
  delete: (id) => {
    console.log(`Deleting gallery image ${id}`);
    return Promise.resolve();
  }
};

export default galleryService;