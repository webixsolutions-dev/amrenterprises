import { useEffect } from 'react'
import { useLocation } from 'react-router-dom' // or 'react-router'
import Layout from './components/layout/Layout'
import AppRoutes from './routes/AppRoutes'
import FloatingChat from './components/ui/FloatingIcon'

function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [location.pathname]) 
  return (
    <Layout>
      <AppRoutes />
      <FloatingChat />
    </Layout>
  )
}

export default App