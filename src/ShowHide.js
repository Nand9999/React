import React,{useState,useEffect} from 'react';


const ShowHide = () => {

    const [show,setShow]=useState(false);

    return (
        <>
        <button className='btn' onClick={()=>setShow(!show)}>show/Hide</button>
        {show && <Item />}
        </>
    )

}


const Item = () => {

    const [size,setSize]=useState(window.innerWidth)

    const reSize = () => {
        setSize(window.innerWidth);
    }

    useEffect(()=>{

        //setSize()
        window.addEventListener('resize',reSize);

        return (
            window.removeEventListener('resize',reSize)
        )


    },[])

    return (
        <div style = {{marginTop:'2 rem'}}>
            <h1>window</h1>
            <h2>size :{size}</h2>
        </div>
    )

}


// export Item;
export default ShowHide;