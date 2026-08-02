import { Helmet } from 'react-helmet-async'
import Hero from '../components/sections/home/Hero'
import MissionVision from '../components/sections/home/MissionVision'
import Commitment from '../components/sections/home/Commitment'
import Services from '../components/sections/home/Services'
import CTA from '../components/sections/home/CTA'
import UnLockingGrowth from '../components/sections/home/UnLockingGrowth'
import OurProducts from '../components/sections/home/OurProducts'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home | Amayra Enterprises</title>
        <meta name="description" content="Welcome to Amayra Enterprises - Your trusted partner in business solutions and investment strategies" />
        <meta name="keywords" content="Amayra Enterprises, business solutions, investment, strategies, growth" />
      </Helmet>

      <Hero />
      <MissionVision />
      <UnLockingGrowth />
      <Commitment />
      <Services />
      <OurProducts />
      <CTA />
    </>
  )
}