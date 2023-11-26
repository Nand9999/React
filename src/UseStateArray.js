import React,{useState} from 'react';
import './index.css';
import {data} from './data'


const UseStateArray = () =>{

    const [array,setArray] = useState(data);

    return (
        <React.Fragment>
        <h2>Array of elements</h2>
        {
                array.map((person)=>{
                    const {id,name}=person;
                    return (
                        <div key={id} className='item'>
                        <h3>{name}</h3>
                        </div>
                        );
                })
        }
        </React.Fragment>
    );

}

export default UseStateArray;
