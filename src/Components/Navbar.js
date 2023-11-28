import {Link, useLocation} from "react-router-dom";

import { useState  } from 'react'

import Sidebar from './Sidebar'
import {faHome, faList, faCog} from "@fortawesome/free-solid-svg-icons"

function Navbar() {
  const [showSidebar, setShowsidebar] = useState(false)
  const location = useLocation()
  const links = [
    {
      name: "Home",
      path: "/",
      icon:faHome

    },
    {
      name:"Menu",
      path: "/Menu",
      icon:faList
    },

    {
      name:"Setting",
      path:"/setting",
      icon:faCog
    }
  ]
  function closeSidebar(){
    setShowsidebar(!showSidebar)
  }
  return (
    <>
    <div className='navbar container'>
     <Link to="/" className='logo'>
     Y<span>UMMY</span> C<span>HA</span> </Link>
     <div className='nav-links'>
      {links.map(link => (
        <Link className= {location.pathname === link.path ?  "active" : "" } to={link.path} key={link.name}>{link.name}/</Link>
      )) }
       
     </div>
     <div onClick ={()=>closeSidebar()} className={showSidebar ? "sidebar-button active":"sidebar-button"}>
      <div className='bar'></div>
      <div className='bar'></div>
      <div className='bar'></div>
     </div>
    </div>
    {showSidebar && <Sidebar closeSidebar={closeSidebar} links={links}/> }
   
    </>
    
  )
}

export default Navbar
