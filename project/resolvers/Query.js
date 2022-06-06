
export const Query =  {

    products: async (parent, args, {firebaseDB}) => {
        return firebaseDB
            .database()
            .ref("products")
            .once("value")
            .then(snap => snap.val())
            .then(val => Object.keys(val).map(key => val[key]))
    },
        product: (parent, {id}, {firebaseDB}) => {
            return firebaseDB
                .database()
                .ref(`products/${id}`)
                .once("value")
                .then(snap => snap.val())
    },
        categories: (parent,args, {firebaseDB}) => {
        return firebaseDB
            .database()
            .ref("categories")
            .once("value")
            .then(snap => snap.val())
            .then(val => Object.keys(val).map(key => val[key]))
    },
        category: (parent, {id}, {firebaseDB}) => {
        return firebaseDB
            .database()
            .ref(`categories/${id}`)
            .once("value")
            .then(snap => snap.val())
    }
}