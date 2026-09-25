import { testimonials } from "../data/testimonials";

// Mock service for testimonials
export const testimonialService = {
  getAll: () => testimonials,
  getFeatured: () => testimonials.filter(t => t.featured),
  // For admin: create, update, delete (mock)
  create: (testimonial) => {
    console.log("Creating testimonial:", testimonial);
    return Promise.resolve({ ...testimonial, id: Date.now().toString() });
  },
  update: (id, updates) => {
    console.log(`Updating testimonial ${id}:`, updates);
    return Promise.resolve({ id, ...updates });
  },
  delete: (id) => {
    console.log(`Deleting testimonial ${id}`);
    return Promise.resolve();
  }
};

export default testimonialService;