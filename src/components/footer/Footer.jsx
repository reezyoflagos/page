import React from 'react'
import  './footer.css'
import { FaTwitter,FaFacebook,FaInstagram,FaYoutube,FaBolt } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='first'>
            <div className="row1">
        <FaBolt/>
     <span>
      Fintrack
     </span>

      </div>
            <div className="row2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime vero nesciunt iusto sunt, laboriosam quisquam officia nisi iste alias non. </div>
            <div className="row3"><FaFacebook/> <FaTwitter/> <FaInstagram/> <FaYoutube/> </div>

        </div>
        <div className='second'>
                        <li>
                          <h3>Links</h3>
                        </li>
                        <li><a href=''>Home</a></li>
                        <li><a href=''>Features</a></li>
                        <li><a href=''>About us</a></li>
                        <li><a href=''>Contact Us</a></li>
        </div>
        <div className='third'>
        <li>
                          <h3>Support</h3>
                        </li>
                        <li><a href=''>Faq</a></li>
                        <li><a href=''>Help Center</a></li>
                        <li><a href=''>Secuirty</a></li>
                        <li><a href=''>Accounts</a></li>

        </div>
        <div className='Fourth'>
        <li>
                          <h3>Legal</h3>
                        </li>
                        <li><a href=''>Privacy policy</a></li>
                        <li><a href=''>Terms and Conditions</a></li>
                        <li><a href=''>Secuirty</a></li>
                        <li><a href=''>Acessbility</a></li>

        </div>
      
    </div>
  )
}

export default Footer
