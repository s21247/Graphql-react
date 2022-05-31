import {v4} from "uuid"

export const Mutation = {
    addCategory: (parent, {input}, {db}) => {
        const {name} = input
        const newCategory = {
            id: v4(),
            name: name
        }
        db.categories.push(newCategory);
        return newCategory;
    },
    addProduct: (parent, {input}, {db}) => {
        const {
            name,
            image,
            price,
            description,
            categoryId

        } = input
        const newProduct = {
            id: v4(),
            name,
            image,
            price,
            description,
            categoryId
        }
        db.products.push(newProduct)
        return newProduct;
    },
    deleteCategory: (parent, {id}, {db}) => {
        if (!id)
            return false;
        db.categories = db.categories.filter(category => category.id !== id)
        db.products = db.products.map(product => {
            if (product.categoryId === id)
                return {
                    ...product,
                    categoryId: null
                }

            else return product;
        })
        return true;
    },
    deleteProduct: (parent, {id}, {db}) => {
        if (!id)
            return false;
        db.products = db.products.filter(products => products.id !== id)
        return true;
    },
    updateCategory: (parent, {id, input}, {db}) => {
        const index = db.categories.findIndex(category => category.id === id);
        if (index === -1)
            return null;
        db.categories[index] = {
            ...db.categories[index],
            ...input
        }
        return db.categories[index]
    },
    updateProduct: (parent, {id, input}, {db}) => {
        const index = db.products.findIndex(product => product.id === id);
        if(index === -1)
            return null
        db.products[index] = {
            ...db.products[index],
            ...input
        }
        return db.products[index]

    }
}