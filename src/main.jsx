import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: "Page Not Fund",
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/product-detail/:id', // This Called Daynamic Routing
        element: <Home />
      }
    ]
  },

])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
)
