"use client"
import Image from 'next/image';
import React,{useState} from 'react'



interface Product {
    id: number;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
}

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

    const [svgColor, setSvgColor] = useState("none");
    const handleSvgClick = () => {
        const newColor = svgColor === "none" ? "#EB4C6B" : "none";
        setSvgColor(newColor);
    };


    return (
        <div className="max-w-[180px] md:max-w-[300px] h-[462px]">
            <div className="product-image">
                <Image className='product-image2' src={product.image} alt={product.title} width={300} height={399} />
            
            </div>
            <div className="mt-2">
                <h3 className='font-bold product-name truncate'>{product.title}</h3>
                <div className='product-description flex flex-row'>
                    <p className='text-[14px]'>Login to view product price</p>
                    <div onClick={handleSvgClick} className="order-last pb-2 ml-20">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={svgColor}>
                            <path d="M12.62 20.8096C12.28 20.9296 11.72 20.9296 11.38 20.8096C8.48 19.8196 2 15.6896 2 8.68961C2 5.59961 4.49 3.09961 7.56 3.09961C9.38 3.09961 10.99 3.97961 12 5.33961C13.01 3.97961 14.63 3.09961 16.44 3.09961C19.51 3.09961 22 5.59961 22 8.68961C22 15.6896 15.52 19.8196 12.62 20.8096Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
             
            </div>

            
        </div>

    );
};


export default ProductCard