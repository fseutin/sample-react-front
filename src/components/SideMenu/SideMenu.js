import React, {useState} from 'react'

import './SideMenu.css'

import SideSubMenu from './SubMenu'
import SideMenuItem from './MenuItem'
import SubMenuItem from './SubMenuItem'


const SideMenu = (props) => {
    const { sideMenu, sideMenuOpen, toggleSideMenu } = props
    
    
    /* Gère le Menu Item qui est active grace à son index */
    //const [activeItemIndex, setActiveItem] = useState(-1);
    //Plus besoin car est géré par react-dom-router avec la classe "active" avec utilisation de Navlink
    
    return (
        <div className={`side-menu ${sideMenuOpen ? "" : "inactive"}`} >

                        {/* Top section with logo and toggle menu btn*/}
            <div className='top-section'>
                <div className='logo'>
                    <img src ={sideMenu.logo.img} alt={sideMenu.logo.alt}/>
                </div>

            </div>

                        {/* Search Area*/}
            <div className='search-controller'>
                <div className='search-btn' onClick={() => {toggleSideMenu(true)}}>
                    <i className="bi bi-search"></i>
                </div>
                <input type='text' placeholder={sideMenu.search.searchPlaceHolder}/>
            </div>

                        {/* Divider*/}
            <div className="divider"></div>

                        {/* The main menu with all items*/}
            <div className="main-menu">
                <ul>
                    {   // Render les item du menu et leur sous menu en fonction de la configurationn de "submenu"
                        sideMenu.menu.map((item, index) => (
                            //On doit passer toutes les infos à chaque composant pour le render
                            <SideMenuItem 
                                key={index} 
                                name={item.name} 
                                icon={item.icon}  
                                //index={index}
                                //active={activeItemIndex === index} 
                                to = {item.to}
                                sideMenuOpen={sideMenuOpen} 
                                //onClickItem={setActiveItem} 
                                onClickItemBtn={toggleSideMenu}>
                                {item.subMenu ? 
                                    <SideSubMenu
                                        sideMenuOpen={sideMenuOpen}>
                                        {item.subMenu.map((sub,idx)=> (
                                            <SubMenuItem 
                                                key={idx}
                                                name={sub.name}
                                                to = {sub.to} 
                                                 />
                                        ))}
                                        
                                    </SideSubMenu>
                                    : ""}
                                
                            </SideMenuItem>
                        ))
                    }    
                </ul>
            </div> 

                        {/* Footer */}
            <div className="side-menu-footer">
                <div className="side-menu-toggle">
                    <div className='toggle-menu-btn' 
                        onClick={toggleSideMenu}>
                        { sideMenuOpen ? <i className="bi bi-x-lg"></i> : <i className="bi bi-list"></i>}
                    </div>
                </div>
                <img src={sideMenu.footer.img} className='footer-logo'/>
                <div className="footer-info">
                    <h5>{sideMenu.footer.title}</h5>
                    <p>{sideMenu.footer.description}</p>
                </div>
                
            </div>

        </div>
    )
}

export default SideMenu