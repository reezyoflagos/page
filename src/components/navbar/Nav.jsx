import React from 'react'
import  './style.css'
import { FaBolt,FaDownload } from "react-icons/fa";

const Nav = () => (
  <div className='nav'>
    <div className='navs'>
     <FaBolt/>
     <span>
      Fintrack
     </span>

    </div>
    <div className='right'>
      <ul>
        <li>
            Home
        </li>
        <li>
          About Us
        </li>
        <li>
          Product
        </li>
      </ul>
      <button>
      <FaDownload/>
        Download App
      </button>
    </div>

  </div>
)

export default Nav
