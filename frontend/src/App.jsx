import React, { useEffect } from 'react'            // ✅ added useEffect
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useSelector } from 'react-redux'           // ✅ added to access theme from Redux

import Home from './pages/Home'
import Blogs from './pages/Blogs'
import About from './pages/About'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import YourBlog from './pages/YourBlog'
import Comments from './pages/Comments'
import CreateBlog from './pages/CreateBlog'
import UpdateBlog from './pages/UpdateBlog'
import BlogView from './pages/BlogView'
import Footer from './components/Footer'
import SearchList from './pages/SearchList'

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Navbar /><Home /><Footer/></>
  },
  {
    path: "/blogs",
    element: <><Navbar /><Blogs /><Footer/></>
  },
  {
    path: "/about",
    element: <><Navbar /><About /><Footer/></>
  },
  {
    path: "/search",
    element: <><Navbar /><SearchList /><Footer/></>
  },
  {
    path: "/login",
    element: <><Navbar /><Login /></>
  },
  {
    path: "/signup",
    element: <><Navbar /><Signup /></>
  },
  {
    path: "/blogs/:blogId",
    element: <><Navbar /><BlogView /></>
  },
  {
    path: "/dashboard",
    element: <><Navbar /><Dashboard /></>,
    children: [
      {
        path: "profile",
        element: <Profile />
      },
      {
        path: "your-blog",
        element: <YourBlog />
      },
      {
        path: "comments",
        element: <Comments />
      },
      {
        path: "write-blog",
        element: <CreateBlog />
      },
      {
        path: "write-blog/:blogId",
        element: <UpdateBlog />
      },
    ]
  }
])

const App = () => {
  const { theme } = useSelector((state) => state.theme)   // ✅ Get theme from Redux

  // ✅ Automatically add/remove Tailwind dark class based on Redux theme
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <>
      {/* ✅ Added wrapper div for dark/light backgrounds */}
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
