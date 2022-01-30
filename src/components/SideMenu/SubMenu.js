import React, {useState} from 'react'
import './SubMenu.css'

const SideSubMenu = (props) => {
    const { children, sideMenuOpen } = props
    /*Etat local
    [nomDeLaVariable, Fonction d'affectation de la variable] = useState(Etat initial)
    equivalent à  :  nomDeLaVariable = toggleSubMenu(var) {return var}*/
    const [subMenuOpen, toggleSubMenu] = useState(false)
    return (
        <div className="sub-menu">
            <div className="sub-menu-btn" 
                onClick={ () => {toggleSubMenu(!subMenuOpen)}}>
                {subMenuOpen ? <i className="bi bi-chevron-down"></i> : <i className="bi bi-chevron-left"></i>}
            </div>
            {/* On cache le sous menu si il est non développé ou si la sideBarre est fermée */}
            <div className={`sub-menu-items ${!subMenuOpen||!sideMenuOpen ? "inactive" : ""} `}>
                <ul>
                    { children }
                </ul>
            </div>
        </div>
    )
}

export default SideSubMenu