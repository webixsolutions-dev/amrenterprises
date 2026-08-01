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
