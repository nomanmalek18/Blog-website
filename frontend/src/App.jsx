import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './Components/Navbar'
import Blog from './pages/Blogs'
import About from './pages/About'
import SearchList from './pages/SearchList'
import ProtectedRoute from './Components/ProtectedRoute'
import BlogView from './pages/BlogView'
import CreateBlog from './pages/CreateBlog'
import Profile from './pages/Profile'
import Dashboard from './pages/Dashboard'
import UpdateBlog from './pages/Updateblog'
import YourBlog from './pages/YourBlog'
import Comments from './pages/Comment'
import Signup from './pages/Singup'
import Login from './pages/Login'
import Footer from './Components/Footer'

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Navbar/><Home /><Footer/></>
  },
  {
    path: "/blogs",
    element: <><Navbar/><Blog /><Footer/></>
  },
  {
    path: "/about",
    element: <><Navbar/><About /><Footer/></>
  },
  {
    path: "/search",
    element: <><Navbar/><SearchList/><Footer/></>
  },
  {
    path: "/blogs/:blogId",
    element: <><Navbar/><ProtectedRoute><BlogView /></ProtectedRoute></>
  },
  {
    path: "/write-blog",
    element: <><Navbar/><CreateBlog /></>
  },
 
  {
    path: "/profile",
    element: <><Navbar/><Profile /></>
  },
  // {
  //   path: "write-blog/:blogId",
  //       element: <><Navbar/><CreateBlog /></>
  // },
  // {
  //   path: "/dashboard",
  //   element: <><Navbar/><Dashboard /></>
  // },
  {
    path:"/dashboard",
    element: <><Navbar/><ProtectedRoute><Dashboard/></ProtectedRoute></>,
    children:[
      {
        path: "write-blog",
        element:<><CreateBlog/></>
      },
      {
        path: "write-blog/:blogId",
        element: <><UpdateBlog /></>
      },
      {
        path: "your-blog",
        element:<YourBlog/>
      },
      {
        path: "comments",
        element:<Comments/>
      },
      {
        path: "profile",
        element:<Profile/>
      },
      
      
    ]
   },
  {
    path: "/signup",
    element: <><Navbar/><Signup /></> 
  },
  {
    path: "/login",
    element: <><Navbar/><Login /></>
  },
])

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App