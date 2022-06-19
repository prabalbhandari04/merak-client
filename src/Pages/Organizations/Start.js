import React from 'react'
import { Link } from 'react-router-dom'
import '../Home/home.css';

const Start = () => {
  return (

    <div className='container'>
      <h1>Get Started</h1>
      <div style={{flexDirection: 'row'}}>
            <Link to="/organization" style={{textDecoration: 'none', color: 'gray'}}><h3>Create Organization</h3></Link>
            <Link to="/teams" style={{textDecoration: 'none', color: 'gray'}}><h3>Create Team</h3></Link>
      </div>
    </div>
  )
}

export default Start