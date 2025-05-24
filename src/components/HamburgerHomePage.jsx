import React from 'react'
import { GoArrowLeft } from "react-icons/go";
import { GoListUnordered } from "react-icons/go";
import { Link } from 'react-router';

const HamburgerHomePage = () => {
  return (
    <div>
      <div className='flex justify-between'>
        <Link to="/"><div className='cursor-pointer'><GoArrowLeft className='w-6 h-6'/></div></Link>
        <div className='cursor-pointer'><GoListUnordered className='w-6 h-6'/></div>
      </div>
    </div>
  )
}

export default HamburgerHomePage
