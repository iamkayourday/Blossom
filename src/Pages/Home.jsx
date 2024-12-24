import React from 'react'
import Hero from '../Components/Hero'
import Header from '../Components/Header'
import CategoryList from '../Components/Categories/CategoryList'
import ProductList from '../Components/Categories/ProductList'

const Home = () => {
  return (
    <div>
        <Header />
        <Hero />
        <CategoryList />
        <ProductList />
    </div>
  )
}

export default Home