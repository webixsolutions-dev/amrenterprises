import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navLinks } from '../../data/navLinks'
import logo from "../../assets/images/logo.png"

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setMobileSolutionsOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const isActive = (path) => {
    return location.pathname === path
  }

  const leftNavLinks = navLinks.filter(link =>
    ['Home', 'Investment Strategies', 'About'].includes(link.label)
  )

  const rightNavLinks = navLinks.filter(link =>
    ['Solutions', 'Stock Market', 'Our Products'].includes(link.label)
  )

  return (
    <>
      <div className="h-[80px] md:h-24 lg:h-24"></div>

      {/* 👇 FIXED - Hamesha black background */}
      <header className={`fixed top-0 left-0 right-0 z-50 text-black transition-all duration-300 
        ${scrolled 
          ? 'bg-black shadow-gray-900' 
          : 'bg-black'
        }`}
      >
        <div className={`container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-300 ${scrolled ? 'h-16 md:h-20' : 'h-[80px] md:h-24'}`}>

          <button
            className="lg:hidden relative w-9 h-9 flex flex-col justify-center items-center gap-1.5 z-[100]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-white rounded transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-6 bg-white rounded transition-all duration-300 ${mobileOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`block h-0.5 w-6 bg-white rounded transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
            {leftNavLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm xl:text-base font-medium transition-colors ${
                  isActive(link.path) 
                    ? 'text-brand' 
                    : 'text-white hover:text-brand'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand"></span>
                )}
              </Link>
            ))}
          </nav>

          <Link
            to="/"
            className="absolute mt-8 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
          >
            <img
              src={logo}
              alt="Amayra Enterprises"
              className={`transition-all duration-300 ${
                scrolled
                  ? 'h-16 md:h-16 lg:h-16 w-auto'  
                  : 'h-20 md:h-28 lg:h-28 w-auto' 
              }`}
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-10 ml-auto">
            {rightNavLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative" onMouseEnter={() => setDropdownOpen(link.label)} onMouseLeave={() => setDropdownOpen(false)}>
                  <button className="flex items-center gap-1 text-white hover:text-brand font-medium text-sm xl:text-base transition-colors normal-case">
                    {link.label}
                    <svg className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen === link.label ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`absolute top-full right-0 pt-3 transition-all duration-200 ${dropdownOpen === link.label ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                    <div className="bg-black/95 backdrop-blur-sm border border-gray-800 shadow-xl rounded-lg py-2 min-w-[240px] ring-1 ring-white/10">
                      {link.children.map((child) => (
                        <Link key={child.path} to={child.path} className="block text-white px-5 py-2.5 text-sm hover:bg-white/10 hover:text-brand transition-colors">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm xl:text-base font-medium transition-colors ${
                    isActive(link.path) 
                      ? 'text-brand' 
                      : 'text-white hover:text-brand'
                  }`}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand"></span>
                  )}
                </Link>
              )
            )}

            <div className="relative" onMouseEnter={() => setMoreOpen(true)} onMouseLeave={() => setMoreOpen(false)}>
              <button className="flex items-center normal-case gap-1 text-white hover:text-brand font-medium text-sm xl:text-base transition-colors">
                More
                <svg className={`w-4 h-4 transition-transform duration-200 ${moreOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`absolute top-full right-0 pt-3 transition-all duration-200 ${moreOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                <div className="bg-black/95 backdrop-blur-sm border border-gray-800 shadow-xl rounded-lg py-2 min-w-[200px] ring-1 ring-white/10">
                  <Link to="/contact-us" className="block text-white px-5 py-2.5 text-sm hover:bg-white/10 hover:text-brand transition-colors">Contact Us</Link>
                  <Link to="/careers" className="block text-white px-5 py-2.5 text-sm hover:bg-white/10 hover:text-brand transition-colors">Careers</Link>
                </div>
              </div>
            </div>
          </nav>

          <div className="lg:hidden w-9"></div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-0 bg-black z-40 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
          <nav className="flex flex-col items-center justify-start h-full w-full px-6 py-20 gap-1 overflow-y-auto">
            <Link 
              to="/" 
              className={`w-full max-w-sm py-3 font-medium text-center text-lg transition-colors border-b border-gray-800 ${
                isActive('/') ? 'text-brand' : 'text-white hover:text-brand'
              }`}
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/investment-strategies" 
              className={`w-full max-w-sm py-3 font-medium text-center text-lg transition-colors border-b border-gray-800 ${
                isActive('/investment-strategies') ? 'text-brand' : 'text-white hover:text-brand'
              }`}
              onClick={() => setMobileOpen(false)}
            >
              Investment Strategies
            </Link>
            <Link 
              to="/about" 
              className={`w-full max-w-sm py-3 font-medium text-center text-lg transition-colors border-b border-gray-800 ${
                isActive('/about') ? 'text-brand' : 'text-white hover:text-brand'
              }`}
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/booked-today" 
              className={`w-full max-w-sm py-3 font-medium text-center text-lg transition-colors border-b border-gray-800 ${
                isActive('/booked-today') ? 'text-brand' : 'text-white hover:text-brand'
              }`}
              onClick={() => setMobileOpen(false)}
            >
              Our Products
            </Link>

            <div className="w-full max-w-sm border-b border-gray-800">
              <button className="w-full flex items-center justify-center py-3 font-medium text-white hover:text-brand text-lg transition-colors gap-2 normal-case" onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}>
                Solutions
                <svg className={`w-5 h-5 transition-transform duration-200 ${mobileSolutionsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`flex flex-col items-center overflow-hidden transition-all duration-300 ${mobileSolutionsOpen ? 'max-h-96 pb-3' : 'max-h-0'}`}>
                <Link to="/capital-allocations" className="py-2 text-gray-400 hover:text-brand text-base transition-colors" onClick={() => setMobileOpen(false)}>Capital Allocations</Link>
                <Link to="/international-options" className="py-2 text-gray-400 hover:text-brand text-base transition-colors" onClick={() => setMobileOpen(false)}>International Options</Link>
                <Link to="/market-insight" className="py-2 text-gray-400 hover:text-brand text-base transition-colors" onClick={() => setMobileOpen(false)}>Market Insight</Link>
                <Link to="/potential-partnership" className="py-2 text-gray-400 hover:text-brand text-base transition-colors" onClick={() => setMobileOpen(false)}>Potential Partnership</Link>
              </div>
            </div>

            <Link 
              to="/stock-market" 
              className={`w-full max-w-sm py-3 font-medium text-center text-lg transition-colors border-b border-gray-800 ${
                isActive('/stock-market') ? 'text-brand' : 'text-white hover:text-brand'
              }`}
              onClick={() => setMobileOpen(false)}
            >
              Stock Market
            </Link>
            <Link 
              to="/contact-us" 
              className={`w-full max-w-sm py-3 font-medium text-center text-lg transition-colors border-b border-gray-800 ${
                isActive('/contact-us') ? 'text-brand' : 'text-white hover:text-brand'
              }`}
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </Link>
            <Link 
              to="/careers" 
              className={`w-full max-w-sm py-3 font-medium text-center text-lg transition-colors border-b border-gray-800 ${
                isActive('/careers') ? 'text-brand' : 'text-white hover:text-brand'
              }`}
              onClick={() => setMobileOpen(false)}
            >
              Careers
            </Link>
          </nav>
        </div>
      </header>
    </>
  )
}