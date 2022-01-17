import React from 'react'
import './SubMenuItem.css'

const SubMenuItem = (props) => {
    const { name } = props
    return (
        <li>
            <a className='sub-menu-item'>
                {name}
            </a>
        </li>
    )
}

export default SubMenuItem