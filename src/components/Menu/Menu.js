import React from "react";
import "./Menu.css"
import {Link} from "react-router-dom";


function Menu() {
    return(
        <div className="menu">
            ToDo List
          <Link to="/login">
             <button className='button'>Login</button>
          </Link>
        </div>
    )

}
export default Menu;