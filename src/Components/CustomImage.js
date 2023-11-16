

export default function CustomImage({imgSrc, pt}) {
  console.log('imgSrc',imgSrc)
  return (

    <div className='custom-image' style={{paddingTop:pt}}>
    <img src={imgSrc} alt="Yummy Cha"></img>
    </div>  
  )
}

 
