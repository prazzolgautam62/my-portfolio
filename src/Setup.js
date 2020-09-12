import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
const server = 'http://localhost:5000'

function Setup() {
    const [personal, setPersonal] = useState({})
    const [education, setEducation] = useState({})
    const [educationList, setEducationList] = useState([{}])
    const [experience, setExperience] = useState({})
    const [experienceList, setExperienceList] = useState([{}])
    const [project, setProject] = useState({})
    const [projectList, setProjectList] = useState([{}])
    const [skill, setSkill] = useState({})
    const [skillList, setSkillList] = useState([{}])
    const [intrest, setIntrest] = useState({})
    const [intrestList, setIntrestList] = useState([{}])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        getPersonal();
        getEducationList();
        getExperienceList();
        getProjectList();
        getSkillList();
        getIntrestList();
    }, [])

    // Personal
    const getPersonal = async () => {
        let res = await axios.get(`${server}/personal`)
        setPersonal(res.data)
    }
    const handelPersonalChange = (event) => {
        event.persist();
        setPersonal((personal) => ({
            ...personal,
            [event.target.name]: event.target.value
        }));
    }
    const handelPersonalSubmit = (event) => {
        event.preventDefault()
        axios.post(`${server}/personal`, { ...personal })
    }

    // Education
    const getEducationList = async () => {
        let res = await axios.get(`${server}/educations`)
        setEducationList([...res.data])
    }

    const handelEducationChange = (event) => {
        event.persist();
        setEducation((education) => ({
            ...education,
            [event.target.name]: event.target.value
        }));
    }

    const handelEducationSubmit = async (event) => {
        // event.preventDefault()
        await axios.post(`${server}/educations`, education)
        getEducationList();
        setEducationList([]);
        setEducation({});
        setLoading(!loading)
    }

    const deleteEducation = async (id) => {
        await axios.delete(`${server}/educations/${id}`);
        getEducationList();
    }

    //Expreience
    const getExperienceList = async () => {
        let res = await axios.get(`${server}/experiences`)
        setExperienceList([...res.data])
    }

    const handelExperienceChange = (event) => {
        event.persist();
        setExperience((experience) => ({
            ...experience,
            [event.target.name]: event.target.value
        }));
    }

    const handelExperienceSubmit = async (event) => {
        // event.preventDefault()
        console.log(experience);

        await axios.post(`${server}/experiences`, experience)
        getExperienceList();
        setExperienceList([]);
        setExperience({});
        setLoading(!loading)
    }

    const deleteExperience = async (id) => {
        await axios.delete(`${server}/experiences/${id}`);
        getExperienceList();
    }

    //Projects
    const getProjectList = async () => {
        let res = await axios.get(`${server}/projects`)
        setProjectList([...res.data])
    }

    const handelProjectChange = (event) => {
        event.persist();
        setProject((project) => ({
            ...project,
            [event.target.name]: event.target.value
        }));
    }

    const handelProjectSubmit = async (event) => {
        // event.preventDefault()
        await axios.post(`${server}/projects`, project)
        getProjectList();
        setProjectList([]);
        setProject({});
        setLoading(!loading)
    }

    const deleteProject = async (id) => {
        await axios.delete(`${server}/projects/${id}`);
        getProjectList();
    }

    //Skills
    const getSkillList = async () => {
        let res = await axios.get(`${server}/skills`)
        setSkillList([...res.data])
    }

    const handelSkillChange = (event) => {
        event.persist();
        setSkill((skill) => ({
            ...skill,
            [event.target.name]: event.target.value
        }));
    }

    const handelSkillSubmit = async (event) => {
        // event.preventDefault()
        await axios.post(`${server}/skills`, skill)
        getSkillList();
        setSkillList([]);
        setSkill({});
        setLoading(!loading)
    }

    const deleteSkill = async (id) => {
        await axios.delete(`${server}/skills/${id}`);
        getSkillList();
    }

    //Intrests
    const getIntrestList = async () => {
        let res = await axios.get(`${server}/intrests`)
        setIntrestList([...res.data])
    }

    const handelIntrestChange = (event) => {
        event.persist();
        setIntrest((intrest) => ({
            ...intrest,
            [event.target.name]: event.target.value
        }));
    }

    const handelIntrestSubmit = async (event) => {
        // event.preventDefault()
        await axios.post(`${server}/intrests`, intrest)
        getIntrestList();
        setIntrestList([]);
        setIntrest({});
        setLoading(!loading)
    }

    const deleteIntrest = async (id) => {
        await axios.delete(`${server}/intrests/${id}`);
        getIntrestList();
    }

    return (
        <div className="container" style={{ marginTop: "20px" }}>
            <div className="row-personal">
                <div className="col-md-6">
                    <div className="form-group"><h3>Personal Information</h3>
                        <input type="text" className="form-control" onChange={handelPersonalChange} name="name" id="name" placeholder="Name" value={personal.name} />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" onChange={handelPersonalChange} name="email" id="email" placeholder="Email" value={personal.email} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" onChange={handelPersonalChange} name="linkedin" id="linkedin" placeholder="Github" value={personal.github} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <button className="btn btn-primary" onClick={handelPersonalSubmit}>Submit</button>
                    </div>
                </div>
                <div className="col-md-6">

                </div>
            </div>
            <hr class="hrclass" />

            <div className="row education">
                <div className="col-md-6">
                    <div className="form-group"><h3>Education</h3>
                        <input type="text" className="form-control" name="degree" onChange={handelEducationChange} value={education.degree} id="degree" placeholder="Degree" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" name="institute" onChange={handelEducationChange} value={education.institute} id="institute" placeholder="Institute" />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" name="date" onChange={handelEducationChange} value={education.date} id="date" placeholder="From-To" />
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <button type="submit" className="btn btn-primary" onClick={handelEducationSubmit}>Submit</button>
                    </div>
                </div>
                <div className="col-md-6">
                    {educationList.map((edu, key) => (
                        <div key={key}>
                            <p>{edu.degree}, {edu.institute}, {edu.date}<span className="delete" onClick={() => deleteEducation(edu.id)}>X</span></p>

                        </div>
                    ))}
                </div>
            </div>
            <hr class="hrclass" />
            <div className="row experience">
                <div className="col-md-6">
                    <div className="form-group"><h3>Experience</h3>
                        <input type="text" className="form-control" id="company" placeholder="Company" name="company" value={experience.company} onChange={handelExperienceChange} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="location" placeholder="Address" name="location" value={experience.location} onChange={handelExperienceChange} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <button type="submit" className="btn btn-primary" onClick={handelExperienceSubmit}>Submit</button>
                    </div>
                </div>
                <div className="col-md-6">
                    {experienceList.map((exp, key) => (
                        <div key={key}>
                            <p>{exp.company}, {exp.location}<span className="delete" onClick={() => deleteExperience(exp.id)}>X</span></p>

                        </div>
                    ))}
                </div>
            </div>
            <hr class="hrclass" />
            <div className="row project">
                <div className="col-md-6">
                    <div className="form-group"><h3>Projects</h3>
                        <input type="text" className="form-control" onChange={handelProjectChange} name="project" id="project" placeholder="Project" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" onChange={handelProjectChange} name="technologies" id="technologies" placeholder="Techologies" />
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <button type="submit" className="btn btn-primary" onClick={handelProjectSubmit}>Submit</button>
                    </div>
                </div>
                <div className="col-md-6">
                    {projectList.map((pro, key) => (
                        <div key={key}>
                            <p>{pro.project} || {pro.technologies}<span className="delete" onClick={() => deleteProject(pro.id)}>X</span></p>

                        </div>
                    ))}
                </div>
            </div>
            <hr class="hrclass" />
            <div className="row skill">
                <div className="col-md-6">
                    <div className="form-group"><h3>Skills</h3>
                        <input type="text" className="form-control" id="name" name="name" onChange={handelSkillChange} placeholder="Skill" />
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <button type="submit" className="btn btn-primary" onClick={handelSkillSubmit}>Submit</button>
                    </div>
                </div>
                <div className="col-md-6">
                    {console.log(skillList)}
                    {skillList.map((skl, key) => (
                        <div key={'skill' + key}>
                            <p>{skl.name} <span className="delete" onClick={() => deleteSkill(skl.id)}>X</span></p>

                        </div>
                    ))}
                </div>
            </div>
            <hr class="hrclass" />
            <div className="row intrest">
                <div className="col-md-6">
                    <div className="form-group"><h3>Intrests</h3>
                        <input type="text" className="form-control" id="name" name="name" onChange={handelIntrestChange} placeholder=" Interest" />
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <button type="submit" className="btn btn-primary" onClick={handelIntrestSubmit}>Submit</button>
                    </div>
                </div>
                <div className="col-md-6">
                    {intrestList.map((intr, key) => (
                        <div key={key}>
                            <p>{intr.name} <span className="delete" onClick={() => deleteIntrest(intr.id)}>X</span></p>

                        </div>
                    ))}
                </div>
            </div>
            <hr class="hrclass" />

        </div>
    )
}

export default Setup;