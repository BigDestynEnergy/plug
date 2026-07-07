import "../styles/home.css"
import coin from "../assets/coin.svg"
import star from "../assets/star.svg"
import send from "../assets/chat.svg"
import starfill from "../assets/star-fill.svg"
import defaultAvatar from "../images/Des 2.jpg"
import briefcase from "../assets/briefcase-fill.svg"
import { useState } from "react"
import workers from "../data/workers dummy data"

export default function Home(){

    const [click, setClick] = useState(0);
    const [over, setOver] = useState(null);

    const buttons = [
        {name: "Hire a worker", icon:  briefcase, path: "hire"},
        {name: "Earn as a pro", icon:  coin, path: "earn"}
    ]

    const works = [
        "All", "Cleaning", "Moving", "Plumbing", "Other"
    ]

    const few = workers.filter(work => work.id < 4)


    return(
        <section className="home page">
            <h1>Local help for your home,</h1>
            <h1>right now.</h1>
            <span>The fastest way to find vetted workers for same-day cleaning, gardening, repairs and related tasks in your neigborhood.</span>
            <div className="buttons">
            {buttons.map((btn, index) => {
                return(
                    <div className="card" id={btn.path}>
                         <span>{btn.name}</span>
                        <img src={btn.icon} />
                    </div>
                )
            })}
            </div>


            <div className="find">
                <h2>Find workers in:</h2>

                <div className="works">
                    {works.map((work, index) => {
                        return(
                            <button 
                            onClick={()=>setClick(index)}
                            key={index} className={click === index ? "work-button active" : "work-button"}>{work}</button>
                        )
                    })}
                </div>
            </div>

<div className="workers">
            {few.map((worker, index) => (
                <div className="worker" 
                onClick={()=>setOver(worker.available && index)}
                key={worker.id || index}>
                <div className="worker-left">
                    <img
                    src={defaultAvatar}
                    alt={worker.name}
                    className="worker-image"
                    />

                    <div className="worker-info">
                    <h3>{worker.name}</h3>
                    <p>
                        {worker.role} • {worker.location}
                    </p>

                    <div className="worker-rating">
                        <img src={starfill} alt="Rating" />
                        <span>{worker.stars}.0</span>

                        <span
                        className={
                            worker.available
                            ? "status available"
                            : "status unavailable"
                        }
                        >
                        {worker.available ? "Available now" : "Busy"}
                        </span>
                      {over === index && (
                          <div className="contact">
                             <span>Message</span>
                            <img src={send} className="contact-img" />
                        </div>
                      )}
                    </div>
                    </div>

                </div>

                <span
                    className={
                    worker.available
                        ? "status-dot online"
                        : "status-dot offline"
                    }
                ></span>
                </div>
            ))}
            </div>

           <div className="needbox">
             <div className="need">
                <h2>Need something else?</h2>
                <span>Post your task and let local pros come to you</span>
                <button>Describe your task</button>
            </div>
           </div>
        </section>
    )
}