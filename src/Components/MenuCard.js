import CustomImage from "./CustomImage"

function MenuCard({menu}) {
  return (
    <div className='menu-card'>
        <CustomImage imgSrc={menu.image} pt="66%"/>
        <div className='menu-card-info'>
          <img className='author-img' src={menu.authorImg} alt=""></img>
          <p className="menu-title">{menu.title}</p>
          <p className="menu-desc">Blah blah Blah blah blah</p>
          <a className="order-btn" href="#!">ORDER NOW</a>
        </div>
      
    </div>
  )
}

export default MenuCard
