import React from 'react'
import { pageLinks  } from "../Data/data";

const PathLink = () => {
  return (
    <ul className="footer-links">
    {pageLinks.map((link) => {
      const { id, href, text } = link;
      return (
        <li key={id}>
          <a href={href} className="footer-link">
            {text}
          </a>
        </li>
      );
    })}
  </ul>
  )
}

export default PathLink