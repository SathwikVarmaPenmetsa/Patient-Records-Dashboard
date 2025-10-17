

const About = () => {
  return (
    <section className="about-container">
      <div className="about-box">
        <h1 className="about-title">About Jarurat Care</h1>
        <p className="about-text">
          Jarurat Care is a simple and efficient <span className="highlight">Patient Records Dashboard</span> 
          designed to help hospitals, clinics, and health workers manage patient information with ease and accuracy.
          This project focuses on streamlining the way patient data is viewed, searched, and updated — all in one clean and responsive interface.
        </p>

        <h2 className="about-subtitle">Our Mission</h2>
        <p className="about-text">
          At Jarurat Care, our mission is to make patient data management simpler and smarter.
          We believe technology should support healthcare professionals by reducing paperwork and improving access to vital information.
        </p>

        <h2 className="about-subtitle">What We Offer</h2>
        <ul className="about-list">
          <li>Quick access to patient details</li>
          <li>Easy search and filter functionality</li>
          <li>Simple form to add new patients</li>
          <li>Clean and mobile-responsive interface</li>
          <li>Secure and organized data handling</li>
        </ul>

        <h2 className="about-subtitle">Technology Used</h2>
        <p className="about-text">
          Built using <span className="highlight">React.js</span> for the frontend, 
          styled with <span className="highlight">TaliwindCss & CSS</span>, and powered by 
          <span className="highlight"> local JSON data </span> for seamless data simulation. 
          State management is handled through React Hooks, ensuring smooth updates and interactions.
        </p>

      </div>
    </section>
  );
};

export default About;
