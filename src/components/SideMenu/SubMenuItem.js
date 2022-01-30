import React from 'react'
import { NavLink } from "react-router-dom"
import './SubMenuItem.css'

const SubMenuItem = (props) => {
    const { name, to } = props
    return (
        <li>
            <NavLink to = {to} className='sub-menu-item'>
                {name}
            </NavLink>
        </li>
    )
}

export default SubMenuItem