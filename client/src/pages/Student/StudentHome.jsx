import { useEffect, useState } from 'react';
import Navbar from '../../Components/Students/Navbar.jsx'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import '../../styles/StudentHome.css'
import Footer from '../../Components/Common/Footer.jsx';
import SHjobcards from '../../Components/Students/SHjobcards.jsx';
import { S_Notifications } from '../../Components/Students/S_Notifications.jsx';
import { S_AppliedJobs } from '../../Components/Students/S_AppliedJobs.jsx';
import TopImage from '../../Components/Common/TopImage.jsx';
import Right_section from '../../Components/Common/Right_section.jsx';

function StudentHome() {
    const navigate = useNavigate();
    const [cookie, setCookie] = useCookies("access_token_s");
    
    const[popUp_noti,setpopUp_noti]=useState(false);
    const[popUp_Apjbs,setpopUp_Apjbs]=useState(false);
    
    
    
      useEffect(function () {
        if (!cookie.access_token_s) {
          console.log("No cookie");
          navigate("/sauth");
        }
        
      }, []);
    function toggle_noti(){
        setpopUp_noti(!popUp_noti)
    }
    function toggle_Apjbs(){
        setpopUp_Apjbs(!popUp_Apjbs)
    }


    return (
        <div>
            <Navbar toggle_noti={toggle_noti} toggle_Apjbs={toggle_Apjbs} N_Home={true} N_Logout={true} N_Noti={true} N_Apjbs={true}/>
            <TopImage />
            {/* <SearchBar /> */}
            <div className="main-content">
                {/* <SHleft_section /> */}
                
                <SHjobcards />
                <Right_section />
            </div>
            {popUp_noti && < S_Notifications toggle_noti={toggle_noti}/>}
            {popUp_Apjbs && < S_AppliedJobs toggle_Apjbs={toggle_Apjbs}/>}
            
            <Footer />
        </div>
    )


}
export default StudentHome;