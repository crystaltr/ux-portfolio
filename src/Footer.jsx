import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
  
    return <footer>{`Copyright © Crystal Truong ${year}`}</footer>;
  };
  
  export default Footer;