import {gql} from "apollo-server";


export const typeDefs = gql`
    type Query {
        products: [Product!]!
        product(id: ID!): Product
        categories: [Category!]!
        category(id: ID!): Category
    }

    type Mutation {
        addCategory(input: AddCategoryInput!): Category!
        addProduct(input: AddProductInput!): Product!
        deleteCategory(id: ID!): Boolean!
        deleteProduct(id: ID!): Boolean
        updateCategory(id: ID!,input: UpdateCategoryInput!): Category!
        updateProduct(id: ID!, input: UpdateProductInput!): Product!
    }
    
    type Product {
        id: ID!
        name: String!
        description: String!
        price: Float!
        image: String
    }

    type Category {
        id: ID!,
        name: String!,
        products: [Product!]!
    }
    input AddCategoryInput {
        name: String!
    }
    input AddProductInput {
        name: String!
        description: String!
        price: Float!
        image: String!
        categoryId: String!
    }
    input UpdateCategoryInput {
        name: String!
    }
    input UpdateProductInput {
        name: String!
        description: String!
        price: Float!
        image: String!
        categoryId: String
    }
`;