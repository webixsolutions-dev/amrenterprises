import React from 'react'
import { Helmet } from 'react-helmet-async'
import ProductsHero from '../components/sections/OurProducts/ProductsHero'
import FeaturedProducts from '../components/sections/OurProducts/FeaturedProducts'
import WhyChooseBookToday from '../components/sections/OurProducts/WhyChooseProducts'
import ProductsCTA from '../components/sections/OurProducts/ProductsCTA'

const Bookedtoday = () => {
  return (
    <>
      <Helmet>
        <title>BookToday  | Amayra Enterprises</title>
        <meta name="description" content="Discover BookToday - Your trusted online accommodation and travel-booking platform" />
      </Helmet>

      <ProductsHero />
      <FeaturedProducts />
      <WhyChooseBookToday />
      <ProductsCTA />
    </>
  )
}

export default Bookedtoday