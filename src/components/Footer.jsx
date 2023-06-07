import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="https://twitter.com/NRakhewar">
          <FaTwitter className="footer-icon" />
        </a>
        <a href="https://github.com/NiyaRakhewar">
          <FaGithub className="footer-icon" />
        </a>
        <a href="https://www.linkedin.com/in/">
          <FaLinkedin className="footer-icon" />
        </a>
      </div>
      <div className="footer-text">© No Copyright, Feel free to replicate.</div>
    </footer>
  );
};
