import React, { useState, useEffect } from 'react';
import axios from 'axios';
const server = 'http://localhost:5000'

function Setup() {
    const [personal, setPersonal] = useState({})
    const [education, setEducation] = useState({})
    const [educationList, setEducationList] = useState([{}])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getPersonal();
        getEducationList();
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

    return (
        <div className="container" style={{ marginTop: "20px" }}>
            <div className="row personal">
                <div className="col-md-6">
                    <div className="form-group">
                        <input type="text" className="form-control" onChange={handelPersonalChange} name="name" id="name" placeholder="Name" value={personal.name} />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" onChange={handelPersonalChange} name="email" id="email" placeholder="Email" value={personal.email} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" onChange={handelPersonalChange} name="linkedin" id="linkedin" placeholder="Linkedin" value={personal.linkedin} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <button className="btn btn-primary" onClick={handelPersonalSubmit}>Submit</button>
                    </div>
                </div>
                <div className="col-md-6">

                </div>
            </div>
            <hr />

            <div className="row education">
                <div className="col-md-6">
                    <div className="form-group">
                        <input type="text" className="form-control" name="degree" onChange={handelEducationChange} value={education.degree} id="degree" placeholder="Degree" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" name="institute" onChange={handelEducationChange} value={education.institute} id="institute" placeholder="Institute" />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" name="date" onChange={handelEducationChange} value={education.data} id="date" placeholder="From-To" />
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <button type="submit" className="btn btn-primary" onClick={handelEducationSubmit}>Submit</button>
                    </div>
                </div>
                <div className="col-md-6">
                    {educationList.map((edu, key) => (
                        <div key={key}>
                            <p>{edu.degree}, {edu.institute}, {edu.date}<span className="delete" onClick={()=>deleteEducation(edu.id)}>X</span></p>
                            
                        </div>
                    ))}
                </div>
            </div>
            <hr />
            <div className="row experience">
                <div className="col-md-6">
                    <div className="form-group">
                        <input type="text" className="form-control" id="company" placeholder="Company" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="address" placeholder="Address" />
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
                <div className="col-md-6">

                </div>
            </div>
            <hr />
            <div className="row project">
                <div className="col-md-6">
                    <div className="form-group">
                        <input type="text" className="form-control" id="project" placeholder="Project" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="technologies" placeholder="Techologies" />
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
                <div className="col-md-6">

                </div>
            </div>
            <hr />
            <div className="row skill">
                <div className="col-md-6">
                    <div className="form-group">
                        <input type="text" className="form-control" id="skill" placeholder="Skill" />
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
                <div className="col-md-6">

                </div>
            </div>
            <hr />
            <div className="row intrest">
                <div className="col-md-6">
                    <div className="form-group">
                        <input type="text" className="form-control" id="intrest" placeholder="Interest" />
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
                <div className="col-md-6">

                </div>
            </div>
            <hr />

        </div>
    )
}

export default Setup;