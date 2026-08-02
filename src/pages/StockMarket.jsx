import React from 'react'
import { Helmet } from 'react-helmet-async'
import StockHero from '../components/sections/stock/StockHero'
import OurApproach from '../components/sections/stock/OurApproach'
import OurVission from '../components/sections/stock/OurVission'
import MarketAnalysis from '../components/sections/stock/MarketAnalysis'
import CTA from '../components/sections/stock/CTA'
import PortfolioManagement from '../components/sections/stock/PortfolioManagement'

const StockMarket = () => {
  return (
    <>
      <Helmet>
        <title>Stock Market | Amayra Enterprises</title>
        <meta name="description" content="Stock market insights, analysis, and portfolio management strategies from Amayra Enterprises" />
        <meta name="keywords" content="stock market, trading, portfolio management, market analysis, investments" />
      </Helmet>

      <StockHero />
      <OurApproach />
      <OurVission />
      <MarketAnalysis />
      <PortfolioManagement/>
      <CTA />
    </>
  )
}

export default StockMarket