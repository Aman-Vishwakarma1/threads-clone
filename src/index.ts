import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import customError from "./utils/error";
import errorHandler from "./middleware/errorHandler";

const typeDefs = `#graphql
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "world",
  },
};

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  const graphqlServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await graphqlServer.start();

  app.use(cors(), express.json());

  app.get("/", (req, res, next) => {
    res.status(200).json({ message: "Server is Up", status: "live" });
  });

  app.use("/graphql", expressMiddleware(graphqlServer) as express.Express);

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
}
startServer();
