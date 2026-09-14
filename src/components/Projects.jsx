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
    <article>
      <h2 className="section-title">Portfolio</h2>
      
      <div className="project-grid">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="project-card"
          >
            <h3 className="project-title">{project.name}</h3>
            <p className="project-category">{project.tags.join(', ')}</p>
            <p className="project-desc">{project.description}</p>
          </a>
        ))}
      </div>
    </article>
  );
};

export default Projects;
