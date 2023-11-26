import {useState,useEffect} from 'react';


const UseEffectBasics = () => {

    const [value,setValue] = useState(0);

    useEffect(()=>
    {
        if (value>=3) {
        console.log("Rendering");
        document.title=`New Message(${value})`;
        }
    })

    return (
        <>
        <h2>{value}</h2>
        <button onClick={()=>setValue(value+1)}>Increase</button>
        </>
    )

}

export default UseEffectBasics;