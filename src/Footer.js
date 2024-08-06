import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='Footer' style={{ textAlign: 'center', padding: '1rem' }}>
      <h2>Footer</h2>
      <p>© {currentYear} MG Social Media. All rights reserved.</p>
      <p>Follow us on:</p>
      <div>
        <span role="img" aria-label="Twitter">🐦</span> Twitter | 
        <span role="img" aria-label="Facebook">📘</span> Facebook | 
        <span role="img" aria-label="Instagram">📸</span> Instagram
      </div>
    </footer>
  );
}

export default Footer;
