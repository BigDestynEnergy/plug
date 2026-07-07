import "../styles/home.css"
import coin from "../assets/coin.svg"
import star from "../assets/star.svg"
import send from "../assets/chat.svg"
import left from "../assets/arrow-right-circle.svg"
import starfill from "../assets/star-fill.svg"
import defaultAvatar from "../images/Des 2.jpg"
import briefcase from "../assets/briefcase-fill.svg"
import { useState } from "react"
import workers from "../data/workers dummy data"
import { useNavigate } from "react-router-dom"

export default function Home(){

    const [click, setClick] = useState(0);
    const [over, setOver] = useState(null);
    const navigate = useNavigate();

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
                <h2>Find workers easily!</h2>
                <span
                onClick={()=>navigate("jobs")}
                className="open">Open jobs section <img src={left} alt="" /> </span>
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

           <section className="howTo">
    <h2>How It Works</h2>
    <p className="intro">
        Whether you need someone to help with a task or you're looking to earn
        money by offering your skills, getting started only takes a few steps.
    </p>

    <div className="howContainer">

        {/* Clients */}
        <div className="howCard">
            <h3>📌 Need Someone to Help?</h3>

            <div className="step">
                <span>1</span>
                <div>
                    <h4>Create a Task</h4>
                    <p>
                        Post a task with a clear title, description, location,
                        budget, and preferred date. The more details you provide,
                        the easier it is for workers to understand your needs.
                    </p>
                </div>
            </div>

            <div className="step">
                <span>2</span>
                <div>
                    <h4>Receive Applications</h4>
                    <p>
                        Skilled workers nearby can apply for your task. Review
                        their profiles, ratings, and experience before making
                        your choice.
                    </p>
                </div>
            </div>

            <div className="step">
                <span>3</span>
                <div>
                    <h4>Hire & Chat</h4>
                    <p>
                        Choose the worker that best fits your needs and use the
                        in-app chat to discuss any final details.
                    </p>
                </div>
            </div>

            <div className="step">
                <span>4</span>
                <div>
                    <h4>Complete & Rate</h4>
                    <p>
                        Once the work is finished, mark the task as completed
                        and leave a rating to help future users.
                    </p>
                </div>
            </div>
        </div>

        {/* Workers */}
        <div className="howCard">
            <h3>💼 Looking for Work?</h3>

            <div className="step">
                <span>1</span>
                <div>
                    <h4>Create Your Profile</h4>
                    <p>
                        Add your photo, skills, experience, service area, and
                        pricing so clients know what you offer.
                    </p>
                </div>
            </div>

            <div className="step">
                <span>2</span>
                <div>
                    <h4>Browse Tasks</h4>
                    <p>
                        Explore available tasks in your area and find work that
                        matches your skills and schedule.
                    </p>
                </div>
            </div>

            <div className="step">
                <span>3</span>
                <div>
                    <h4>Apply for Jobs</h4>
                    <p>
                        Send a short application explaining why you're the right
                        person for the task.
                    </p>
                </div>
            </div>

            <div className="step">
                <span>4</span>
                <div>
                    <h4>Do the Work</h4>
                    <p>
                        Communicate with the client, complete the task
                        professionally, and deliver quality service.
                    </p>
                </div>
            </div>

            <div className="step">
                <span>5</span>
                <div>
                    <h4>Build Your Reputation</h4>
                    <p>
                        Earn ratings and reviews after every completed task to
                        increase your chances of getting hired again.
                    </p>
                </div>
            </div>
        </div>

    </div>
</section>
        </section>
    )
}