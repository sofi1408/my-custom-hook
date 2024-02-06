import { useEffect, useState } from "react";

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  }

export const useProductList = () => {
    const [products, setProducts]= useState<Array<Product>>([]);

    const getProducts = async () => {
        const productList = await fetch('https://fakestoreapi.com/products');
        const productListJson = await productList.json();
        setProducts(productListJson);
    }

    useEffect(() => {
        getProducts();
    }, [])

    return {products};
}