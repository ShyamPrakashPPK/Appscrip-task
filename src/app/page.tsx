import FilterSidebar from '@/components/FilterSidebar'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ProductList from '@/components/ProductList'
import ProductPageLayout from '@/components/ProductPageLayout'
import Text from '@/components/Text'
import {createContext} from 'react';

export default function Home() {
  return (
    <>
      <main >
        <Navbar />


        <ProductPageLayout />
    
        <Footer />
      </main>
    </>
  )
}
