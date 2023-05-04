
import React from 'react'
import {useNavigate} from "react-router-dom"


const Navbar = () => {
  const navigate = useNavigate();
  
const go=()=>{
  navigate("/Solutions")
};

const change=()=>{
  navigate("/Feature" )
};
const newpage=()=>{
  navigate("/Plans" )
};
const same=()=>{
  navigate("/Pricing")
};
const what=()=>{
  navigate("/Resources" )
};
 const page=()=>{
  navigate("/Login")
 };
 const got=()=>{
  navigate("/Troll")
 };
  
  return (
    

    <div>
        <div className='Navbar'>
       
            <div className='trello'>
                   
            </div >
            <div  className='content' >
            <h2 >Trello</h2>
            
                <h4 onClick={change}> Features</h4> 
                 <h4 onClick={go}>Solutions</h4>
                  <h4 onClick={newpage}  >Plans</h4>  
                  <h4 onClick={same}>Pricing</h4>   
                    <h4 onClick={what} >Resources</h4>
                    <h4 onClick={page}>Log in</h4>
                    <button onClick={got} > Get troll for free</button>
            </div>
           

        </div>
    </div>
  )
}

export default Navbar