import {useState,useEffect} from 'react';


const UseEffectCleanUp = () => {

    const [size,setSize] = useState(window.innerWidth);
    // make the size dynamic when you move the tab

    const reSize = () => {
        setSize(window.innerWidth);
    }

// this can be achieved without eventListener

    useEffect(()=>{
         console.log('Event is triggered');
         window.addEventListener('resize',reSize)
         window.removeEventListener('resize',reSize)
        // setSize(window.innerWidth);

    },[size])

    // window.removeEventListener('resize',reSize)
    console.log('rendering');
    return (
        <>
        <h2>useEffectCleanUp</h2>
        <h2>{size} PX</h2>
        </>
    )
}

export default UseEffectCleanUp;

