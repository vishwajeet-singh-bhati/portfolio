import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('About');

  const renderContent = () => {
    switch (activeTab) {
      case 'About': return <About />;
      case 'Resume': return <Resume />;
      case 'Portfolio': return <Projects />;
      default: return <About />;
    }
  };

  return (
    <div className="app-container">
      <Sidebar />
      <div className="card" style={{ flex: 1, position: 'relative', minHeight: '80vh' }}>
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="fade-in" key={activeTab}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default App;
