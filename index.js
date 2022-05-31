import {ApolloServer} from "apollo-server"
import {typeDefs} from './schema.js'
import {Query} from "./resolvers/Query.js"
import {Mutation} from "./resolvers/Mutation.js";
import {Category} from "./resolvers/Category.js";
import {db} from "./db.js"

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Mutation,
        Category
    },
    context: {
        db
    }
});

server.listen().then(({url}) => {
    console.log(`listen on ${url}`)
})