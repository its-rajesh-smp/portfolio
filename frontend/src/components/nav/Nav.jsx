import React,{useState} from 'react';
import './Nav.css';
import {BiHome} from 'react-icons/bi'
import {BiUser} from 'react-icons/bi'
import {BiBook}from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BsMessenger} from 'react-icons/bs'

const Nav = () => {
  const [activeNav,setActiveNav]=useState('#');
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')} className={activeNav==='#'?'active':' '}><BiHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about'?'active':' '}><BiUser/></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience'?'active':' '}><BiBook/></a>
      <a href="#services" onClick={()=>setActiveNav('#services')} className={activeNav==='#services' ?'active':' '}><RiServiceLine/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact'?'active':' '}><BsMessenger/></a>
    </nav>
  )
}

export default Nav