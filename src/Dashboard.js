import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard(){
    const navigate=useNavigate()
    
    const[logout,setLogout]=useState(false)

    useEffect(()=>{
        if(!localStorage.getItem("auth")) navigate("/login")
    },[logout])

    const handleLogout=(e)=>{
        e.preventDefault()
        localStorage.removeItem("auth")
        setLogout(true)
    }
    return(
        <div>
            
            <h2 className="heading">Web Series</h2>
            <button onClick={handleLogout}>LogOut</button>
            

            <section>
                <div className="home-container">
                    <div className="home-row">
                        <div className="home-col1">
                            <div className="home-card">
                                <img src="image/img1.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="home-col2">
                            <div className="home-card">
                            <img src="image/img2.jpg" alt=""/>
                            </div>
                        </div>

                        <div className="home-col3">
                            <div className="home-card">
                            <img src="image/img3.jpg" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className="home-row2">
                        <div className="home-col1">
                            <div className="home-card">
                                <img src="image/img4.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="home-col2">
                            <div className="home-card">
                            <img src="image/img5.jpg" alt=""/>
                            </div>
                        </div>

                        <div className="home-col3">
                            <div className="home-card">
                            <img src="image/img6.jpg" alt=""/>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            
        </div>
    )
}
export default Dashboard;