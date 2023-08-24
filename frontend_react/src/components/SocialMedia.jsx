import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <FaLinkedin />
      </div>
      <div>
        <FaGithub />
      </div>
      <div>
        <MdEmail />
      </div>
    </div>
  );
};

export default SocialMedia;
