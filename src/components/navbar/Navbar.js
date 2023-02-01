import React,{useState} from 'react'
import "./Navbar.css"
import "./NavMedia.css"
import logo1 from "../../assets/logo/logo1.png"
import logo2 from "../../assets/logo/logo2.png"
import {NavLink} from "react-router-dom"
import {ROUTERS} from "../../data/Navbars"
import {FaBars} from "react-icons/fa"
import {GiCancel} from "react-icons/gi"

function Navbar() {
    let activeStyle = {
        textDecoration: "underline",
        color: "#000"};
    const [site,setSite] =useState(false)
  return (
    <div className='navbar'>
        <div className="navbar__logo">
            <NavLink  to="/">
            <img className='nav__logo2' src={logo2} alt="" />
            <img className='nav__logo1' src={logo1} alt="" />
            
            </NavLink>
        </div>
        <div className="navbar__collection">

            {
                
                
            ROUTERS?.map((item,index)=>(
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined } key={item.id} to={item.link}>
            <li className="navbar__item">{item.title}</li>
            </NavLink>

                ))
            }
            
            
        </div>
        <div className="navbar__contact">
            <p>+3 8(050) 747 02 62</p>
            <p>+3 8(096) 565 95 33</p>
            <p>+3 8(093) 170 21 73</p>
            <p>Заказать обратный звонок</p>
        </div>
        <div className="navbar__bars"><FaBars onClick={()=> setSite(true)} /></div>
      



    {
        site && (
            <div className="navbar__sitebar">
            <div className="navbar__cancel">
            <span>{<GiCancel onClick={()=>setSite(false)}/>}</span>
        </div>
        
        {
            ROUTERS?.map((item,index)=>(
                
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined } key={item.id} to={item.link}>
            <li className="sitebar__item">
                {item.title}</li>
            </NavLink>

                ))
            }

        </div>
        )
    }




    </div>
  )
}

export default Navbar