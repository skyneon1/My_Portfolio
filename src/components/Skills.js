import React from 'react';
import '../styles/Skills.css';

const skills = [
    { name: 'MongoDB', percentage: 55 },
    { name: 'ExpressJs', percentage: 60 },
    { name: 'ReactJs', percentage: 50 },
    { name: 'NodeJs', percentage: 60 },
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
