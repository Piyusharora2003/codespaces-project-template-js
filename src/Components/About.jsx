/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a Web developer and Data Analyser with a passion for creating beautiful and functional user interfaces. I have experience in creating user-friendly web applications and data analysis tools. I am always looking for new ways to improve my skills and learn new technologies. I am a creative thinker and problem solver who enjoys working in a team environment. I am passionate about creating innovative solutions that make a positive impact on people's lives. I am always looking for new opportunities to grow and develop my skills. I am a hardworking and dedicated individual who is committed to delivering high-quality work. I am excited to work on new projects and collaborate with other talented professionals. I am confident that my skills and experience will make me a valuable asset to any team. I am looking forward to new challenges and opportunities to expand my knowledge and expertise. I am excited to see what the future holds for me in the field of web development and data analysis.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Front-end Web Development",
  "Back-end Web Development",
  "Data Analysis",
  "Full-stack Web Development",
  "UI/UX Design",
  "Responsive Web Design",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my Devlopment experience I continually look for new and better ways to make tech accessible by all.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
