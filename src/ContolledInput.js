import React,{useEffect,useState} from "react";


const ControlledInput = () => {


    const [firstName,setFirstName] = useState('');

    const [email,setEmail] = useState('');

    // storing form details into array
     const [people,setPeople] = useState([]);



    const handleSubmit = (e) => {
        e.preventDefault();

        if (firstName && email) {

        const person={id:new Date().getTime().toString(),firstName:firstName,email:email};

        // setPeople((people)=>{
        //     return [...people,person];
        // })

        setPeople([...people,person]);
        setEmail('');
        setFirstName('');
        console.log(people);
        
        // console.log("form submitted");
        // console.log(person);
        }
        else {
            console.log("Add details");
        }
    }


    return (
        <>

        <h3>form</h3>

        <article>
            <form className="form" onSubmit={handleSubmit}>

                <div className="form-control">
                    <label htmlFor="firstName">FirstName : </label>
                    <input type="text" id="firstname" name='firstName' value={firstName}
                    onChange={(e)=> setFirstName(e.target.value)}/>
                </div>

                <div className="form-control">
                    <label htmlFor="email">Email : </label>
                    <input type="email" id="email" name='email' value={email}
                    onChange={(e)=> setEmail(e.target.value)}/>
                </div>

                <button className="btn">Add Person</button>

                {/* display object on window */}

                {
                    people.map((people)=>{

                        return (
                            <div key={people.id}>
                                <h3>firstName : {people.firstName}</h3>
                                <h3>email : {people.email}</h3>

                            </div>
                        )
                    })
                }

            </form>
        </article>

        
        </>
    )
}


export default ControlledInput;