import React from 'react'
import {FaLinkedin, FaGithub, FaInstagram, FaFacebook} from "react-icons/fa"
import {FaSquareXTwitter} from "react-icons/fa6"

const Nav = () => {
  return (
    <div className='flex items-center justify-between h-20'>
    <div className='flex items-center flex-shrink-0'>
    </div>
    <div className='flex justify-center gap-4 m-8 text-2xl item-center'>
        <FaLinkedin/>
        <FaFacebook/>
        <FaGithub/>
        <FaInstagram/>
        <FaSquareXTwitter/>
    </div>
    </div>
  )
}

export default Nav
