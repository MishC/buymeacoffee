import React from "react";

import "./footer.css";
import Dropdown from "./dropDown";
import { link1, link2, link3, link4, link5, link6, link7 } from "./links";
import * as Icons from "../../assets/SVGs/AllIconsSVG";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <a href="https://www.buymeacoffee.com/about" className="footer-link">
          About
        </a>
        <a
          href="https://help.buymeacoffee.com/en/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Help Center
        </a>
        <Dropdown name="Apps" links={[link1(), link2()]} />
        <Dropdown
          name="Resources"
          links={[link3(), link4(), link5(), link6(), link7()]}
        />
        <a href="https://www.buymeacoffee.com/privacy-policy">Privacy</a>{" "}
        <a href="https://www.buymeacoffee.com/terms" rel="noopener noreferrer">
          Terms
        </a>
      </div>

      <div className="footer-right">
        <span className="logo px-4"> © Buy Me a Coffee</span>
        <a
          href="https://www.youtube.com/buymeacoffee"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span dangerouslySetInnerHTML={{ __html: Icons.youtube_bw }} />
        </a>{" "}
        <a
          href="https://twitter.com/buymeacoffee"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span dangerouslySetInnerHTML={{ __html: Icons.twitter_bw }} />
        </a>
      </div>
    </div>
  );
};
export default Footer;
