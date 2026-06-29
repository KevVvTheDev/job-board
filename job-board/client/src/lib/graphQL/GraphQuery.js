import {GraphQLClient} from 'graphql-request'

const client = new GraphQLClient('http://localhost:9000/graphql');


export const getJobs = async () =>{
  const query = `#graphql
  query{
    jobs{
      id
      date
      title
      description
      company{
        name
        id
      }
    }
  }
  `;
  const data = await client.request(query);
  return data.jobs;
};

export const getJob = async (id) =>{
  const query = `#graphql
  query{
     job(id: ${id}) {
    id
    date
    title
    description
    company{
      name
      id
    }
   }
  }
  `;
  const data = await client.request(query);
  return data.job;
}
