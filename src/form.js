import {useState,useEffect} from 'react';


const Form = () => {

    const [name,setName]=useState('');
    const [lastName,setLastName]=useState('');
    const [dob,setDob]=useState('');
    const [city,setCity]=useState('');

    // store all input values into array

    const [people,setPeople] =useState([]);

    const handleSubmit = (e) => {
         e.preventDefault();

        if (name && lastName && dob && city) {

            const person={id:new Date().getTime().toString(),name:name, lastName:lastName,dob,city};

            setPeople([...people,person]);
            console.log(people);

            // empting the input values because prevent default stops from reloading the page and values remain the form
            
            setName('');
            setLastName('');
            setDob('');
            setCity('');

        }

    }

    return (
        <>
        <h3>HTML form</h3>

        <form className='form' onSubmit={handleSubmit}>

           
            <input className='form-control' type='text' id='name' placeholder='Enter Your Name ' value={name} 
            onChange={(e)=>setName(e.target.value)}/>
           
           <input className='form-control' type='text' id='lastName' placeholder='Enter Your Last Name ' value={lastName} 
            onChange={(e)=>setLastName(e.target.value)}/>

            <input className='form-control' type='date' id='name' placeholder='Enter Your DOB ' value={dob} 
            onChange={(e)=>setDob(e.target.value)}/>

            <input className='form-control' type='text' id='name' placeholder='Enter Your City ' value={city} 
            onChange={(e)=>setCity(e.target.value)}/>

            <button type='submit' className='btn'>Submit</button>


            {/* Display array of objects on the browser */}


            {
                people.map((people)=>{
                    // destructuring an array

                    const {id,name,lastName,dob,city}=people;

                    return(

                    <div key = {id}>
                        <h3>{name}</h3>
                        <h3>{lastName}</h3>
                        <h3>{dob}</h3>
                        <h3>{city}</h3>
                    </div>
                    );

                })
            }


        </form>

        </>


    )
}


export default Form;