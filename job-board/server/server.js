import cors from 'cors';
import express from 'express';
import { authMiddleware, handleLogin } from './auth.js';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware as apolloMiddleware } from '@as-integrations/express4';
import {readFile} from 'node:fs/promises'
import { mockResolvers } from './resolvers.js';
import { typeDefs } from './schema.js';

const PORT = 9000;

const app = express();
app.use(cors(), express.json(), authMiddleware);

app.post('/login', handleLogin);

// const schema = await readFile('./schema.graphql','utf8');

//configure apolloserver for graphql API
const apolloServer = new ApolloServer({ typeDefs: typeDefs, resolvers: mockResolvers});
await apolloServer.start();
app.use('/graphql', apolloMiddleware(apolloServer));

app.listen({ port: PORT }, () => {
  console.log(`Server running on port: http://localhost:${PORT}`);
  console.log(`GraphQL server is running: http://localhost:${PORT}/graphql`);
});
