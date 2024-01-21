import React from 'react'
import "./topbar.scss"
import {Person, Mail} from "@material-ui/icons";


export default function Topbar({menuOpen,setMenuOpen}) {
  return (
    <div className={'topbar ' + (menuOpen && "active")}id='topbar'>
       <div className="wrapper">
        <div className="left">
            <a href='#works' className='logo'>Portfolio</a>
            <div className="itemContainer">
                <Person className='icon'/>
                <span> 45 556</span>
            </div>
            <div className="itemContainer">
                <Mail className='icon'/>
                <span> ppalampa@buffalo.edu</span>
            </div>
        </div>
        <div className="right">
            <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                <span className='line1'></span>
                <span className='line2'></span>
                <span className='line3'></span>

            </div>
        </div>
        </div> 
       
    </div>
  )
}
