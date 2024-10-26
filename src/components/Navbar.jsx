import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
     <h1>Supa Crud App</h1>
     <Link to="/">Home</Link>
     <Link to="/create">Create New</Link>

    </nav>
  )
}

export default Navbar
