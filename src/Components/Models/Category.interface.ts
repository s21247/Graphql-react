
export interface Category {
    id:string;
    name: string;
}

export interface Categories {
    categories: Category[];
}

export interface CategoriesWithProducts {
    categories: {
        name?: string;
        products?: {
            id: string;
            name: string;
        }[]
    }[]
}