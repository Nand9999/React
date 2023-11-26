import React,{useEffect,useState} from 'react';


const ShortCircuit = () => {

    // const [text,setText] =useState(''); //if empty then it is false
    // if something is there in the text then that will be displayed or else the other value is assigned

    const [isError,setIsError] = useState(false);
     

    return (

        <>
        <h1>Short Circuit</h1>
        {/* if text is true then operand before or gets executed or else if text is false then second operand gets executed */}
        {/* {text || <h2>second operand in or condition</h2>}  */}
        {/* if text is true then only second operand executes or else none of the operand executes*/}
        {/* if text is false none of the operand gets executed */}
        {/* {text && <h3>After and condition</h3>} */}

        {/* Invoking button */}

        {/* <button className='btn' onClick={()=>setText('have text')}>Toggle Button</button>
        {text || <h2>second operand in or condition</h2>}
        {text && <h3>After and condition</h3>} */}

        <button className='btn' onClick={()=>setIsError(!isError)}>Toggle Button</button>
        {/* {isError && <h2>Error...</h2> } */}
        {/* using ternary operator */}

        {isError ? (<p>Before colon</p>):(<p>After colon</p>)}




        </>
        
        )


}


export default ShortCircuit;