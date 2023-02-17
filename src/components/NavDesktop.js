import React from 'react'
import NavLinks from './NavLinks'
import NavCSS from "./Nav.module.css";



export default function  NavDesktop() {
  return (
    <div className={NavCSS.desktop}>
      <NavLinks />
    </div>
  )
}
