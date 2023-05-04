import React from 'react'
import Solutions from './components/Solutions.jsx';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Feature from './components/Feature.jsx';
import "./App.css"
import Homepage from './components/Homepage.jsx';
import Plans from './components/Plans.jsx';
import Pricing from './components/Pricing.jsx';
import Login from './components/Login.jsx';
import Resources from './components/Resources.jsx';
import Troll from './components/Troll.jsx';
const App = () => {
 
  


  return(
    <>
    <BrowserRouter>
    <Routes>
    <Route exact path="/Feature" element={<Feature/>}/>
    <Route exact path="/" element={<Homepage/>}/>
    <Route exact path="/Solutions" element={<Solutions/>}/>
    <Route exact path="/Plans" element={<Plans/>}/>
    <Route exact path="/Pricing" element={<Pricing/>}/>
    <Route exact path="/Resources" element={<Resources/>}/>
    <Route exact path="/Login" element={<Login/>}/>
    <Route exact path="/Troll" element={<Troll/>}/>
    </Routes>
    </BrowserRouter>
    
      
  
   

    </>
   
   
    
  )

}
export default App 















// const[email, setEmail]=useState(" ");
// const[password, setPassword]=useState("");

// const[name, setName]=useState("login");
// //const[NewEntry, setNewEntry]=useState([]);

// const change=()=>{
//   setName(name);
// };
 
// const submitForm=()=>{
//   const newEntry={email:email, password:password};
//   //setNewEntry([newEntry]);
//   console.log(newEntry);
// };

// return(
// <>
    
// <form action=''onSubmit={submitForm}>
//   <div>
//     <label htmlFor='email' >Email</label>
//     <input type="text" name='email' id='email' autoComplete='off'
//       value={email}
//       onChange={(e)=> setEmail(e.target.value)}

//       />
//   </div>
//   <div>
//     <label htmlFor='password'>Password</label>
//     <input type='password' name='password'id='password' autoComplete='off' 
//         value={password}
//         onChange={(e)=>setPassword(e.target.value)}
//     />
//   </div >
//      <div>
//       <button onClick={change}>login</button>
//      </div>
    
// </form>

//</>
//)
//export default App 
















/*const  [num, setNum]=useState(0)

  
  const incNum = ()=>{
    setNum(num+1)

  };
  const dncNum=()=>{
    setNum(num-1)
    if(num<1){
      setNum(0);
      alert("this is the last value")
    }
    else{

      setNum(num-1);
    }   

  };
  return(
    
      <div>
        <h1>{num}</h1>
        <button onClick={incNum}>increament</button>
        
        <button onClick={dncNum}>decrement</button>

      </div>

    

  )
}

export default App





















  const black= "black";
  const [bg,  setbg] = useState(black);
  const [name, setName] = useState("click me");
const Change = ()=> {
    //console.log('clicked');
    let newbg='grey';
    setbg(newbg);
    setName("Double Click Me To See Magic!!!! ");
  };
  const back =() =>{
    setbg('#9b59b6');
    setName("omkar hagla chaddit shalet: HAHAHAHAHAHAHA");
   
  };


return (
  <>
    <div style={ {backgroundColor:bg} }>
      <button onMouseEnter={Change} onMouseLeave={back}>{name} </button>

    </div>
            
    </>

  )
}

 export default App */
