import React from 'react';
import './Projects.css';

const projects = [
  {
    name: 'Fractal Intelligence',
    description: 'Financial market prediction',
    tags: ['Python', 'Streamlit', 'Scikit-learn', 'Plotly', 'yFinance'],
    link: 'https://github.com/vishwajeet-singh-bhati/Fractal-Intelligence'
  },
  {
    name: 'Meaning-Preserving AI Enhancer',
    description: 'Llama 3 writing assistant',
    tags: ['React', 'Vite', 'Groq API', 'NLP', 'Cosine Similarity'],
    link: 'https://github.com/vishwajeet-singh-bhati/AI-Notes-Enhancer'
  },
  {
    name: 'Heart Disease Prediction System',
    description: 'Real-time risk assessment',
    tags: ['Python', 'Scikit-learn', 'Streamlit', 'Plotly'],
    link: 'https://github.com/vishwajeet-singh-bhati/heart-disease-prediction'
  },
  {
    name: 'SmartNews Analyzer',
    description: 'Hybrid NLP sentiment pipeline',
    tags: ['Python', 'Flask', 'Transformers', 'Spacy', 'NLTK', 'Scikit-learn'],
    link: 'https://github.com/vishwajeet-singh-bhati/smartnews-analyzer'
  },
  {
    name: 'Visual-QA-Quant',
    description: 'Vision QA Model Quantization',
    tags: ['Python', 'ML', 'Quantization'],
    link: 'https://github.com/vishwajeet-singh-bhati/Visual-QA-Quant'
  },
  {
    name: 'WinCLIP',
    description: 'WinCLIP implementation',
    tags: ['Python', 'Computer Vision'],
    link: 'https://github.com/vishwajeet-singh-bhati/winclip'
  },
  {
    name: 'DefectFill',
    description: 'Welding defect fill system',
    tags: ['Python', 'Computer Vision'],
    link: 'https://github.com/vishwajeet-singh-bhati/defectfill'
  },
  {
    name: 'Mess Auth',
    description: 'Mess authentication system',
    tags: ['TypeScript', 'Full-stack'],
    link: 'https://github.com/vishwajeet-singh-bhati/mess-auth'
  },
  {
    name: 'Smart Blind Stick',
    description: 'Smart stick with Telegram SOS & Navigation',
    tags: ['C++', 'IoT', 'Embedded'],
    link: 'https://github.com/vishwajeet-singh-bhati/Smart-blind-stick'
  }
];

const Projects = () => {
  return (
    <section className="section">
      <h2 className="section-title">Projects</h2>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="project-row"
          >
            <div style={{ width: '30%', fontWeight: '600', flexShrink: 0 }}>
              {project.name}
            </div>
            <div style={{ width: '35%', color: '#444' }}>
              {project.description}
            </div>
            <div style={{ 
              width: '35%',
              fontFamily: 'var(--font-header)', 
              fontSize: '0.75rem', 
              color: '#666',
              textAlign: 'right'
            }}>
              {project.tags.join(', ')}
            </div>
            <div className="project-arrow-container">
              <span className="project-arrow"></span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
