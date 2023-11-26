import React,{ useState } from "react";
import './index.css'

const UseStateObject = () => {
//use state is a function which will accept a default value
// & return two values one is the actula value & and the other is function which can be used to modify the state.

    let [obj,setObj]=useState({
        age:28,
        name:"Nandeeswar",
        msg:"Hey !! Buddy"
    });


    return (
        <React.Fragment>
            <h3>Dealing with Objects</h3>
            <h2>{obj.age}</h2>
            <h2>{obj.name}</h2>
            <h2>{obj.msg}</h2>
            {/* <button className="btn" onClick={()=>setObj({})}>Remove</button> */}
            {/* modifying particular parameter using useState */}
            <button onClick={()=> {
                setObj({...obj,age:24,msg:"Hey string is updated"});
            }
            }>Change</button>

          
            
        </React.Fragment>
    )




}

export default UseStateObject;