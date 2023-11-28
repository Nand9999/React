import React,{useState,useEffect} from 'react';

import {data} from './data';

 

const PropDrilling = () => {

    const [people,setPeople] = useState(data);
    const removePerson = (id) => {

        setPeople(()=> {
            return people.filter((person)=> person.id !==id)
        })

    }

    return (

        <>
        <h3>Prop Drilling</h3>
        <List people={people} removePerson = {removePerson} />
        {/* This is the way to iterate over array of objects */}
        {/* {
            people.map((people)=>{

                return <h1 key={people.id}>Name : {people.name}</h1>
            })
        } */}

        </>
    )
}


const List = ({people,removePerson}) => {
    return (
   <>
   {
    people.map((person) => {
        return (
            <SinglePerson key={person.id} {...person} removePerson = {removePerson} />
        )
    })
   }
   
   </>
    
    )
}

const SinglePerson = ({id,name,removePerson}) => {

    return (
        <div className='item'>
            <h4>{name} </h4>
            <button onClick={()=>removePerson(id)}>Delete</button>

        </div>
    )
}

export default PropDrilling;