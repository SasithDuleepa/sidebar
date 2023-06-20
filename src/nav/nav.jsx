import React, { useState } from 'react'
import './nav.css';
import { BiMenu , BiCaretLeft } from "react-icons/bi";


export default function Navibar() {
    const[icon, setIcon] = useState(<BiCaretLeft/>);
    const[navname, setNavname] = useState("nav-bar");
    const[navlinknames, setNavlinknames] = useState("nav-link-names");
    const changeIcon=()=>{
        
        if (icon.type.name === 'BiMenu'){
            setIcon(<BiCaretLeft/>)
            setNavname("nav-bar")
            setNavlinknames('nav-link-names')
        }else if(icon.type.name=== 'BiCaretLeft'){
            setIcon(<BiMenu/>)
            setNavname("nav-bar-toggle")
            setNavlinknames("nav-link-names-toggle")
        }
    }
  return (
    <div>
        <div className={navname}>
        <a onClick={changeIcon}  className='Nav-icon-on'>{icon}</a>
        
            <div className='head'>

            </div>

            <div className='nav-menu'>
                
                <ul>
                    <li><div className='Nav-link'>< BiMenu/> <div style={{ display:"inline" }}><a className={navlinknames}>HOME</a></div></div></li>
                    
                </ul>

            </div>
        </div>
       
    </div>
  )
}
