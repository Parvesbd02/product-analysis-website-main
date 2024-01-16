import React from 'react';
import MyLineChart from '../MyLineChart/MyLineChart';
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <h1>Welcome to the Dashboard!</h1>
            
            <MyLineChart></MyLineChart>
        </div>
    );
};

export default Dashboard;