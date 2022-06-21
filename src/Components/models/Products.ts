export interface Products {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface ProductsData {
    products: Products[];
}
