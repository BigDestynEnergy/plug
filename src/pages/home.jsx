import "../styles/home.css"
import coin from "../assets/coin.svg"
import briefcase from "../assets/briefcase-fill.svg"
import { useState } from "react"

export default function Home(){

    const [click, setClick] = useState(0);

    const buttons = [
        {name: "Hire a worker", icon:  briefcase, path: "hire"},
        {name: "Earn as a pro", icon:  coin, path: "earn"}
    ]

    const works = [
        "All", "Cleaning", "Moving", "Plumbing", "Other"
    ]

    const workers = [
  {
    id: 1,
    name: "Peter Banda",
    gender: "Male",
    role: "Plumber",
    location: "Area 25",
    available: true,
    stars: 5,
  },
  {
    id: 2,
    name: "Mercy Phiri",
    gender: "Female",
    role: "Cook",
    location: "Area 18",
    available: true,
    stars: 4,
  },
  {
    id: 3,
    name: "James Mwale",
    gender: "Male",
    role: "Electrician",
    location: "Area 47",
    available: false,
    stars: 5,
  },
  {
    id: 4,
    name: "Linda Kamanga",
    gender: "Female",
    role: "Cleaner",
    location: "Area 3",
    available: true,
    stars: 3,
  },
  {
    id: 5,
    name: "George Mbewe",
    gender: "Male",
    role: "IT Support",
    location: "Kawale",
    available: false,
    stars: 5,
  },
  {
    id: 6,
    name: "Agnes Tembo",
    gender: "Female",
    role: "Tailor",
    location: "Area 49",
    available: true,
    stars: 4,
  },
  {
    id: 7,
    name: "Patrick Zulu",
    gender: "Male",
    role: "Physical Labor",
    location: "Biwi",
    available: true,
    stars: 4,
  },
  {
    id: 8,
    name: "Ruth Chirwa",
    gender: "Female",
    role: "Hairdresser",
    location: "Area 23",
    available: false,
    stars: 5,
  },
  {
    id: 9,
    name: "Brian Jere",
    gender: "Male",
    role: "Mechanic",
    location: "Area 24",
    available: true,
    stars: 3,
  },
  {
    id: 10,
    name: "Grace Nkhoma",
    gender: "Female",
    role: "Cook",
    location: "Area 25",
    available: true,
    stars: 5,
  },
  {
    id: 11,
    name: "Frank Kachale",
    gender: "Male",
    role: "Carpenter",
    location: "Mtandire",
    available: false,
    stars: 4,
  },
  {
    id: 12,
    name: "Chikondi Mvula",
    gender: "Female",
    role: "Teacher",
    location: "Area 12",
    available: true,
    stars: 5,
  },
  {
    id: 13,
    name: "Kelvin Phoya",
    gender: "Male",
    role: "Software Developer",
    location: "Area 18",
    available: true,
    stars: 5,
  },
  {
    id: 14,
    name: "Patricia Nyirenda",
    gender: "Female",
    role: "Nurse",
    location: "Area 43",
    available: false,
    stars: 4,
  },
  {
    id: 15,
    name: "Charles Mhone",
    gender: "Male",
    role: "Painter",
    location: "Area 36",
    available: true,
    stars: 4,
  },
  {
    id: 16,
    name: "Mary Chimwemwe",
    gender: "Female",
    role: "Cleaner",
    location: "Kawale",
    available: true,
    stars: 5,
  },
  {
    id: 17,
    name: "Gift Banda",
    gender: "Male",
    role: "Welder",
    location: "Area 44",
    available: false,
    stars: 3,
  },
  {
    id: 18,
    name: "Faith Chisale",
    gender: "Female",
    role: "Baker",
    location: "Area 25",
    available: true,
    stars: 5,
  },
  {
    id: 19,
    name: "Bright Manda",
    gender: "Male",
    role: "Physical Labor",
    location: "Area 49",
    available: true,
    stars: 2,
  },
  {
    id: 20,
    name: "Susan Namizimu",
    gender: "Female",
    role: "IT Support",
    location: "Area 47",
    available: false,
    stars: 4,
  },
  {
    id: 21,
    name: "John Chikopa",
    gender: "Male",
    role: "Driver",
    location: "Area 23",
    available: true,
    stars: 5,
  },
  {
    id: 22,
    name: "Thoko Gondwe",
    gender: "Female",
    role: "Cook",
    location: "Biwi",
    available: true,
    stars: 4,
  },
  {
    id: 23,
    name: "Andrew Kafoteka",
    gender: "Male",
    role: "Plumber",
    location: "Area 18",
    available: false,
    stars: 5,
  },
  {
    id: 24,
    name: "Esther Chiumia",
    gender: "Female",
    role: "Tailor",
    location: "Area 24",
    available: true,
    stars: 3,
  },
  {
    id: 25,
    name: "Isaac Chirwa",
    gender: "Male",
    role: "Electrician",
    location: "Mtandire",
    available: true,
    stars: 5,
  },
  {
    id: 26,
    name: "Rebecca Mbewe",
    gender: "Female",
    role: "Software Developer",
    location: "Area 43",
    available: false,
    stars: 5,
  },
  {
    id: 27,
    name: "Yamikani Mvula",
    gender: "Male",
    role: "Mechanic",
    location: "Area 3",
    available: true,
    stars: 4,
  },
  {
    id: 28,
    name: "Naomi Chisomo",
    gender: "Female",
    role: "Hairdresser",
    location: "Area 12",
    available: true,
    stars: 5,
  },
  {
    id: 29,
    name: "Davie Mphande",
    gender: "Male",
    role: "Carpenter",
    location: "Area 36",
    available: false,
    stars: 3,
  },
  {
    id: 30,
    name: "Hope Kalua",
    gender: "Female",
    role: "Cleaner",
    location: "Area 25",
    available: true,
    stars: 4,
  },
];
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