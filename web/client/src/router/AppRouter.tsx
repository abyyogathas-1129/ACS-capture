import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from '../components/layout/MainLayout'
import AboutPage from '../pages/AboutPage'
import HomePage from '../pages/HomePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
    ],
  },
])

function AppRouter() {
  return <RouterProvider router={router} />
}

export default AppRouter
