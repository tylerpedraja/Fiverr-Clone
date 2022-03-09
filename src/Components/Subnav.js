import React from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

const Subnav = () => {

  const navStyles = {
    fontSize: '0.85rem'
  }
  
  return (
    <div style={navStyles} className="d-none d-md-block subnav">
        <ul className="nav justify-content-center text-secondary">
  <li className="nav-item">
    <a className="nav-link" href="#">Graphics &amp; Design</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Digital Marketing</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Writing &amp; Translation</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Video &amp; Animation</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Music &amp; Audio</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Programming &amp; Tech</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Business</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Lifestyle</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Trending</a>
  </li>
</ul>
    </div>
  )
}

export default Subnav