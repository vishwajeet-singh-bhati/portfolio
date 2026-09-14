import React from 'react';
import './Resume.css';

const Resume = () => {
  const experiences = [
    {
      date: 'March 2025 – Present',
      role: 'ML Intern – AI/ML (LLM Quantization)',
      institution: 'Indian Institute of Technology Jammu',
      description: 'Developing post-training INT8/INT4 quantization pipelines for LLMs, benchmarking latency, throughput, and memory footprint.'
    },
    {
      date: 'May 2025 – Present',
      role: 'Research Intern – Computer Vision',
      institution: 'Indian Institute of Technology Mandi',
      description: 'Built a CNN-based welding defect detection system integrated into a real-time inference pipeline.'
    }
  ];

  return (
    <article>
      <h2 className="section-title">Resume</h2>

      <div className="timeline-section">
        <h3 className="timeline-title">Experience</h3>
        
        <ol className="timeline-list">
          {experiences.map((exp, index) => (
            <li className="timeline-item" key={index}>
              <h4 className="timeline-item-title">{exp.role}</h4>
              <span className="timeline-item-date">{exp.date}</span>
              <div className="timeline-item-institution">{exp.institution}</div>
              <p className="timeline-text">{exp.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </article>
  );
};

export default Resume;
