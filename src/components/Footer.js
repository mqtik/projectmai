import React from 'react'
import FooterCSS from "./Footer.module.css";

export default function Footer() {
  return (
    <div>
      <footer className={FooterCSS.footerdiv} >
        <p >MovFlix - All rights reserved - 2021</p>
      </footer>
    </div>
  )
}
