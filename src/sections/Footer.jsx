import { socialImgs } from "../constants";
import { FaGithub, FaLinkedin, FaInstagram, FaBehance } from "react-icons/fa";

const iconMap = {
  github: <FaGithub />,
  linkedin: <FaLinkedin />,
  insta: <FaInstagram />,
  behance: <FaBehance />,
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="socials">
          {socialImgs.map((socialImg) => (
            <a
              key={socialImg.name}
              href={socialImg.link}
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              {iconMap[socialImg.name]}
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end text-sm text-gray-500 cursor-text">
            © {new Date().getFullYear()} Mustapha Shuaibu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
