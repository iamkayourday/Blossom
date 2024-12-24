import React from 'react'
import Hero from '../Components/Hero'
import Header from '../Components/Header'
import CategoryList from '../Components/Categories/CategoryList'

const Home = () => {
  return (
    <div>
        <Header />
        <Hero />
        <CategoryList />
    </div>
  )
}

export default Home