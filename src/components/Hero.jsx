import React from 'react';

const Hero = () => {
  return (
    <section className="section" style={{ marginTop: '2rem' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', lineHeight: '1.2' }}>Vishavjeet Singh Bhati</h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '2rem', fontWeight: '500' }}>
        Computer Science undergrad bridging low-bit ML research and full-stack systems.
      </p>
      <div style={{ display: 'flex', gap: '1.5rem', fontFamily: 'var(--font-header)', fontSize: '0.9rem' }}>
        <a href="https://github.com" target="_blank" rel="noreferrer" style={{ borderBottom: '1px solid var(--border-color)' }}>GitHub</a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ borderBottom: '1px solid var(--border-color)' }}>LinkedIn</a>
        <a href="https://codeforces.com" target="_blank" rel="noreferrer" style={{ borderBottom: '1px solid var(--border-color)' }}>Codeforces</a>
        <a href="https://codechef.com" target="_blank" rel="noreferrer" style={{ borderBottom: '1px solid var(--border-color)' }}>CodeChef</a>
        <a href="mailto:bhatiloonkha12@gmail.com" style={{ borderBottom: '1px solid var(--border-color)' }}>Email</a>
      </div>
    </section>
  );
};

export default Hero;
