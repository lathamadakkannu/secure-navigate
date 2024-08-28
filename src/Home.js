import React from "react";
import{Link} from "react-router-dom"

function Home(){
    return(
        <div>
            <h2>Home page</h2>

            <Link to="/login">Login</Link><br/>
            <Link to="/dash">Dashboard</Link><br/>
            <Link to="/food/veg">Veg</Link><br/>
            <Link to="/food/nonveg">Nonveg</Link><br/>
            <Link to="/product">Product</Link><br/>
            <Link to="/filter">Filter</Link>
        </div>
          
    )
}
export default Home;