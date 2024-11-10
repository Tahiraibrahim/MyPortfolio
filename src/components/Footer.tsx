
import React from 'react';
import Link from 'next/link';
import { FaFacebookSquare, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer-container mt-16 text-center bg-accent text-indigo-950'>
      <p>@ Tahira | All rights reserved 2024. Built with Next.js, HTML & CSS | Thank you for visiting my portfolio!</p>
      
      <div className="social-icons">
        <Link href="https://www.facebook.com/profile.php?id=100090959635555&mibextid=ZbWKwL" passHref target="_blank" rel="noopener noreferrer">
          <FaFacebookSquare />
        </Link>
        <Link href="https://www.instagram.com/itstahirasalahuddin?igsh=MWs5emJzbHppZXlxMw==" passHref target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </Link>
        <Link href="https://twitter.com/" passHref target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </Link>
        <Link href="https://www.linkedin.com/in/tahira-ibrahim-g-18761b26b/" passHref target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
