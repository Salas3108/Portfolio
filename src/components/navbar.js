import React, { useEffect, useState } from "react";
import {Link , useLocation} from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import CloseIcon from '@mui/icons-material/Close';
import GetAppIcon from '@mui/icons-material/GetApp';


export function Navbar() {
    const [expandNavbar , setExpandNavbar] = useState (false);
    const location = useLocation() ;
    useEffect( () => {
        setExpandNavbar (false);
    } , [location] );

    return(
        <div className="navbar"  id= {expandNavbar ? "open" : "close"} >
            <div className="toggleButton"> 
                <button onClick={ () => { setExpandNavbar((prev) => !prev )} }> 
                    {expandNavbar ? <CloseIcon /> : <ReorderIcon />}
                </button>
            </div>
            <div className="links">
                <Link to="/"> Home</Link>
                <Link to="/experience"> Education </Link>
                <Link to="/professional"> Experience </Link>
                <Link to="/Projects"> Projects </Link>
                <a href="/cv.pdf" className="cv-link" download>
                    <GetAppIcon /> CV
                </a>
            </div>
        </div>
    )
}

export default Navbar;

