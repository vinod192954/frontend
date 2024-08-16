import Cookies from "js-cookie"
import { Redirect } from 'react-router-dom'
import { FaRegUserCircle } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { MdOutlineAssignment } from "react-icons/md";
import { LuUserSquare2 } from "react-icons/lu";
import { SlSettings } from "react-icons/sl";
import { SlLogout } from "react-icons/sl";
import "./index.css"

const Dashboard=(props)=>{
    const jwtToken = Cookies.get("jwt_token")
    if (jwtToken===undefined){
         <Redirect to="/" />
    }
  
    const Logout=()=>{
        const{history} = props 
        Cookies.remove("jwt_token")
        history.replace("/")
    }
  

    return (
        <div className="dashboard-container">
           <div className="controllers-section">
                <div className="user-profile-section">
                    <FaRegUserCircle color="white" size={35}/>
                    <div className="user-profile-section-details">
                        <h1>Vinod</h1>
                        <p>vvinnu590@gmail.com</p>
                    </div>
                </div>
                <hr className="horzontal-bar"/>
                <div className="tab-section">
                    <IoHomeOutline/>
                    <p>Home</p>
                </div> 
                <div className="tab-section">
                    <RiCompassDiscoverLine/>
                    <p>Discover</p>
                </div>
                <div className="tab-section">
                    <MdOutlineAssignment/>
                    <p>Tasks</p>
                </div>
                <div className="tab-section">
                    <LuUserSquare2/>
                    <p>profile</p>
                </div>
                <div className="tab-section">
                    <SlSettings/>
                    <p>settings</p>
                </div>
                <div className="tab-section">
                    <button className="logout-btn" onClick={Logout}>
                        <SlLogout color="#fff"/>
                        <p>Logout</p>
                    </button>
                </div>
           </div>
           <div className="workspace-container">
            <h1>Dashboard</h1> 
            <div className="greeting-container">
                <h1>Welcome Dear User!</h1>
            </div>
           </div>
        </div>
    )
}
export default Dashboard