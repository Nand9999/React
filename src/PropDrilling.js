import React,{useState,useEffect} from 'react';

import {data} from './data';

 

const PropDrilling = () => {

    const [people,setPeople] = useState(data);
    return (

        <>
        <h3>Prop Drilling</h3>



        {/* This is the way to iterate over array of objects */}
        {/* {
            people.map((people)=>{

                return <h1 key={people.id}>Name : {people.name}</h1>
            })
        } */}

        </>
    )
}

export default PropDrilling;