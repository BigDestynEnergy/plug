import des from "../images/Des 2.jpg"
import house from "../assets/house.svg"
import housefill from "../assets/house-fill.svg"
import people from "../assets/people.svg"
import peoplefill from "../assets/people-fill.svg"
import inbox from "../assets/send.svg"
import gear from "../assets/gear.svg"
import gearfill from "../assets/gear-fill.svg"
import inboxfill from "../assets/send-fill.svg"

import { NavLink, useNavigate } from "react-router-dom"
import "./styles.css"


export default function Header(){

    const tabs = [
        {name: "Home", icon: house, click: housefill, path: "/"},
        {name: "Jobs", icon: people, click: peoplefill, path: "jobs"},
        {name: "Inbox", icon: inbox, click: inboxfill, path: "inbox"},
        {name: "Settings", icon: gear, click: gearfill, path: "settings"},
        {name: "Profile", icon: des, click: des, path: "profile"},
    ]

    const nvi = useNavigate();


    return(
        <header>
            <h1 onClick={()=>nvi("/")}>Ka<span style={{color: "#ff7600"}}>Plug</span></h1>
            <div className="tabs">
                {tabs.map((tab, index) => {
                    return(
                        <NavLink key={index}
                        to={tab.path}
                        title={tab.name}
                        className={({isActive}) => isActive ? "tab active" : "tab"}
                        >{({isActive}) => (
                            <>
                            {isActive ?  <span>{tab.name}</span> : ""}
                            <img
                            className={isActive ? "image" : ""}
                            id={tab.name}
                            src={isActive ? tab.click : tab.icon} alt="" />
                            </>
                        )}</NavLink>
                    )
                })}
            </div>
        </header>
    )
}