export type Product = {
    id?: number;
    name: string;
    price: number;
    category: string;
    description: string;
    url: string;
};

export type ProductCart = {
    productId: number;
    quantity: number;
};
