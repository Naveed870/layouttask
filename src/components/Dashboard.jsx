// src/components/Dashboard.js
import React from 'react';
import '../styles/Dashboard.scss';
import profilePic from '../assets/profile.jpg'; // Placeholder image

const Dashboard = () => {
  return (
    <div className="dashboard-container">

      <div className='first-section'>

      
      <div className="header">
        <div className="menu-icon">☰</div>
        <div className="more-icon">⋮</div>
      </div>


      <div className="profile-section">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <h2 className="name">Hira Riaz</h2>
        <p className="occupation">UX/UI Designer</p>
      </div>


      <div className="stats-section">
        <div className="stat-card">
          <h3>$8900</h3>
          <p>Income</p>
        </div>
        <div className="stat-card">
          <h3>$5500</h3>
          <p>Expenses</p>
        </div>
        <div className="stat-card">
          <h3>$890</h3>
          <p>Loan</p>
        </div>
      </div>
      </div>


      <div className="overview-section">
        <div className="overview-header">
          <h2>Overview</h2>
          <div className="notification">
            <span role="img" aria-label="bell">🔔</span>
            <span className="badge">1</span>
          </div>
          <p>Sept 13, 2020</p>
        </div>

        <div className="transaction-card">
          <div className="icon sent">↑</div>
          <div className="transaction-details">
            <p className="title">Sent</p>
            <p className="description">Sending Payment to Clients</p>
          </div>
          <p className="amount">$150</p>
        </div>

        <div className="transaction-card">
          <div className="icon receive">↓</div>
          <div className="transaction-details">
            <p className="title">Receive</p>
            <p className="description">Receiving Salary from company</p>
          </div>
          <p className="amount">$250</p>
        </div>

        <div className="transaction-card">
          <div className="icon loan">💵</div>
          <div className="transaction-details">
            <p className="title">Loan</p>
            <p className="description">Loan for the Car</p>
          </div>
          <p className="amount">$400</p>
        </div>
      </div>


      <div className="bottom-nav">
        <span role="img" aria-label="home">🏠</span>
        <span role="img" aria-label="card">💳</span>
        <div className="add-button">+</div>
        <span role="img" aria-label="money">💵</span>
        <span role="img" aria-label="profile">👤</span>
      </div>
    </div>
  );
};

export default Dashboard;