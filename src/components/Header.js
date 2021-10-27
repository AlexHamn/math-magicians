import React from 'react';

const Header = () => {
  const headerStyle = {
    lineHeight: '1.5em',
  };

  return (
    <header style={headerStyle}>
      <h1
        style={{
          fontSize: '6rem',
          fontWeight: '600',
          marginBottom: '2rem',
          lineHeight: '1em',
          textAlign: 'center',
        }}
      >
        Math Magicians
      </h1>
    </header>
  );
};

export default Header;
