import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
//import '../../styles/StudentHome.css'
import styles from '../../styles/Job_Card.module.css'
import axios from 'axios';
import GetUserId from '../Common/GetUserId';
import { CiCalendarDate } from "react-icons/ci";
import { IoMdPeople } from "react-icons/io";

import moment from 'moment'

function SHjobcards() {
    const navigate = useNavigate();
    const [jobs, setJobs] = useState([])
    async function fetchJobs() {
        const response = await axios.get(`http://localhost:3002/studenthome?sid=${GetUserId("s_userId")}`);
        console.log(response);
        setJobs(response.data);
    }
    useEffect(function () {
        fetchJobs();
    }, []);

    async function handleJobRegister(index) {
        const pjid = jobs[index]._id;
        await axios.post("http://localhost:3002/applyjob", { pjid: pjid, sid: GetUserId("s_userId"), action: "register" });
        alert("Job registered successfully");
        fetchJobs();
    }

    function dateFormatter(date) {
        const formattedDate = moment.utc(date).utcOffset(0).format('DD MMMM YYYY');
        console.log("the date is this");
        console.log(formattedDate); // Output: "24 May 2023"
        return (

            <>{formattedDate}</>
        )
    }
    return (
        <div className={styles.center_section}>
            <div className="container-xxl py-5">
                <div className="container">
                    <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Job Listing</h1>
                    <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
                        <div className="tab-content">
                            <div id="tab-1" className="tab-pane fade show p-0 active">



                                {jobs.map((job, index) => (
                                    <div className="job-item p-4 mb-4" key={index}>
                                        <div className="row g-4">
                                            <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid border rounded" src="img/com-logo-1.jpg" alt="" style={{ width: '80px', height: '80px' }}></img>
                                                <div className="text-start ps-4">
                                                    <h5 className="mb-3">{job.title}</h5>
                                                    <div style={{ display: 'flex', maxHeight: '20px' }}>
                                                        <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>Kannur</span>
                                                        <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>{dateFormatter(job.date)}</span>
                                                        <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>₹200/hr</span>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                                <div className="d-flex mb-3">
                                                    <button className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-primary"></i></button>
                                                    <button className="btn btn-primary"  onClick={function () {
                                                        handleJobRegister(index);
                                                    }}>Apply Now</button>
                                                </div>
                                                <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jul, 2023</small>
                                            </div>
                                        </div>
                                    </div>


                                ))}


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        // <div className={styles.center_section}>
        //     {jobs.map((job, index) => (
        //         <div className={styles.job_card} key={index}>
        //             <h2>{job.title}</h2>
        //             <p>this is some job </p>
        //             <div className={styles.job_eligibility}>Eligibility</div>
        //             <div className={styles.job_footer}>
        //                 <span className={styles.dateSpan}><CiCalendarDate size={'1.5em'}/>{dateFormatter(job.date)}</span>
        //                 <span className={styles.dateSpan}><IoMdPeople size={'1.5em'} /><p>{job.no_stud_applied}/{job.no_stud}</p></span>
        //                 <button className={styles.registration_button} onClick={function () {
        //                     handleJobRegister(index);
        //                 }}>Register</button>
        //             </div>
        //         </div>
        //     ))}
        // </div>
    )

}

export default SHjobcards;