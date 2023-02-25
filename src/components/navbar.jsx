import axios from 'axios'
import React, { useContext,useEffect,useState} from 'react'

import {InputContext} from "../context/inputContext"
 function Navbar() {
const {setImages}= useContext(InputContext)
const [cat,setCat] =useState("")
const [input, setInput] = useState("true")
const [search, setSearch] = useState("");

const catSearch =(event)=>{
setCat(event.target.innerText)

}
useEffect(()=>{
    if(cat){
        searchImages();
        
    }
    if(search){
        searchImages(); 
             
    }
    async function searchImages() {
    
        let url = `https://api.flickr.com/services/rest/?method=flickr.images.search&api_key=${'29222b4cf9883460303c308c3a7fa3db'}&format=json&nojsoncallback=1&text=${input}`;
       
        if (cat) {
          url += `&tags=${cat}`;
        }        
       await axios.get(url)      
          .then(data => {                
            setImages(data.data.images.photo);
          })
          .catch(error => {
            console.error(error);
          })
    }
},[cat,search])

const handleSearch=()=>{    
    setSearch(input)
}
   
    return (
        <div>
            <div>
                <h1>SnapShot</h1>
                <input type="text" onChange={(e)=>{setInput(e.target.value)}} />
                <button onClick={()=>handleSearch()}><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <div id='category'>
            <span onClick={(e)=>catSearch(e)}>Mountain</span>
                <span onClick={(e)=>catSearch(e)}>Beaches</span>
                <span onClick={(e)=>catSearch(e)}>Birds</span>
                <span onClick={(e)=>catSearch(e)}>Food</span>
            </div>
        
            
        </div>
    )
}
export default  Navbar;