import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

  let [bgColor, setBgColor] = useState('transparent');

  let changeColor = ()=>{    
    setBgColor('#1abc9c')
  }


  return <>
      <nav className="navbar navbar-expand-lg py-4">
  <div className="container">
    <Link className="brand" to="">start framework</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="links">
      <ul className='d-flex justify-content-between align-items-center ps-0 mb-0'>
        <li>
          <Link onClick={changeColor} style={{backgroundColor: bgColor}} className='rounded-3 p-2' to="about">About</Link>
        </li>
        <li>
          <Link onClick={changeColor} style={{backgroundColor: bgColor}} className='rounded-3 p-2' to="portfolio">Portfolio</Link>
        </li>
        <li>
          <Link onClick={changeColor} style={{backgroundColor: bgColor}} className='rounded-3 p-2' to="contact">contact</Link>
        </li>

      </ul>
    </div>
    
  </div>
</nav>

    </>
}
