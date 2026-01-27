import React from 'react'

const Header = () => {
  return (
    <>
      <nav className='navbar container pt-3 pb-3 align-items-start'>
        <a className='navbar-brand text-light' href="">Stock Prediction Portal</a>

        <div>
          <a className='btn btn-outline-info' href="">Login</a>
          <a className='btn btn-info ms-2' href="">Register</a>
        </div>      
      </nav>
    </>
  )
}

export default Header