
export default function BeMember(){
    const list = [
        "  Earn Points When You Purchase Items",
        "  Save More When Order Big Catering",
        "  Family Meals Sharing - Saving",
        "  More Benefits and Discount",
        "  Exchange gifts",
        "  Birthday Free Meals"

    ]
    return(
        <div className="section be-member">
            <div className="col img">
         <img src="/img/gallery/img10.jpg" alt="/"></img>
         </div>
        <div className="col typography">
          <h1 className="title">Be A Part of Our Family Now!</h1>
          {list.map((item, index)=> (
            <p className="member-item" key={index}>{item}</p>
          )) }
          <button className="button">Join Us Now</button>
        </div>
         
      </div>
    )
}