import { Outlet, Link } from "react-router-dom";
import '../../styles/Anjana/Home.css'; // Import your CSS file here

function Home() {
  return (
    <div className="container">
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          TourGuide App
        </Link>
      </nav>
      <div className="content">
        <Outlet />
        <div className="additional-content">
          <h2>New Places</h2>
          <div className="new-places">
            {/* Render list of new places */}
            <div className="place">
              <img src="image-url" alt="Place 1" />
              <p>Place 1 Description</p>
            </div>
            {/* Add more new places */}
          </div>
          <h2>Best Places</h2>
          <div className="best-places">
            {/* Render list of best places */}
            <div className="place">
              <img src="image-url" alt="Place 1" />
              <p>Place 1 Description</p>
            </div>
            {/* Add more best places */}
          </div>
        </div>
      </div>
      <Link to="/FeedbackForm" className="feedback-link">
        <button className="feedback-button">
          <span className="material-symbols-outlined">comment</span>
        </button>
      </Link>
    </div>
  );
}

export default Home;
