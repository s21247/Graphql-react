import {ApolloServer} from "apollo-server"
import {typeDefs} from './project/schema.js'
import {Query} from "./project/resolvers/Query.js"
import {Mutation} from "./project/resolvers/Mutation.js";
import {Category} from "./project/resolvers/Category.js";
import {firebaseDB, testDB} from "./project/db-key/firebaseDB.js"

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Mutation,
        Category
    },
    csrfPrevention: true,
    formatError: (err) => {
        if(err.message.startsWith('Database Error: ')){
            return new Error('Internal Server error')
        }
        return err;
    },
    context: {
        firebaseDB: process.env.TESTS_COMMAND !== 'tests'
            ? firebaseDB : testDB
    }

});

server.listen().then(({url}) => {
    console.log(server.context)
    console.log(`listen on ${url}`)
})


