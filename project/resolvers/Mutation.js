import {v4} from "uuid"
import {ApolloError} from "apollo-server";

export const Mutation = {
    addCategory: (parent, {input}, {firebaseDB}) => {
        const {name} = input
        const id = v4();
        firebaseDB.database().ref(`categories/${id}`).set({
            id,
            name: name
        })

        return {
            id,
            name: name
        };
    },
    addProduct: (parent, {input}, {firebaseDB}) => {
        const id = v4()
        firebaseDB.database().ref(`products/${id}`).set({
            id,
            ...input

        })
        return {
            id,
            ...input
        };
    },
    deleteCategory: (parent, {id}, {firebaseDB}) => {
        const categoryRef = firebaseDB.database().ref(`categories/${id}`)
        categoryRef.get()
            .then((docSnapshot) => {
                if (docSnapshot.exists()) {
                    categoryRef.remove()
                    return true;
                }
                 else
                    throw new ApolloError('My error message', 'MY_ERROR_CODE')
            })
    },
    deleteProduct: (parent, {id}, {firebaseDB}) => {
        const productRef = firebaseDB.database().ref(`products/${id}`)
        productRef.get()
            .then((docSnapshot) => {
                if (docSnapshot.exists()) {
                    productRef.remove()
                    return true
                } else
                    throw new ApolloError('My error message', 'MY_ERROR_CODE')
            })
    },
    updateCategory: (parent, {id, input}, {firebaseDB}) => {
        const categoryRef = firebaseDB.database().ref(`categories/${id}`)
        const {name} = input
        categoryRef.get()
            .then((docSnapshot) => {
                if (docSnapshot.exists()) {
                    return categoryRef.update({
                        name: name
                    })
                } else
                    throw new ApolloError('My error message', 'MY_ERROR_CODE')
            })
        return {
            id,
            name
        }
    },
    updateProduct: (parent, {id, input}, {firebaseDB}) => {
        const productRef = firebaseDB.database().ref(`products/${id}`)
        productRef.get()
            .then((docSnapshot) => {
                if (docSnapshot.exists()) {
                    return productRef.update({
                        ...input
                    })
                } else
                    throw new ApolloError('My error message', 'MY_ERROR_CODE')
            })
        return {
            id,
            ...input
        }
    }
}