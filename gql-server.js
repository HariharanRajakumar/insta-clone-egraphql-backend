import mongoose from 'mongoose';
import Cards from './dbCards.js';
import Cors from 'cors';

import express from 'express';
import pkg from 'graphql';
import pkg1 from 'express-graphql';

const { buildSchema } = pkg;
const { graphqlHTTP } = pkg1;
//
//
const port = process.env.PORT || 8001;
const connection_url =
  'mongodb+srv://admin:Nq8WMZcQLCrkchWT@cluster0.bhlga.mongodb.net/?retryWrites=true&w=majority';
//
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//
var schema = buildSchema(`
    type Query{
        story:[Story!]!
    }
    type Story{
        username: String!,
        caption: String!,
        imageUrl: String!,
        avatarUrl: String!
    }
`);

var root = {
  story: () => Cards.find(),
};

var app = express();

app.use(Cors());
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(port);
console.log(`Running a GraphQL API server at http://localhost:${port}/graphql`);
