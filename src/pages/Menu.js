import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"


function Menu() {
    const searches= ['boba','milktea', 'sweets', 'ice cream', 'snacks', 'crepes']
  return (
    <div className='previous-searches'>
     <h2>Previous Searches</h2>
     <div className='previous-searches-container'>
        {searches.map ((search,index) => (<div key={index} style={{animationDelay: index*.2+
        "s"}} className='search-item'>
            {search}
        </div>) )}

     </div>
     <div className='search-box'>
        <input type="text" placeholder=' Search for your order...'/>
        <button className='btn'>
            <FontAwesomeIcon icon={faSearch}/>
        </button>
     </div>
    </div>
  )
}

export default Menu
