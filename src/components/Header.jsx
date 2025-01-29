import React, { useState } from 'react'
import { IoIosCart } from "react-icons/io";
import { Link } from 'react-router-dom';

function Header() {
    
  return (
    <div className="header">

       <h1> <Link to="/"> Build Your Own Sub </Link></h1>
       <Link to="/cart">
        Cart <IoIosCart />
        </Link>
    </div>
  )
}

export default Header