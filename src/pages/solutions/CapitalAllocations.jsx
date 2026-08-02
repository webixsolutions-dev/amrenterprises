import React from 'react'
import { Helmet } from 'react-helmet-async'
import Hero from '../../components/sections/capitalAllocatiom/Hero'
import OurServices from '../../components/sections/capitalAllocatiom/OurServices'
import FeedBack from '../../components/sections/capitalAllocatiom/FeedBack'

const CapitalAllocations = () => {
  return (
    <>
      <Helmet>
        <title>Capital Allocations | Amayra Enterprises</title>
        <meta name="description" content="Strategic capital allocation solutions for optimal growth and investment returns" />
        <meta name="keywords" content="capital allocation, investment strategy, asset management, financial planning" />
      </Helmet>

      <Hero />
      <OurServices />
      <FeedBack />
    </>
  )
}

export default CapitalAllocations