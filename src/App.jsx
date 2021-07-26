import React, { useState } from 'react';



const App = () => {
    const[fullName,setFullName] =useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",


    });

    const inputEvent =(event) =>{
        console.log(event.target.value);
        console.log(event.target.name);

        const { name, value } = event.target;

        setFullName((preValue) => {
            console.log(preValue);
            return{
                ...preValue,
                [name]:value,
            }
        });

    };

    const onSubmit =(event) =>{
        event.preventDefault();
        alert("form submitted");
    };

    return(
        <>
            <div className="main_div">
                <form onSubmit={onSubmit}>
                    <div>
                        <h1>Hello {fullName.fname} {fullName.lname} </h1>
                        <p> {fullName.email} </p>
                        <p> {fullName.phone} </p>
                        <input
                            type="text"
                            placeholder="Enter your First Name"
                            name="fname"
                            onChange={inputEvent}
                            value={fullName.fname}
                        />
                        <br/>    
                        <input
                            type="text"
                            placeholder="Enter your last Name"
                            name="lname"
                            onChange={inputEvent}
                            value={fullName.lname}
                        />
                        <br/>    
                        <input
                            type="text"
                            placeholder="Enter your email"
                            name="email"
                            onChange={inputEvent}
                            value={fullName.email}
                        />
                        <br/>    
                        <input
                            type="text"
                            placeholder="Enter your phone no"
                            name="phone"
                            onChange={inputEvent}
                            value={fullName.phone}
                        />
                        <br/>    
                        <button type="submit">Submit 👍 </button>
                    </div>
                </form>
            </div>
        </>
    )
    
}
export default App;