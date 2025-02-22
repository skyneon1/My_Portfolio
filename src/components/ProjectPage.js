import React from "react";
import "../styles/ProjectPage.css";

const projects = [
    {
        id: 1,
        title: "NovaX",
        description: "A tech related blogging website.",
        url: "http://novax.free.nf/?i=1",
    }, {
        id: 2,
        title: "Nest-Finder",
        description: "A website to find nearby PG's and Flats.",
        url: "https://nest-finder.onrender.com/",
    },

    {
        id: 3,
        title: "YT downloader",
        description: "A website to download youtube videos.",
        url: "https://yt-downloader-42vz.onrender.com/",
    },
    {
        id: 4,
        title: "To Do React-Spline",
        description: "A website for To Do task with 3d design using Spline.",
        url: "https://skyneon1.github.io/To-Do-React-Spline/",
    }, 
    {
        id: 5,
        title: "MongoDB data store",
        description: "A simple form page integrate with Atlas MongoDB to store data.",
        url: "https://mongodb-datastore.onrender.com/",
    }, 
    {
        id: 6,
        title: "Club Website",
        description: "A single page college club website.",
        url: "https://skyneon1.github.io/GDSC/",
    }, 
    {
        id: 7,
        title: "Portfolio",
        description: "A portfolio website with animations and glass morphism effect.",
        url: "https://skyneon1.github.io/Portfolio/",
    }, 
    {
        id: 8,
        title: "Blood Donation Form",
        description: "Login & Registration System with PHP & MySQL using Xampp",
        url: "https://skyneon1.github.io/Blood-Donation-form/",
    },
    {
        id: 9,
        title: "Ping Utility Tester",
        description: "A simple ping utility tester made using nodejs.",
        url: "https://github.com/skyneon1/Ping-Utility-Test",
    },
    {
        id: 10,
        title: "Proxy Server",
        description: "A simple proxy server which is middleware between system and server.",
        url: "https://github.com/skyneon1/proxy-server",
    },
    {
        id: 11,
        title: "HTTP-fetcher",
        description: "A simple api testing http fetcher made using Nodejs.",
        url: "https://github.com/skyneon1/http-fetcher",
    },
    {
        id: 12,
        title: "Auth-Firebase",
        description: "A authentication system made using Firebase.",
        url: "https://github.com/skyneon1/",
    },
];

export const ProjectPage = () => {
    return (
        <div className="project-page" id="projects">
            <h1>Projects</h1>
            <div className="projects-grid">
                {projects.map((project) => (
                    <a
                        key={project.id}
                        href={project.url}
                        className="project-card"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="card-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};
