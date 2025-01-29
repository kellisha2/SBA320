import React, { useState } from 'react'
import { IoIosCart } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";


function Header() {
    
  return (
    <div className="header">
       <Link to="/"><IoMdHome /></Link> 
       
       <h1> Build Your Own Sub</h1>
       <Link to="/cart">
        Cart <IoIosCart />
        </Link>
    </div>
  )
}

export default Header