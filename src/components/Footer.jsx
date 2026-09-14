import React from 'react';

const Footer = () => {
  return (
    <footer style={{ 
      marginTop: '6rem', 
      paddingTop: '2rem', 
      borderTop: '1px solid var(--border-color)',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '0.9rem'
    }}>
      <div>Designed by Vishavjeet Singh Bhati</div>
      <a href="mailto:bhatiloonkha12@gmail.com" style={{ borderBottom: '1px solid var(--border-color)' }}>bhatiloonkha12@gmail.com</a>
    </footer>
  );
};

export default Footer;
