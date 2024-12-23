import React from 'react';

const Header = () => {
  return (
    <header style={{
      backdropFilter: 'blur(10px)',
      backgroundColor: 'rgba(255, 255, 255, 0.7)', // Transparent white for glass effect
      padding: '15px 30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      borderRadius: '10px',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    }}>
      <h1 style={{
        color: '#28A745',
        fontFamily: 'Arial, sans-serif',
        fontWeight: 'bold',
      }}>
        Bl🌼ssom
      </h1>
      <nav>
        <ul style={{
          display: 'flex',
          listStyleType: 'none',
          margin: 0,
          padding: 0,
        }}>
          <li style={{ margin: '0 15px' }}>
            <a href="#" style={{
              textDecoration: 'none',
              color: '#28A745',
              fontWeight: 'bold',
              fontSize: '16px',
              transition: 'color 0.3s ease',
            }} onMouseOver={(e) => e.target.style.color = '#1F2937'}
              onMouseOut={(e) => e.target.style.color = '#28A745'}>
              Home
            </a>
          </li>
          <li style={{ margin: '0 15px' }}>
            <a href="#" style={{
              textDecoration: 'none',
              color: '#28A745',
              fontWeight: 'bold',
              fontSize: '16px',
              transition: 'color 0.3s ease',
            }} onMouseOver={(e) => e.target.style.color = '#1F2937'}
              onMouseOut={(e) => e.target.style.color = '#28A745'}>
              Marketplace
            </a>
          </li>
          <li style={{ margin: '0 15px' }}>
            <a href="#" style={{
              textDecoration: 'none',
              color: '#28A745',
              fontWeight: 'bold',
              fontSize: '16px',
              transition: 'color 0.3s ease',
            }} onMouseOver={(e) => e.target.style.color = '#1F2937'}
              onMouseOut={(e) => e.target.style.color = '#28A745'}>
              About Us
            </a>
          </li>
          <li style={{ margin: '0 15px' }}>
            <a href="#" style={{
              textDecoration: 'none',
              color: '#28A745',
              fontWeight: 'bold',
              fontSize: '16px',
              transition: 'color 0.3s ease',
            }} onMouseOver={(e) => e.target.style.color = '#1F2937'}
              onMouseOut={(e) => e.target.style.color = '#28A745'}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
