import React from 'react'
 function Image({images}) {  
  if(images){
    return (
      <div>
         <div id='pic'>{
           images.map(photo=> {          
             return <img className='base' src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt="" key={photo.id} />
            })
          }
         </div>
      </div>
    )
  }
 
}
export default Image;