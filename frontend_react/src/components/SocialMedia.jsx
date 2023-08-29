import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        href="https://www.linkedin.com/in/danygarza00/"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <FaLinkedin />
        </div>
      </a>
      <a href="https://github.com/danygzatec" target="_blank" rel="noreferrer">
        <div>
          <FaGithub />
        </div>
      </a>
      <a href="mailto:dany.gza@gmail.com" target="_blank" rel="noreferrer">
        <div>
          <MdEmail />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
