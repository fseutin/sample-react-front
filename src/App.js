import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
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

const Profile = () => {return(<div className='profile'><h1>My Profile</h1></div>)}
const Sub1 = () => {return(<h1>Profile/Sub1</h1>)}
const Sub2 = () => {return(<h1>Profile/Sub2</h1>)}
const Activity = () => {return(<h1>My Activity</h1>)}
const Info = () => {return(<h1>Info</h1>)}

class App extends Component {
  state = {
    sideMenuOpen : true,
    content : "profile"
  }
  toggleSideMenu = () => {
    this.setState( { sideMenuOpen : !this.state.sideMenuOpen } )  // On change le state avec mise à jour de la page html
  }
  render () {
    /* Gère l'état fermé/ouvert du SideMenu */
    return (
      <Router>
        <div className='App'>

          <SideMenu sideMenu={sideMenu} sideMenuOpen={this.state.sideMenuOpen} toggleSideMenu={this.toggleSideMenu}>
          </SideMenu>
        
          <div className={`content ${this.state.sideMenuOpen ? "" : "large"}`} >
            <Routes>
              <Route path="/" element={<Profile />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/sub1" element={<Sub1 />} />
              <Route path="/profile/sub2" element={<Sub2 />} />
              <Route path="/activity" element={<Activity />} />
              <Route path="/info" element={<Info />} />
            </Routes>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
