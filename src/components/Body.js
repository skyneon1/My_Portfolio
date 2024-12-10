import React from 'react';
import '../styles/Body.css';

function Body() {
  const Hirehandler = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };
  const Workhandler = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="main">

      <section className="home" id='home'>
        <p className="intro">Hello!</p>
        <h1 className="name">
          I'm <span>Aniket</span> Babu
        </h1>
        <p className="tagline">A Freelance Web Designer</p>
        <p>I'm a passionate web designer with solid experience in HTML and CSS. My expertise lies in crafting visually appealing and user-friendly website designs, building engaging and responsive frontend interfaces, and ensuring seamless user experiences. I take pride in translating creative ideas into functional web layouts, optimizing designs for performance, and exploring modern trends to deliver cutting-edge digital solutions</p>
        <div className="button-group">
          <button className="primary-btn" onClick={Hirehandler}>Hire Me</button>
          <button className="secondary-btn" onClick={Workhandler}>My Works</button>
        </div>
      </section>
      
      <section className="home-right">
        <img src="https://img.freepik.com/free-photo/3d-illustration-cartoon-man-with-computer-various-objects_1057-46388.jpg?uid=R140822190" alt="3D Portrait" alt="3D Portrait" />
      </section>
      
    </div>
  );
}

export default Body;
