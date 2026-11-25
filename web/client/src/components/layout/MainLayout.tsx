import { Outlet, ScrollRestoration } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

// Shared page frame; each page is shown where <Outlet /> is
function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      {/* Opens each new page at the top instead of where you scrolled to */}
      <ScrollRestoration />
    </div>
  )
}

export default MainLayout
