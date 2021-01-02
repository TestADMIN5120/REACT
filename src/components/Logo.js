import React from 'react';
import LogoHere from 'src/images/LogoHere.png';

const Logo = (props) => {
  return (
    <img
      alt="Logo"
      src={LogoHere}
      {...props}
    />
  );
};

export default Logo;
