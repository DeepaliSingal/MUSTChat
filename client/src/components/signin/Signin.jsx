import React from "react";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import '../signin/style.css'

const Signin = () => {

  const history=useNavigate();

  const [user,setUser]=useState({
    name:"",
    email:"",
    password:""
  });

  const signin=()=>{
    axios.post('http://localhost:9000/signin',user)
        .then(res=>{
            alert(res.data.message);
            history('/login');
        });
  }

  const handleChange=e=>{
    const {name,value} = e.target;
    console.log(name,value);
    setUser(
      {...user,
      [name]:value}
    )
  }

  return (
    <>
    <div className="container">
        <section id="content">
            <h1>SignIn Form</h1>
            <div>
              <input
                type="text"
                value={user.name}
                onChange={handleChange}
                name="name"
                placeholder="Username"
                required=""
                id="username"
              />
            </div>
            <div>
              <input
                type="email"
                value={user.email}
                onChange={handleChange}
                name="email"
                placeholder="Email"
                required=""
                id="email"
              />
            </div>
            <div>
              <input
                type="password"
                value={user.password}
                onChange={handleChange}
                name="password"
                placeholder="Password"
                required=""
                id="password"
              />
            </div>
            <div>
              <button id="login" onClick={signin}>Signin</button>
              <button id="signin" onClick={()=>history("/signin")}>Login</button>
            </div>
        </section>
      </div>
    </>
  )
}

export default Signin