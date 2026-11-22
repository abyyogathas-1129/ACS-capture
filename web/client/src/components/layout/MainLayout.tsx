import { Outlet } from 'react-router-dom'

// Shared page frame; each page is shown where <Outlet /> is
function MainLayout() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout
