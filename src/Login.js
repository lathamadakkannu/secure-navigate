import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
        const navigate=useNavigate()

        useEffect(()=>{
            if(localStorage.getItem("auth")) navigate("/dash")
        },[])

        const formSubmit=(e)=>{
            e.preventDefault()
            if(e.target.elements.name.value ==="test" || e.target.elements.psw.value === "test@123" ){
                navigate("/dash")

                localStorage.setItem("auth",true)
                console.log("Correct");
            }
            else{
                console.log("Incorrect");
            }
        }


    return(
        <div>

            <form onSubmit={formSubmit}>
                <h2>Login Page</h2>

                <input className="type" type="text" name="name" placeholder="Enter Your Name" />
                <input className="type" type="password" name="psw" placeholder="Enter Your Password" />

                <button type="submit">Login</button>
            </form>

        </div>
    )
}
export default Login;
