import React from "react"

const NavBar = () => {
  return (
    <nav>
        <h3>sort∙<span className="oblique">vi</span></h3>
        <div className='links'>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/more">More</a>
        </div>
    </nav>
  )
}

export default NavBar