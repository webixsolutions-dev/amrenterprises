import Navbar from './Navbar'
import Footer from './Footer'
import CookieConsent from '../ui/CookieConsent'

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <CookieConsent />
    </div>
  )
}
