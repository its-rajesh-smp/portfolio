import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {ImGithub} from 'react-icons/im';
import {BsInstagram} from 'react-icons/bs'
const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href="https://www.linkedin.com/in/rajkumar-jangam-127899202/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/rajkumar-1997" target="_blank" rel="noreferrer"><ImGithub/></a>
        <a href="https://www.instagram.com/rajkumarjangam_18/" target="_blank" rel="noreferrer"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocial