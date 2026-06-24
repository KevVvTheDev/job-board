//this is the file where the schema is being defined and running 
export const typeDefs = `#graphql
type jobPost {
  title: String!,
  name: String,
  description: String,
  id: ID!
}

type Query {
  greeting: String,
  jobs: [jobPost!],
}
`;