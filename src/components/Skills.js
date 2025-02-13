import React from 'react';
import '../styles/Skills.css';

const skills = [
    { name: 'MongoDB', percentage: 55 },
    { name: 'ExpressJs', percentage: 60 },
    { name: 'ReactJs', percentage: 50 },
    { name: 'NodeJs', percentage: 60 },    
    { name: 'Git', percentage: 90 },
    { name: 'Github', percentage: 90 },
    { name: 'Docker', percentage: 70 },  
    { name: 'Firebase', percentage: 40 },
    { name: 'Linux', percentage: 55 },
    { name: 'Kubernetes', percentage: 40 },
    { name: 'Js', percentage: 70 },
    { name: 'Python', percentage: 60 },
    { name: 'Wordpress', percentage: 45 },
    { name: 'Bootstrap', percentage: 60 },
    { name: 'Tailwind CSS', percentage: 65 },
    { name: 'React-native', percentage: 40 },
    { name: 'DSA', percentage: 50 },
    { name: 'Spline', percentage: 60 },


];

const Skills = () => {
    return (
        <section className="skills-section" id="skills">
            <div className="container">
                <h2 className="section-title">Skills</h2>
                <p className="section-description">
                    As a passionate full-stack developer, I have honed my skills in crafting robust and scalable web applications.
                    Below are my key technical proficiencies:
                </p>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div className="skill-card" key={index}>
                            <div
                                className="circle"
                                style={{
                                    background: `conic-gradient(#8e44ad ${skill.percentage}%, #2d2d42 ${skill.percentage}%)`,
                                }}
                            >
                                <div className="inner-circle">
                                    <h3>{skill.percentage}%</h3>
                                </div>
                            </div>
                            <h5 className="skill-name">{skill.name}</h5>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
