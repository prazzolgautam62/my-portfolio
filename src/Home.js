import React, { useState, useEffect } from 'react';
import img from './1.jpg';
import './App.css';
import axios from 'axios';
const server = 'http://localhost:5000'

function Home() {
    const [personal, setPersonal] = useState({});
    const [educationList, setEducationList] = useState([]);
    const [experienceList, setExperienceList] = useState([]);
    const [projectList, setProjectList] = useState([]);
    const [skillList, setSkillList] = useState([]);
    const [intrestList, setIntrestList] = useState([]);

    useEffect(() => {
        getPersonal();
        getEducations();
        getExperiences();
        getProjects();
        getSkills();
        getIntrests();
    }, [])

    const getPersonal = async () => {
        let res = await axios.get(`${server}/personal`)
        setPersonal(res.data);
    }

    const getEducations = async () => {
        let res = await axios.get(`${server}/educations`);
        setEducationList(res.data);
    }

    const getExperiences = async () => {
        let res = await axios.get(`${server}/experiences`);
        setExperienceList(res.data);
    }

    const getProjects = async () => {
        let res = await axios.get(`${server}/projects`);
        setProjectList(res.data);
    }

    const getSkills = async () => {
        let res = await axios.get(`${server}/skills`);
        setSkillList(res.data);
    }

    const getIntrests = async () => {
        let res = await axios.get(`${server}/intrests`);
        setIntrestList(res.data);
    }



    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4">
                    <div className="img-wrapper">
                        <img src={img} className="portfolio-img" />
                        <div className="name">
                            <h1><b>{personal.name}</b></h1>
                            <b>Email: </b><i>{personal.email}</i><br />
                            <b>Github: </b><u>{personal.github}</u>
                        </div>
                        <div className="edit-btn-wrapper">
                            <a href="/setup"><button className="btn btn-primary">Edit Profile</button></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="info-wrapper">
                        <div className="education-wrapper">
                            <h4 className="title"><b>Education</b></h4>
                            {educationList.map((edu, key) => (
                                <div className="educations" key={key}>
                                    <h4><b>{edu.degree}</b></h4>
                                    <h6>{edu.institute}</h6>
                                    <small>{edu.date}</small>
                                </div>
                            ))}
                        </div><br />
                        <div className="experience-wrapper">
                            <h4 className="title"><b>Experience</b></h4>
                            {experienceList.map((exp, key) => (
                                <div className="experiences" key={key}>
                                    <h4><b>{exp.company}</b></h4>
                                    <p>{exp.location}</p>
                                </div>
                            ))}
                        </div><br />
                        <div className="project-wrapper">
                            <h4 className="title"><b>Projects</b></h4>
                            {projectList.map((proj, key) => (


                                <div className="projects" key={key}>
                                    <h4><b>{proj.project}</b></h4>
                                    <p><i>{proj.technologies}</i></p>
                                </div>
                            ))}
                        </div><br />
                        <div className="skill-wrapper">
                            <h4 className="title"><b>Skills</b></h4>
                            {skillList.map((skl, key) => (
                                <div className="skills" key={key}>
                                    <b>{skl.name}</b>
                                </div>
                            ))}

                        </div><br />
                        <div className="intrest-wrapper">
                            <h4 className="title"><b>Interests</b></h4>
                            {intrestList.map((int, key) => (


                                <div className="intrests">
                                    <b>{int.name}</b>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home