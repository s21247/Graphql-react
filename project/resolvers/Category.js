export const Category = {
    products : ({id: categoryId}, args, {firebaseDB}) => {
        return firebaseDB
            .database()
            .ref("products")
            .once("value")
            .then(snap => snap.val())
            .then(val => Object.keys(val).map(key => val[key]))
            .then(response => response.filter(product => product.categoryId === categoryId))
    }
}