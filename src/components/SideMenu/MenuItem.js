import React, { useEffect, useState } from 'react'
import './MenuItem.css'

const SideMenuItem = (props) => {
    const {name, icon, index, active, onClickItem, onClickItemBtn, sideMenuOpen, children} = props
    /*const [ itemSelected, toggleItemSelected] = useState(false)*/
    
    return (
        <li>
            <a className={`menu-item ${active  ? "active" : ""}`} 
                onClick={() => {onClickItem(index) }}>
                <div className='menu-item-btn' onClick={() => {onClickItemBtn(true)}}>
                    <i className={`bi ${icon}`}></i>
                </div>
                <span>{name}</span>
            </a>
            {sideMenuOpen ? 
                children 
                : ""}
        </li>
    )
}

export default SideMenuItem