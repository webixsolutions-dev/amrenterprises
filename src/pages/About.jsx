import React from 'react'
import { Helmet } from 'react-helmet-async'
import AboutHero from '../components/sections/about/Hero'
import AboutSection from '../components/sections/about/AboutSection'
import Subscribe from '../components/sections/about/Subscribe'

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Amayra Enterprises</title>
        <meta name="description" content="Learn about Amayra Enterprises - Our mission, vision, and commitment to excellence" />
      </Helmet>

      <AboutHero />
      <AboutSection />
      <Subscribe />
    </>
  )
}

export default About