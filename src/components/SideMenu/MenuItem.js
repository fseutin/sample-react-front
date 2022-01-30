import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom"
import './MenuItem.css'

const SideMenuItem = (props) => {
    const {name, icon,  to,  onClickItemBtn, sideMenuOpen, children} = props
    /*const [ itemSelected, toggleItemSelected] = useState(false)*/
    
    return (
        <li>
            <NavLink to = {to} className='menu-item' 
                //onClick={() => {onClickItem(index) }}
                >
                <div className='menu-item-btn' onClick={() => {onClickItemBtn(true)}}>
                    <i className={`bi ${icon}`}></i>
                </div>
                <span>{name}</span>
            </NavLink>
            {children}
        </li>
    )
}

export default SideMenuItem