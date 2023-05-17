// import { useEffect } from "react"
// import { useWorkoutsContext } from "../../hooks/useWorkoutContaxt"

// // components
// import WorkoutDetails from "../../components/WorkoutDetails"
// import WorkoutForm from "../../components/WorkoutForm"

// const Home = () => {
//   const { workouts, dispatch } = useWorkoutsContext()

//   useEffect(() => {
//     const fetchWorkouts = async () => {
//       const response = await fetch('/api/workouts')
//       const json = await response.json()

//       if (response.ok) {
//         dispatch({type: 'SET_WORKOUTS', payload: json})
//       }
//     }

//     fetchWorkouts()
//   }, [dispatch])

//   return (
//     <div className="home">
//       <div className="workouts">
//         {workouts && workouts.map(workout => (
//           <WorkoutDetails workout={workout} key={workout._id} />
//         ))}
//       </div>
//       <WorkoutForm />
//     </div>
//   )
// }

// export default Home
import React from 'react';
import './styles.css';

const LandingPage = () => {

  
  return (
    <div className="landing-page">
      <header className="header">
        <nav className="navbar">
          <a href="/" className="logo">Rovister LMS</a>
          <ul className="nav-links">
            <li><a href="/"><h3>Home</h3></a></li>
            <li><a href="/myStudent"><h3>Student Login</h3></a></li>
            <li><a href="/teachers"><h3>Teacher Login</h3></a></li>
            <li><a href="/dashboard"><h3>Admin Login</h3></a></li>
            <li><a href="/dashboard"><h3>Courses</h3></a></li>
            <li><a href="/listFeedback"><h3>Feedback</h3></a></li>
            <li><a href="/Notification"><h3>Notification</h3></a></li>
            <li><a href="/contact"><h3>Contact Us</h3></a></li>
          </ul>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Rovister LMS</h1>
          <p>An intuitive and powerful learning management system for your educational institution or organization.</p>
          <a href="/signup" className="cta-button">Get Started</a>
        </div>
        <div className="hero-image-container">
          <img src="https://wallpapercave.com/dwp1x/wp8149664.jpg" alt="Rovister LMS" className="hero-image" />
        </div>
      </section>

      <section className="feature-section">
        <h2>Key Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            {/* <img src="https://wallpaperaccess.com/full/1772051.jpg" alt="Feature 1" className="feature-icon" /> */}
            <h3>Student Management</h3>
            <p>Evaluate student progress and manage grades effortlessly.</p>
            <a href="/students" className="cta-button">Sign Up Now</a>
          </div>
          <div className="feature-card">
            {/* <img src="https://wallpaperaccess.com/full/1772051.jpg" alt="Feature 2" className="feature-icon" /> */}
            <h3>Teacher Management</h3>
            <p>Engage students with interactive learning materials.</p>
            <a href="/teachers" className="cta-button">Sign Up Now</a>
          </div>
          <div className="feature-card">
            {/* <img src="https://wallpaperaccess.com/full/1772051.jpg" alt="Feature 3" className="feature-icon" /> */}
            <h3>Courses Managentnt</h3>
            <p>Create, manage, and organize courses easily.</p>
            <a href="/courses" className="cta-button">See more</a>
          </div>
          <div className="feature-card">
            {/* <img src="https://wallpaperaccess.com/full/1772051.jpg" alt="Feature 3" className="feature-icon" /> */}
            <h3>Feedback Managentnt</h3>
            <p>Create, manage, and organize courses easily.</p>
            <a href="/myFeedback" className="cta-button">Add Feedback Now</a>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Start your journey with Rovister LMS today!</h2>
        <a href="/signup" className="cta-button">Sign Up Now</a>
      </section>

      <footer className="footer">
        <p>&copy; 2023 Rovister LMS. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;

