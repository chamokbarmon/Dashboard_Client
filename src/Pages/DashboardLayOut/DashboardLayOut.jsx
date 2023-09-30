import React from 'react';
import DashboardSidebar from '../Dashboard/DashboardSidebar/DashboardSidebar';
import MenuBar from '../MenuBar/MenuBar';
import './DashboardLayOut.css'

const DashboardLayOut =()=>{
    return(
        <div>
            <div className='bg'>
                <MenuBar/>
                <DashboardSidebar/>
                </div>                
        </div>
    );
};

export default DashboardLayOut;