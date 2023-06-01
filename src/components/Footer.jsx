import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export const Footer = () => {
  return (
    <div style={{textAlign: "center"}}>
      <footer class="main-footer">
        
        <div class="footer-links">

        <a  href="https://twitter.com/NRakhewar" >
        <FaTwitter style={{color: "purple", fontSize: "larger"}}/>
          </a>
          
          <a  href="https://github.com/NiyaRakhewar" >
          <FaGithub style={{color: "purple", fontSize: "larger"}}/>
            </a>
            
            <a  href="https://www.linkedin.com/in/">
              <FaLinkedin style={{color: "purple", fontSize: "larger"}}/>
              </a>
        </div>
        <div class="footer-text">© No Copyright, Feel free to replicate.</div>
      </footer>
    </div>
  )
}
