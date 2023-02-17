import React from 'react'
import NavLinks from './NavLinks'
import NavCSS from "./Nav.module.css";

export default function NavMobile() {
  return (
    <div className={NavCSS.mobile}>
      <NavLinks />
    </div>
  )
}
