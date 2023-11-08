

export default function CustomImage(imgSrc, pt) {
  console.log('imgSrc11',imgSrc)
  return (

    <div className="custom-image" style={{paddingTop:pt}}>
    <img src={imgSrc} alt="YummyCha"/>
    </div>  
  )
}

 
