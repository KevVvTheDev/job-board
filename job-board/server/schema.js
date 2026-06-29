//this is the file where the schema is being defined and running 
export const typeDefs = `#graphql
type JobPost {
  title: String!,
  description: String,
  id: ID!
  companyId: ID! #this is the foreign key from company table
  date: String
  company: Company!
}

type Company{
  id: ID!,
  name: String,
  description: String
}

type Query {
  jobs: [JobPost!],
  job (id: ID!): JobPost
}
`;