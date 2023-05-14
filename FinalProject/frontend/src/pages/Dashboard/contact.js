import React from 'react';
import './contact.css';

const Developer = ({ name, role, bio }) => {
  return (
    <div className="developer">
      <h3>{name}</h3>
      <p>{role}</p>
      <p>{bio}</p>
    </div>
  );
}

const AboutUsPage = () => {
  const developers = [
    {
      name: "John Doe",
      role: "Frontend Developer",
      bio: "John is a skilled frontend developer with expertise in HTML, CSS, and JavaScript. He is passionate about creating beautiful and interactive user interfaces that enhance the user experience.",
    },
    {
      name: "Jane Smith",
      role: "Backend Developer",
      bio: "Jane specializes in backend development using technologies such as Node.js and Python. She has a strong understanding of databases and server-side programming, ensuring efficient and robust web applications.",
    },
    {
      name: "Mark Johnson",
      role: "Full Stack Developer",
      bio: "Mark is a versatile full stack developer proficient in both frontend and backend technologies. He enjoys working on end-to-end web development projects, from designing user interfaces to implementing server logic.",
    }
  ];

  return (
    <div className="about-us-page">
      <h1>About Us</h1>
      <p>Welcome to our website! We are a team of talented web developers dedicated to creating beautiful and functional websites.</p>
      <p>Meet our developers:</p>
      {developers.map((developer, index) => (
        <Developer
          key={index}
          name={developer.name}
          role={developer.role}
          bio={developer.bio}
        />
      ))}
    </div>
  );
}

export default AboutUsPage;
