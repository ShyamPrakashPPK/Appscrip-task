"use client"
import React, { useState } from 'react'
import Text from './Text'
import ProductList from './ProductList'
import FilterSidebar from './FilterSidebar'

const ProductPageLayout = () => {

    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    return (
        <>
            <div className='mb-10'>
                <Text />
                <hr className="h-px mx-5 md:mx-20  bg-gray-200 border-1 dark:bg-gray-300"></hr>

                <div className=' flex flex-row p-10 justify-between'>

                    <div className='px-10 flex flex-row'>

                        <div className='text-black font-bold text-[16px] px-10 hidden md:flex'>
                            1000+ ITEMS
                        </div>

                        <button className="hidden md:flex w-30 text-blue-500" onClick={() => setSidebarCollapsed(!sidebarCollapsed)}>
                            {sidebarCollapsed ? 'Show Filter' : 'Hide Filter'}
                        </button>

                        <button className="md:hidden w-30 font-bold" onClick={() => setSidebarCollapsed(!sidebarCollapsed)}>
                            FILTER
                        </button>

                    </div>




                    <div className='order-last px-10 font-bold'>
                        <button>RECOMMENDED</button>
                    </div>

                </div>

                <hr className="h-px mx-5 md:mx-20  bg-gray-200 border-1 dark:bg-gray-300"></hr>

                <div className='flex flex-row mt-10 mr-20' >
                    <FilterSidebar collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} />
                    <ProductList />
                </div>
            </div>
        </>
    )
}

export default ProductPageLayout