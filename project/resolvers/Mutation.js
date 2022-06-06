import {v4} from "uuid"
import {ApolloError} from "apollo-server";

export const Mutation = {
    addCategory: (parent, {input}, {firebaseDB}) => {
        const {name} = input
        const id = v4();
        firebaseDB.database().ref(`categories/${id}`).set({
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
            ...input

        })
        return {
            ...input
        };
    },
    deleteCategory: async (parent, {id}, {firebaseDB}) => {
        const categoryRef = firebaseDB.database().ref(`categories/${id}`)
        categoryRef.get()
            .then((docSnapshot) => {
                if(docSnapshot.exists){
                    firebaseDB.database().ref(`categories/${id}`).remove()
                    return `Successfully removed category with id: ${id}`
                }else
                    throw new ApolloError('My error message', 'MY_ERROR_CODE');
            })
    },
    deleteProduct: (parent, {id}, {firebaseDB}) => {
        const productRef = firebaseDB.database().ref(`products/${id}`)
        productRef.get()
            .then((docSnapshot) => {
                if (docSnapshot.exists) {
                    firebaseDB.database().ref(`products/${id}`).remove()
                    return `Successfully removed product with id: ${id}`
                } else
                    throw new ApolloError('My error message', 'MY_ERROR_CODE')
            })
    },
    updateCategory: (parent, {id, input}, {firebaseDB}) => {
        const categoryRef = firebaseDB.database().ref(`categories/${id}`)
        const {name} = input
        categoryRef.get()
            .then((docSnapshot) => {
            if (docSnapshot.exists) {
                return categoryRef.update({
                    name: name
                })
            } else
                throw new ApolloError('My error message', 'MY_ERROR_CODE')
        })
        return {
            name
        }
    },
    updateProduct: (parent, {id, input}, {firebaseDB}) => {
        const productRef = firebaseDB.database().ref(`products/${id}`)
        productRef.get()
            .then((docSnapshot) => {
                if (docSnapshot.exists) {
                    return productRef.update({
                        ...input
                    })
                } else
                    throw new ApolloError('My error message', 'MY_ERROR_CODE')
            })
        return {
            ...input
        }
    }
}