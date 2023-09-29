
import { useState  } from 'react'

import Sidebar from './Sidebar'
import {faHome, faList, faCog} from "@fortawesome/free-solid-svg-icons"

function Navbar() {
  const [showSidebar, setShowsidebar] = useState(true)
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
    setShowsidebar(false)
  }
  return (
    <>
    <div className='navbar container'>
     <a href="#!" className='logo'>
     Y<span>UMMY</span> C<span>HA</span> 
       </a>
     <div className='nav-links'>
      {links.map(link => (
        <a href="#!" key={link.name}>{link.name}</a>
      ))}
       
     </div>
     <div href onClick ={()=>setShowsidebar(true)} className={showSidebar ? "sidebar-button active":"sidebar-button"}>
      <div className='bar'></div>
      <div className='bar'></div>
      <div className='bar'></div>
     </div>
    </div>
    {showSidebar && <Sidebar closeSidebar={closeSidebar} links={links}/> }
    <Sidebar links={links}/>
    </>
    
  )
}

export default Navbar
