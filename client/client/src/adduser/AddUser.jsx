import React from 'react'
import { useState } from 'react'
import axios from 'axios'
function AddUser() {
    const users={
        name:"",
        email:"",
        address:""
    }
    const[user,setUser]=useState(users)
    const[result,setResult]=useState(null)
    const inputHandler=(e)=>{
        const {name,value}=e.target;
        setUser({...user,[name]:value});
    };
    const submitForm=(e)=>{
        e.preventDefault();
        console.log(user)
        axios.post("http://localhost:8009/api/user",user).then((res)=>{
            console.log(res.data)
            setResult(res.data)
        }).catch((err)=>{
            if(err.response){
                setResult(err.response.data)
            }
            else{
                setResult({message:"something went wrong"})
            }
            console.log(err)
           
        })
    }
  return (
    <div>
        <form onSubmit={submitForm}>
      <input type="text"
id="name"
onChange={inputHandler}
name="name"
autoComplete="off"
placeholder="Enter your name"
/>
<input type="text"
id="email"
onChange={inputHandler}
name="email"
autoComplete="off"
placeholder="Enter your email"
/>
<input type="text"
id="address"
onChange={inputHandler}
name="address"
autoComplete="off"
placeholder="Enter your Address"
/>
<button type="submit">submit</button>
</form>
    </div>
  )
}

export default AddUser
