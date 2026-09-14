import React from 'react';

const experiences = [
  {
    date: 'March 2025 – Present',
    role: 'ML Intern – AI/ML (LLM Quantization)',
    institution: 'Indian Institute of Technology Jammu'
  },
  {
    date: 'May 2025 – Present',
    role: 'Research Intern – Computer Vision (Welding Defect Detection)',
    institution: 'Indian Institute of Technology Mandi'
  }
];

const Experience = () => {
  return (
    <section className="section">
      <h2 className="section-title">Experience</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {experiences.map((exp, index) => (
          <div key={index} style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'baseline',
            borderBottom: '1px solid var(--border-color)',
            paddingBottom: '0.5rem'
          }}>
            <span style={{ 
              fontFamily: 'var(--font-header)', 
              fontSize: '0.85rem',
              width: '180px',
              flexShrink: 0
            }}>
              {exp.date}
            </span>
            <div style={{ flexGrow: 1, marginLeft: '2rem' }}>
              <div style={{ fontWeight: '600' }}>{exp.role}</div>
              <div style={{ fontSize: '0.9rem', color: '#444' }}>{exp.institution}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
