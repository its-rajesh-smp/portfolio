import React from 'react';
import './Footer.css';
import {BsLinkedin} from 'react-icons/bs';
import {ImGithub} from 'react-icons/im';
import {BsInstagram} from 'react-icons/bs'
const Footer = () => {
  return (
 <footer id='footer'>

 <a href="#" className='footer__logo'>Rajkumar Jangam</a>


 <ul className='permalinks'>
  <li><a href="#">Home</a></li>
  <li><a href="#about">about</a></li>
  <li><a href="#experience">Experience</a></li>
  <li><a href="#services">Services</a></li>
  <li><a href="#portfolio">Portfolio</a></li>
  <li><a href="#testimonials">Testimonials</a></li>
  <li><a href="#contact">Contact</a></li>

 </ul>

 <div className="footer__socials">
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/" target="_blank" rel="noreferrer"><ImGithub/></a>
        <a href="https://instagram.com/" target="_blank" rel="noreferrer"><BsInstagram/></a>

 </div>

 <div className="footer__copyright">
  <small>&copy; Rajkumar Jangam, All rights reserved.</small>
 </div>

 </footer>
  )
}

export default Footer