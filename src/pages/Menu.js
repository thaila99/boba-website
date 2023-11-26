import PreviousSearch from "../Components/PreviousSearch"
import MenuCard from "../Components/MenuCard"


function Menu() {
    const menu = [
      {title: "Black Oolong Tea",
       image: "/img/gallery/img1.jpg",
       authorImg: "/img/top-chefs/img1.jpg",
      },

      {title: "Strawberry MilkTea",
       image: "/img/gallery/img2.jpg",
       authorImg: "/img/top-chefs/img2.jpg",
      },

      {title: "Butterfly flower MilkTea",
       image: "/img/gallery/img3.jpg",
       authorImg: "/img/top-chefs/img4.jpg",
      },

      {title: "Matcha MilkTea",
       image: "/img/gallery/img4.jpg",
       authorImg: "/img/top-chefs/img5.jpg",
      },

      {title: "Brown Sugar MilkTea",
       image: "/img/gallery/img5.jpg",
       authorImg: "/img/top-chefs/img6.jpg"
      },

      {title: "Ube MilkTea",
       image: "/img/gallery/img6.jpg",
       authorImg: "/img/top-chefs/img4.jpg"
      },




    ].sort(()=> Math.random() -0.5)


  return (
    <div>
<PreviousSearch/>
<div className="menu-container">
{/*<MenuCard/>*/}
{menu.map((menu, index)=>(
  <MenuCard key={index} menu={menu}/>))}


</div>
    </div>
  )
}

export default Menu
