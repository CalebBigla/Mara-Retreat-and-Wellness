import { massages } from "../data/massages";

// Mock service for massages
export const massageService = {
  getAll: () => massages,
  getBySlug: (slug) => massages.find(m => m.slug === slug),
  getFeatured: () => massages.filter(m => m.featured),
  // For admin: create, update, delete (mock)
  create: (massage) => {
    // In a real app, this would send a request to the backend
    console.log("Creating massage:", massage);
    return Promise.resolve({ ...massage, id: Date.now().toString() });
  },
  update: (id, updates) => {
    console.log(`Updating massage ${id}:`, updates);
    return Promise.resolve({ id, ...updates });
  },
  delete: (id) => {
    console.log(`Deleting massage ${id}`);
    return Promise.resolve();
  }
};

export default massageService;