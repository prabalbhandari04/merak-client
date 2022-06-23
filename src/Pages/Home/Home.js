import React from 'react'
import { Link } from 'react-router-dom'
import './home.css';
import AddCustomer from '../../Components/Molecules/AddCustomer';
const Home = () => {
  return (

    <div className='container'>
      <h1>Merak</h1>
      <AddCustomer />
      <Link to="/inventory" style={{textDecoration: 'none', color: 'gray'}}><h3>Go to Inventory</h3></Link>
      <Link to="/order" style={{textDecoration: 'none', color: 'gray'}}><h3>Go to Order</h3></Link>
      <Link to="/register" style={{textDecoration: 'none', color: 'gray'}}><h3>Go to Register</h3></Link>
      <Link to="/login" style={{textDecoration: 'none', color: 'gray'}}><h3>Go to Login</h3></Link>
      <Link to="/invoice" style={{textDecoration: 'none', color: 'gray'}}><h3>Check Invoices</h3></Link>
      <Link to="/start" style={{textDecoration: 'none', color: 'gray'}}><h3>Go to Get Started</h3></Link>

    </div>
  )
}

export default Home
