import { getJobs, getJob } from './db/jobs.js';
import { mockJobs } from './mockData.js';
import { getCompany } from './db/companies.js';
import {GraphQLError} from 'graphql';

export const mockResolvers = {
  Query: {
    jobs: async () => { return await getJobs(); },
    job:  async (root, {id}) => {
      const job = await getJob(id);
      if(!job)
        graphQLError(`Cant find job with this id: ${id}`);
      return job;
    },
    company: async (root, {id}) => {
      const company = await getCompany(id);
      if(!company)
        graphQLError(`Cant find company with this id: ${id}`);
      return company;
    } 
  },

  // graphQL will read the resolvers function first to do conversion
  JobPost:{
    date: (job) => job.createdAt ,
    company: (job) => getCompany(job.companyId)
  },

};

const graphQLError =  (message) =>{
  throw new GraphQLError(message, {extensions:{code: 'Not Found'}});
}
