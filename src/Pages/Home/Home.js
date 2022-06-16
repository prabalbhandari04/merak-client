import React from 'react'
import { Link } from 'react-router-dom'
import './home.css';

const Home = () => {
  return (

    <div className='container'>
      <h1>Merak | Home</h1>
      <Link to="/inventory" style={{textDecoration: 'none', color: 'gray'}}><h3>Go to Inventory</h3></Link>
      <Link to="/order" style={{textDecoration: 'none', color: 'gray'}}><h3>Go to Order</h3></Link>
      <Link to="/register" style={{textDecoration: 'none', color: 'gray'}}><h3>Go to Register</h3></Link>
      <Link to="/login" style={{textDecoration: 'none', color: 'gray'}}><h3>Go to Login</h3></Link>
      <Link to="/bill" style={{textDecoration: 'none', color: 'gray'}}><h3>Go to Invoice</h3></Link>

    </div>
  )
}

export default Home