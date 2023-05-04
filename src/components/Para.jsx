import React,{useEffect,useState} from "react";
import Anime from "./image/Logo.png";
import axios from "axios"


 

const Para = () => {

  const [newData, setnewData] = useState([])
  
   useEffect(() => {
   getData()
});


 


 const getData=async()=>{
  const result= await axios.get("https://fakestoreapi.com/products/category/jewelery")
  console.log(result.data)
  setnewData(result.data)
  

 };
  return (
    <>
    <div className="Para">
      <div className="details">
        <p>
          Trello brings all your tasks,teammates,and tools together Keep
          everything in the same place even if your team isn’t.
        </p>
      </div>

      <div className="images"> 
        <img src={Anime} alt="logo" />
      </div>
    </div>

      <div className="cardSection">
      {newData.map((item)=>(
      
      <div className="card">
      <img src={item.image} alt="Avatar" style={{"width":"100px"}}/>
      <div className="container">
        <h4 clas><b>{item.title}</b></h4> 
        <p>{item.category}</p> 
      </div>
    </div>

   ))}

      </div>
   
    </>
  );
};

export default Para;
