import React from 'react';
import styles from './About.module.css';
import supreme from './supreme.jpg';

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={supreme} alt="Company" className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <h1>About Us</h1>
        <p>We are a team of passionate developers who love to create amazing web applications.</p>
      </div>
    </div>
  );
}

export default About;
