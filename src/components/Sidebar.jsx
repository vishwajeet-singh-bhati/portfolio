import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="card sidebar">
      <div className="sidebar-info">
        <div className="avatar-box">
          <div className="avatar-placeholder">VSB</div>
        </div>
        <h1 className="name">Vishavjeet Singh Bhati</h1>
        <div className="title">ML Researcher & Developer</div>
      </div>

      <div className="separator"></div>

      <div className="contacts-list">
        <div className="contact-item">
          <div className="icon-box">
            <span>✉</span>
          </div>
          <div className="contact-info">
            <p className="contact-title">Email</p>
            <a href="mailto:bhatiloonkha12@gmail.com" className="contact-link">bhatiloonkha12@gmail.com</a>
          </div>
        </div>

        <div className="contact-item">
          <div className="icon-box">
            <span>in</span>
          </div>
          <div className="contact-info">
            <p className="contact-title">LinkedIn</p>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-link">Profile</a>
          </div>
        </div>

        <div className="contact-item">
          <div className="icon-box">
            <span>gh</span>
          </div>
          <div className="contact-info">
            <p className="contact-title">GitHub</p>
            <a href="https://github.com/vishwajeet-singh-bhati" target="_blank" rel="noreferrer" className="contact-link">vishwajeet-singh-bhati</a>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
