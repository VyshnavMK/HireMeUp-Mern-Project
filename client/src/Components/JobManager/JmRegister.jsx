// import Navbar from "../Components/Navbar.jsx";
import { useState } from 'react';
import '../../styles/JmAuth.css';
import axios from 'axios';
function JmRegister(props) {
    const [data, setData] = useState({ fullName: "", userName: "", passWord: "",orgName:"" });
    function handleChange(event) {
        const { value, name } = event.target;

        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:3002/Jmauth/register",
                {
                    fullName: data.fullName,
                    userName: data.userName,
                    passWord: data.passWord,
                    orgName:data.orgName
                });
            if (response.data.message === "User registered successfully")
                alert("Registration completed")
            else {
                alert("Username already exist")
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <div className='authCentreDiv'>
            <div className="about-section">
                <h1>Discover Top Talent and Optimize Your Hiring Process</h1>
                <br /><br />
                <p>At our online job portal, we provide a platform where employers can easily find the best talent for their part-time job positions. We understand the importance of finding the right candidates efficiently, and we are here to streamline your hiring process.</p>
                <p>By joining our platform, you gain access to a pool of qualified individuals actively seeking part-time employment. Our extensive network of job seekers ensures that you have a diverse range of talented individuals to choose from, allowing you to find the perfect fit for your organization.</p>
            </div>



            <div className="col-12 col-md-9 col-lg-7 col-xl-6 signup-section">
                <div className="card" style={{ "borderRadius": "15px", 'border': 'none' }}>
                    <div className="card-body p-5">
                        <h2 className="text-uppercase text-center mb-5">Create an account</h2>

                        <form onSubmit={handleSubmit}>

                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
                                <input type="text" id="form3Example1cg" className="form-control form-control-lg" name="fullName" value={data.fullName} onChange={handleChange} required />
                            </div>

                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                                <input type="email" id="form3Example3cg" className="form-control form-control-lg" name="userName" value={data.userName} onChange={handleChange} required />
                            </div>

                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form3Example4cg">Password</label>
                                <input type="password" id="form3Example4cg" className="form-control form-control-lg" name="passWord" value={data.passWord} onChange={handleChange} required />

                            </div>

                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form3Example4cdg">Repeat your password</label>
                                <input type="password" id="form3Example4cdg" className="form-control form-control-lg" />
                            </div>

                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form3Example5cdg">Organisation Name</label>
                                <input type="text" id="form3Example5cdg" className="form-control form-control-lg" name="orgName" value={data.orgName} onChange={handleChange} required />
                            </div>

                            {/* <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="age">Age</label>
                                <input type="number" id="age" className="form-control form-control-lg" inputmode="numeric" min="1" max="120" />
                            </div>

                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="eligibility">Eligibility</label>
                                <select className="form-control form-control-lg" id="eligibility" name="eli_status" value={data.eli_status} onChange={handleChange} required>
                                    <option value="sslc">SSLC</option>
                                    <option value="plus_two">Plus Two</option>
                                    <option value="p_undergraduate">Pursuing Undergraduate</option>
                                    <option value="undergraduate">Undergraduate</option>
                                    <option value="p_Postgraduate">Pursuing Postgraduate</option>
                                    <option value="postgraduate">Postgraduate</option>
                                </select>
                            </div> */}



                            {/* <label className="form-label" htmlFor="sande">Skills and experience</label>
                            <div id="sande">
                                <div className="form-group mb-4">
                                    <div className="row">
                                        <div className="col">

                                            <select className="form-control form-control-sm" id="skills1" name="skill_0" value={data.skills[0]} onChange={handleSkillsSet}>
                                                <option value="None">None</option>
                                                <option value="Sensible driver">Sensible driver</option>
                                                <option value="Computer experience">Computer experience</option>
                                                <option value="Content writer">Content writer</option>
                                            </select>
                                        </div>
                                        <div className="col">

                                            <select className="form-control form-control-sm" id="skills2" name="skill_1" value={data.skills[1]} onChange={handleSkillsSet}>
                                                <option value="None">None</option>
                                                <option value="Sensible driver">Sensible driver</option>
                                                <option value="Computer experience">Computer experience</option>
                                                <option value="Content writer">Content writer</option>
                                            </select>
                                        </div>
                                        <div className="col">

                                            <select className="form-control form-control-sm" id="skills3" name="skill_2" value={data.skills[2]} onChange={handleSkillsSet}>
                                                <option value="None">None</option>
                                                <option value="Sensible driver">Sensible driver</option>
                                                <option value="Computer experience">Computer experience</option>
                                                <option value="Content writer">Content writer</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div> */}



                            <div className="form-check d-flex justify-content-center mb-5">
                                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                                <label className="form-check-label" htmlFor="form2Example3g">
                                    I agree to all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                                </label>
                            </div>

                            <div className="d-flex justify-content-center">
                                <button type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" type="Submit" >Register</button>
                            </div>

                            <p className="text-center text-muted mt-5 mb-0">Already have an account? <a className="fw-bold text-body" onClick={props.RegOrLog}><u>Login here</u></a></p>

                        </form>

                    </div>
                </div>
            </div>
        </div>

        //     <div className="signup-section">
        //         <h2>Sign Up</h2>
        //         <form onSubmit={handleSubmit}>

        //         <div className="form-group">
        //                 <input placeholder='Full name' type="text" id="fullName" name="fullName" value={data.fullName} onChange={handleChange} required></input>
        //             </div>

        //             <div className="form-group">
        //                 <input placeholder='email id' type="text" id="name" name="userName" value={data.userName} onChange={handleChange} required></input>
        //             </div>

        //             <div className="form-group">
        //                 <input placeholder='Password' type="password" id="password" name="passWord" value={data.passWord} onChange={handleChange} required></input>
        //             </div>

        //             <div className="form-group">
        //                 <button type="Submit">Submit</button>
        //                 <button onClick={props.RegOrLog}>Alredy have an account</button>
        //             </div>
        //         </form>
        //     </div>

        // </div>
    );
}

export { JmRegister };