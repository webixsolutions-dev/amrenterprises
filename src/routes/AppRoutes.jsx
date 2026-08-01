import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import InvestmentStrategies from '../pages/InvestmentStrategies'
import ContactUs from '../pages/ContactUs'
import Careers from '../pages/Careers'
import StockMarket from '../pages/StockMarket'
import CapitalAllocations from '../pages/solutions/CapitalAllocations'
import InternationalOptions from '../pages/solutions/InternationalOptions'
import MarketInsight from '../pages/solutions/MarketInsight'
import PotentialPartnership from '../pages/solutions/PotentialPartnership'
import OurProducts from '../pages/BookedToday'
import Bookedtoday from '../pages/BookedToday'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/investment-strategies" element={<InvestmentStrategies />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/booked-today" element={<Bookedtoday />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/stock-market" element={<StockMarket />} />
      <Route path="/capital-allocations" element={<CapitalAllocations />} />
      <Route path="/international-options" element={<InternationalOptions />} />
      <Route path="/market-insight" element={<MarketInsight />} />
      <Route path="/potential-partnership" element={<PotentialPartnership />} />
    </Routes>
  )
}
