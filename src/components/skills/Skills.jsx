import React from 'react';
import "./skills.scss";

export default function Skills() {
    
  return (
    <div className="container">
      <div className="left-skills">
      <div className="skill-box">
          <span className="title">React JS</span>
          <div className="skill-bar">
            <div className="filled html" style={{ width: '75%' }}></div>
            <span className="percentage">75%</span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">JavaScript</span>
          <div className="skill-bar">
            <div className="filled" style={{ width: '85%' }}></div>
            <span className="percentage">85%</span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">HTML</span>
          <div className="skill-bar">
            <div className="filled html" style={{ width: '90%' }}></div>
            <span className="percentage">90%</span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">CSS</span>
          <div className="skill-bar">
            <div className="filled" style={{ width: '80%' }}></div>
            <span className="percentage">80%</span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">Angular JS</span>
          <div className="skill-bar">
            <div className="filled" style={{ width: '40%' }}></div>
            <span className="percentage">40%</span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">React Native</span>
          <div className="skill-bar">
            <div className="filled" style={{ width: '65%' }}></div>
            <span className="percentage">65%</span>
          </div>
        </div>
      </div>
      <div className="title-container">
          <h1 className="title-text">Skills</h1>
        </div>
      <div className="right-skills">
        <div className="skill-box">
          <span className="title">Python</span>
          <div className="skill-bar">
            <div className="filled nodejs" style={{ width: '72%' }}></div>
            <span className="percentage">72%</span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">SQL</span>
          <div className="skill-bar">
            <div className="filled" style={{ width: '75%' }}></div>
            <span className="percentage">75%</span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">R</span>
          <div className="skill-bar">
            <div className="filled" style={{ width: '75%' }}></div>
            <span className="percentage">75%</span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">Tableau</span>
          <div className="skill-bar">
            <div className="filled" style={{ width: '70%' }}></div>
            <span className="percentage">70%</span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">Power BI</span>
          <div className="skill-bar">
            <div className="filled" style={{ width: '60%' }}></div>
            <span className="percentage">60%</span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">Excel</span>
          <div className="skill-bar">
            <div className="filled" style={{ width: '85%' }}></div>
            <span className="percentage">85%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
