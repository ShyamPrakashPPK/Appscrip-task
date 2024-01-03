"use client"
import React, { useState, useEffect } from 'react';
import fetchProducts from '../api/products';
import ProductCard from './ProductCard';

interface Product {
    id: number;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
}

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchProducts();
            setProducts(data);
        };

        fetchData();
    }, []);

    // Add filtering logic or other features as needed

    return (
        <div className="product-list">
            <div className="products-container">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
