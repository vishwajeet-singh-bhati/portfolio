import React from 'react';

const About = () => {
  return (
    <article>
      <h2 className="section-title">About Me</h2>
      <div style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        <p style={{ marginBottom: '1rem' }}>
          I'm a Computer Science undergraduate bridging low-bit Machine Learning research and full-stack systems development. 
          My passion lies in making complex models run efficiently on constrained devices and building seamless, low-latency web applications to serve them.
        </p>
        <p>
          Currently, I'm interning as an AI/ML Intern focusing on LLM Quantization at IIT Jammu, and working on Computer Vision models for welding defect detection at IIT Mandi.
        </p>
      </div>
      
      <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Primary Focus</h3>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
        <div style={{ backgroundColor: 'var(--card-bg-light)', padding: '1.5rem', borderRadius: '15px' }}>
          <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Model Quantization</h4>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Compressing LLMs using INT8/INT4 precision for faster inference and lower memory footprints.
          </p>
        </div>
        
        <div style={{ backgroundColor: 'var(--card-bg-light)', padding: '1.5rem', borderRadius: '15px' }}>
          <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Full-Stack Development</h4>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Building performant dashboards and production pipelines with React, Next.js, and Streamlit.
          </p>
        </div>
      </div>
    </article>
  );
};

export default About;
