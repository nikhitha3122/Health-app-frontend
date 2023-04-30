import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/nav.css"
function Navbar() {
	
  return (
	<nav>
	<ul className="list">
	<Link to="/" className='items'>Home</Link>
	<Link to="/diabetes" className='items'>Diabetes</Link>
	<Link to="/liver" className='items'>Liver</Link>
	<Link to="/kidney" className='items'>Kidney</Link>
	<Link to="/heart" className='items'>Heart</Link>
	<Link to="/cancer" className='items'>Cancer</Link>
	</ul>
	<button className="btn">BTN</button>
    </nav>
  )
}
export default Navbar