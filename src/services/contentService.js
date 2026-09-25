import { siteContent } from "../data/siteContent";

// Mock service for site content
export const contentService = {
  getAll: () => siteContent,
  getSection: (sectionName) => siteContent[sectionName],
  // For admin: update (mock)
  update: (sectionName, updates) => {
    console.log(`Updating content section ${sectionName}:`, updates);
    return Promise.resolve({ ...siteContent[sectionName], ...updates });
  }
};

export default contentService;