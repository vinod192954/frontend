import Cookies from "js-cookie"
import { useState } from "react";
import { Link ,Switch,Route} from "react-router-dom"
import { Redirect } from 'react-router-dom'
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineAssignment } from "react-icons/md";
import { LuUserSquare2 } from "react-icons/lu";
import { SlLogout } from "react-icons/sl";
import { GrInProgress } from "react-icons/gr";
import Home from "../HomePage";
import Profile from "../ProfileSection";
import TaskManager from "../TaskManagerSection";
import "./index.css"

const Dashboard=(props)=>{
    const [activeTab,setActiveTab] = useState('home')
    const jwtToken = Cookies.get("jwt_token")
    if (jwtToken===undefined){
         <Redirect to="/" />
    }
  
    const Logout=()=>{
        const{history} = props 
        Cookies.remove("jwt_token")
        history.replace("/")
    }
  
    const handleTabClick=(tab)=>{
        setActiveTab(tab)
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
                
                <div className={`tab-section ${activeTab === 'home' ? 'active-tab' :''}`}>
                <Link onClick={() => handleTabClick('home')}
                 className="link-item"
                 to="/dashboard/home"> 
                        <IoHomeOutline/>
                        <p>Home</p>
                   </Link>
                </div> 
                
                <div className="tab-section">
                    
                        <IoIosCheckmarkCircleOutline/>
                        <p>Completed Tasks</p>
                    
                </div>
                
                <div className={`tab-section ${activeTab === 'task' ? 'active-tab' :''}`}>
                <Link onClick={() => handleTabClick('task')}
                 className="link-item"
                to="/dashboard/taskmanager"> 
                        <MdOutlineAssignment/>
                        <p>Task Manager</p>
                   </Link>
                </div>
                
                <div className="tab-section">
                    <GrInProgress/>
                    <p>Pending Tasks</p>
                </div>
                
                <div className={`tab-section ${activeTab === 'profile' ? 'active-tab' :''}`}>
                    <Link onClick={() => handleTabClick('profile')}
                    className="link-item" 
                    to="/dashboard/profile"> 
                        <LuUserSquare2/>
                        <p>profile</p>
                    </Link>
                </div>
               
    
                <div className="tab-section">
                    <button className="logout-btn" onClick={Logout}>
                        <SlLogout color="#fff"/>
                        <p>Logout</p>
                    </button>
                </div>
           </div>
           <div className="workspace-container">
            <Switch>
            <Redirect exact from="/dashboard" to="/dashboard/home" />
                <Route exact path="/dashboard/home" component={Home} />
                <Route  path="/dashboard/profile" component={Profile}/>
                <Route  path="/dashboard/taskmanager" component={TaskManager}/>
                <Route  path="/dashboard" component={Home} />
            </Switch> 
           
           </div>
        </div>
    )
}
export default Dashboard