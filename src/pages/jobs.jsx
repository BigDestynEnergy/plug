import { useState } from "react";
import search from "../assets/search.svg";
import send from "../assets/chat.svg";
import starfill from "../assets/star-fill.svg";
import defaultAvatar from "../images/Des 2.jpg";
import "../styles/home.css";
import "../styles/jobs.css";
import workers from "../data/workers dummy data";
import { useNotify } from "../components/NotifyContext";

export default function Jobs() {
  const [src, setSrc] = useState("");
  const [over, setOver] = useState(null);
  const [filtered, setFiltered] = useState("All");

  const { notify } = useNotify();

  const tasks = [
    { task: "All", filter: "All" },
    { task: "Men only", filter: "Male" },
    { task: "Women only", filter: "Female" },
    { task: "Available now", filter: "Availability" },
  ];

  const filteredWorkers = workers.filter((worker) => {
    // Filter dropdown
    const matchesFilter =
      filtered === "All"
        ? true
        : filtered === "Male"
        ? worker.gender === "Male"
        : filtered === "Female"
        ? worker.gender === "Female"
        : filtered === "Availability"
        ? worker.available
        : true;

    // Search
    const matchesSearch =
      worker.name.toLowerCase().includes(src.toLowerCase()) ||
      worker.role.toLowerCase().includes(src.toLowerCase()) ||
      worker.location.toLowerCase().includes(src.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <section className="jobs page">
      <div className="upper">
        <div className="filters">
          <span>Filter workers:</span>

          <select
            value={filtered}
            onChange={(e) => {setFiltered(e.target.value); notify(`Now displaying ${filtered} only`)}}
            className="filter-cards"
          >
            {tasks.map((task) => (
              <option key={task.filter} value={task.filter}>
                {task.task}
              </option>
            ))}
          </select>
        </div>

        <div className="search">
          <input
            type="text"
            placeholder="Search here..."
            value={src}
            onChange={(e) => setSrc(e.target.value)}
          />
          <img src={search} alt="Search" />
        </div>
      </div>

      <div className="workers">
        {filteredWorkers.map((worker, index) => (
          <div
            className="worker"
            key={worker.id || index}
            onClick={() =>
              setOver(over === index ? null : worker.available ? index : null)
            }
          >
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

                  {over === index && worker.available && (
                    <div className="contact">
                      <span>Message</span>
                      <img src={send} className="contact-img" alt="Message" />
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
    </section>
  );
}