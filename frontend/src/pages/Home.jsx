import React from 'react'
import Hero from '../Components/Hero'
import RecentBlog from '../Components/RecentBlog'
import PopularAuthors from '../Components/PopularAuthors'

const Home = () => {
  return (
    <div className='pt-20'>
      <Hero/>
      <RecentBlog/>
      <PopularAuthors/>
    </div>

  )
}

export default Home