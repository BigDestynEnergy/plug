import gear from "../assets/gear.svg"
import fill from "../assets/gear-fill.svg"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Menu(){

    const [click, setClick] = useState(false);
    const nvi = useNavigate();

    return(
        <nav className="menu">
            {click ?
                       
            <svg xmlns="http://www.w3.org/2000/svg"
            onClick={()=>{setClick(false); nvi('/')}}
            title="Close settings"

             width="24" height="24" viewBox="0 0 24 24" 
             fill="none" stroke="currentColor" strokeWidth="2"
              stroke-linecap="round" strokeLinejoin="round"
               className="lucide lucide-x-icon lucide-x">
                <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
                </svg> :

                    <img
            onClick={()=>{setClick(true); nvi('settings')}}
            title="Open settings"
    
            src={gear}/> 
        }
        </nav>
    )
}