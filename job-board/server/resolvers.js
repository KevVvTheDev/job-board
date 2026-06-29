import { getJobs, getJob } from './db/jobs.js';
import { mockJobs } from './mockData.js';
import { getCompany } from './db/companies.js';

export const mockResolvers = {
  Query: {
    jobs: async () => { return await getJobs(); },
    job:  async (root, {id}) =>  getJob(id),
    company: async (root, {id}) => getCompany(id),
  },

  // graphQL will read the resolvers function first to do conversion
  JobPost:{
    date: (job) => job.createdAt ,
    company: (job) => getCompany(job.companyId)
  },

};
