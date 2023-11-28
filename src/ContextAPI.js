import React,{useState,useContext, createContext} from 'react';

import {data} from './data';

 
const PersonContext =createContext();

const ContextAPI = () => {

    const [people,setPeople] = useState(data);
    const removePerson = (id) => {

        setPeople(()=> {
            return people.filter((person)=> person.id !==id)
        })

    }

    return (

        <PersonContext.Provider value={{removePerson}}>
        <>
        <h3>Context API</h3>
        {/* Instead of passing remove person functionality to list and the to single person 
        I will wrap it in context provider and will use it in single person*/}
        {/* <List people={people} removePerson = {removePerson} /> */}
        <List people={people} />

        </>
        </PersonContext.Provider>
    )
}


const List = ({people}) => {
    return (
   <>
   {
    people.map((person) => {
        return (
            <SinglePerson key={person.id} {...person}/>
        )
    })
   }
   
   </>
    
    )
}

const SinglePerson = ({id,name}) => {

    const {removePerson} = useContext(PersonContext);

    return (
        
        <div className='item'>
            <h4>{name} </h4>
            <button onClick={()=>removePerson(id)}>Delete</button>

        </div>
    )
}

export default ContextAPI;