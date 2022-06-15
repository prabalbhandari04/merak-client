import React from 'react'
import { Link } from 'react-router-dom'
import './home.css';
import Navbar from '../../Components/Organisms/sidebar';
const Home = () => {
  return (

    <div className='container'>
      <Navbar/>
      <div className="dev">
      <h1>Merak | Home</h1>
      <Link to="/inventory" style={{textDecoration: 'none', color: 'gray'}}><h3>Go to Inventory</h3></Link>
      <Link to="/order" style={{textDecoration: 'none', color: 'gray'}}><h3>Go to Order</h3></Link>
      </div>

    </div>
  )
}

export default Home