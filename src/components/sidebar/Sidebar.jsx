import React from 'react'
import './sidebar.scss'
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import SettingsIcon from '@mui/icons-material/Settings';
import HailIcon from '@mui/icons-material/Hail';
import ContactsIcon from '@mui/icons-material/Contacts';
import CampaignIcon from '@mui/icons-material/Campaign';
import WorkIcon from '@mui/icons-material/Work';
import {Link} from "react-router-dom";


const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
            <span className='logo'>#placed </span>
            </div>
            <hr />
        <div className="centre">
        <ul>
            <Link to="/" style={{textDecoration: "none" , color: 'inherit'}}>
            <li>
                <DashboardCustomizeIcon className='icons'/>
                <h3>Dashboard</h3>
                </li>
                </Link>

                <li>
                
                <WorkIcon className='icons'/>
                <h3>Companies</h3>
                
                </li>

        <Link to="/addUser" style={{textDecoration: "none" , color: 'inherit'}}>   
            <li>
                
            <HailIcon className='icons'/>
                <h3>Students</h3>
                </li>
                </Link>
            <li>
            <ContactsIcon className='icons'/>
                <h3>Profile</h3>
                </li>
            <li>
            <CampaignIcon className='icons'/>
                <h3>Notifications</h3>
                </li>
            <li>
                <SettingsIcon className='icons'/>
                <h3>Settings</h3>
                </li>

                <Link to="/signout" style={{textDecoration: "none" , color: 'inherit'}}>   
            <li>
                
            <HailIcon className='icons'/>
                <h3>Logout</h3>
                </li>
                </Link>
        </ul>
        </div>
    </div>
  )
}

export default Sidebar  