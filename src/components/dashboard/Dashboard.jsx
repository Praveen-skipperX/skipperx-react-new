import React from "react";
import "./Dashboard.css";
import promoImage from "../../assets/dashboard-promo.png"; 
import logo from '../../assets/skipper-black.png';


function Dashboard() {
  return (
    <div className="dashboard-container">

      <aside className="sidebar">
        <a href="/"><img src={logo} alt="Skipper Logo" className="logo-img-dash" /></a>
        <nav>
          <a href="#" className="nav-item-dash active">Dashboard</a>
          <a href="#" className="nav-item-dash">Explore Program</a>
          <a href="#" className="nav-item-dash">Profile</a>
        </nav>
      </aside>

      <main className="main-content">
       <div className="top-dash">
        <header className="topbar">
          <h1>Dashboard</h1>
          <button className="logout-btn">Logout</button>
        </header>
       </div>

        <section className="welcome-section">
          <h2>Welcome,</h2>
          <p>Have a Productive day!</p>
        </section>
        <h2 className="fst-dash">Dashboard</h2>
        <section className="dashboard-cards">
            
        <div className="progress-card">
            <div className="card-label">📺 Recently watching</div>
            <h3>Module 3 - Linkedin Workshop</h3>
            <p className="module-label">Modules</p>
            <div className="progress-bar">
            <div className="progress-filled" style={{ width: "15%" }}></div>
            </div>
            <div className="progress-footer">
            
            <span className="progress-subtext">15% Completed</span>
            <span className="progress-text">3 / 10</span>
            </div>
            <hr className="divider-dash"/>
            <p className="resume-dash">Resume</p>
            <button className="play-btn">▶</button>
        </div>

                <div className="promo-card">
        <div className="promo-image-wrapper">
            <img src={promoImage} alt="Promo" />
            <div className="promo-text-overlay">
            <h3>Built-In Hype Squad</h3>
            <p>Learn with your people.</p>
            
            </div>
            <button className="join-btn">Join now</button>
        </div>
        
        </div>


        </section>
        

      </main>

    </div>
  );
}

export default Dashboard;
