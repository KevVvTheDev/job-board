import { mockJobs } from './mockData.js';

export const mockResolvers = {
  Query: {
    greeting: () => "hello there friend, welcome to the job board!",
    jobs: () => mockJobs,
  },
};
