import React from "react";
import { socialLinks } from "../Data/data";
import PathLink from "../pathLink/PathLink";

const Footer = () => {
  return (
    <footer className="section footer">
     <PathLink />
      
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          const { id, href, icon } = link;
          return (
            <li key={id}>
              <a
                rel="noopener"
                href={href}
                target="_blank"
                className="footer-icon"
              >
                <i className={icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
