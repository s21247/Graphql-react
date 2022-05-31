import {ApolloServer} from "apollo-server"
import {typeDefs} from './project/schema.js'
import {Query} from "./project/resolvers/Query.js"
import {Mutation} from "./project/resolvers/Mutation.js";
import {Category} from "./project/resolvers/Category.js";
import {db} from "./project/db.js"

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