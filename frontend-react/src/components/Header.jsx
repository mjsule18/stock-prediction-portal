import React from 'react'
import { Link } from 'react-router-dom';
import Button from './Button'
const Header = () => {
  return (
    <>
      <nav className='navbar container pt-3 pb-3 align-items-start'>
        <Link className='navbar-brand text-light' to="/">Stock Prediction Portal</Link>

        <div>
          <Button text="Login" class='btn btn-outline-info' url="/login" />
          <Button text="Register" class='btn btn-info ms-2' url="/register" />
        </div>      
      </nav>
    </>
  )
}

export default Header