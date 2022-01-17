import React, { Component } from 'react'
import SideMenu from './components/SideMenu/SideMenu'
import logo from './resources/logo.png'
import footerLogo from './resources/W.png'
import './App.css';

/* Contenu du menu*/
const sideMenu = {
  logo : { img : logo, alt : 'Project logo', to : '/'},
  search : {searchPlaceHolder:'My search', to : ''},
  menu : [
    {name : 'Profile', icon : 'bi-person-square', alt : 'Profile', to : '/Profile',
    subMenu : [
      {name :'Sub1', alt : 'Sub1', to: '/profile/sub1'},
      {name :'Sub2', alt : 'Sub1', to: '/profile/sub2'}
    ]},
    {name : 'Activity', icon : 'bi-activity', alt : 'Activity', to : '/activity'},
    {name : 'Info', icon : 'bi-globe2', alt : 'Info', to : '/Info'}
  ],
  footer : { img : footerLogo, alt : 'W Logo', title : 'W Info', description : 'My W web site', to : '/Info' }
}

class App extends Component {
  render () {
    return (
      <div className='App'>
        <SideMenu sideMenu={sideMenu}>
        </SideMenu>
      </div>
    )
  }
}

export default App
