// Import use state react is optional
//useSTate is named import
import React,{useState} from 'react';
import './index.css'


// Can you say everything is happening with in the component
// 
const UseStateBasic =() => {

   // const [message,setMessage]=useState("React is best");
   const [count,setCount]=useState(0);

    // const changedRes = () => {

    //    // setMessage("React is easy");
    //    setCount(count+1);
    //
    return (
        <>
    {/* <h2>{message}</h2> */}
    <h2>React Count</h2>
    <h2>{count}</h2>

    <button className='btn' onClick={()=>setCount(count-1)}>Decrement</button>
    <button className='btn' onClick={()=>setCount(0)}>Reset</button>
    <button className='btn' onClick={()=>setCount(count+1)}>Increment</button>

    </>
    );
}


export default UseStateBasic;