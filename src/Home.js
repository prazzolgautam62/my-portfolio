import React, { useState, useEffect } from 'react';
import img from './1.jpg';
import './App.css';
import axios from 'axios';
const server = 'http://localhost:5000'

function Home() {
    const [personal, setPersonal] = useState({})
    const [educationList, setEducationList] = useState([])

    useEffect(() => {
        getPersonal();
        getEducations();
    }, [])

    const getPersonal = async () => {
        let res = await axios.get(`${server}/personal`)
        setPersonal(res.data)
    }

    const getEducations = async () => {
        let res = await axios.get(`${server}/educations`);
        setEducationList(res.data)
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4">
                    <div className="img-wrapper">
                        <img src={img} className="portfolio-img" />
                        <div className="name">
                            <h1>{personal.name}</h1>
                            <b>Eamil: </b><i>{personal.email}</i><br />
                            <b>Linkedin: </b><u>{personal.linkedin}</u>
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
                                    <h5><b>{edu.degree}</b></h5>
                                    <p>{edu.institute}</p>
                                    <small>{edu.date}</small>
                                </div>
                            ))}




                        </div>
                        <div className="experience-wrapper">
                            <h4 className="title"><b>Experience</b></h4>
                            <div className="experiences">
                                <h5><b>Dream Big Workshop</b></h5>
                                <small>Sankhamul, Kathmandu</small>
                            </div>
                            <div className="experiences">
                                <h5><b>Wesinory Team</b></h5>
                                <small>Sankhamul, Kathmandu</small>
                            </div>
                            <div className="experiences">
                                <h5><b>Insight Workshop</b></h5>
                                <small>Naxal, Kathmandu</small>
                            </div>

                            <div className="experiences">
                                <h5><b>F1 Soft International</b></h5>
                                <small>Hattisar, Kathmandu</small>
                            </div>

                            <div className="experiences">
                                <h5><b>Socail Aves</b></h5>
                                <small>Jaulakhel, Lalitpur</small>
                            </div>

                            <div className="experiences">
                                <h5><b>Tree Tech Solution</b></h5>
                                <small>Gwarko, Lalitpur</small>
                            </div>
                        </div>
                        <div className="project-wrapper">
                            <h4 className="title"><b>Projects</b></h4>
                            <div className="projects">
                                <h5><b>Double Entry Accounting System</b></h5>
                                <small><i>Django</i></small>
                            </div>
                            <div className="projects">
                                <h5><b>Gimmy</b></h5>
                                <small><i>React, Node, Firebase</i></small>
                            </div>
                            <div className="projects">
                                <h5><b>Inventory</b></h5>
                                <small><i>Laravel</i></small>
                            </div>

                            <div className="projects">
                                <h5><b>Sumulya.com</b></h5>
                                <small><i>React Native</i></small>
                            </div>
                        </div>
                        <div className="skill-wrapper">
                            <h4 className="title"><b>Skills</b></h4>
                            <div className="skills">
                                Python
                        </div>

                            <div className="skills">
                                Django
                        </div>

                            <div className="skills">
                                PHP
                        </div>

                            <div className="skills">
                                Laravel
                        </div>

                            <div className="skills">
                                Node
                        </div>

                            <div className="skills">
                                React
                        </div>
                            <div className="skills">
                                React Native
                        </div>

                            <div className="skills">
                                Firebase
                        </div>

                            <div className="skills">
                                JQuery
                        </div>

                            <div className="skills">
                                Bootstrap
                        </div>
                            <div className="skills">
                                AWS
                        </div>

                        </div>
                        <div className="intrest-wrapper">
                            <h4 className="title"><b>Interests</b></h4>
                            <div className="intrests">
                                Technologies
                        </div>

                            <div className="intrests">
                                Space
                        </div>

                            <div className="intrests">
                                Music
                        </div>

                            <div className="intrests">
                                Culture
                        </div>

                            <div className="intrests">
                                Humanity
                        </div>

                            <div className="intrests">
                                World
                        </div>
                            <div className="intrests">
                                Universe
                        </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home