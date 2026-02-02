import React from "react";
import { FiUser } from "react-icons/fi";
import { BiBook } from "react-icons/bi";
const Header = () => {
  return (
    <div className="header">
      <div
        className="workify_h1
      "
      >
        <h1>Workify</h1>
      </div>
      <div className="workify_box">
        <h2>
          <FiUser />
          Talents
        </h2>
        <h2>
          <BiBook />
          Jobs
        </h2>
      </div>

      <div
        className="worfiy_btn
      "
      >
        <button>Sign in</button>
        <button>Join Now</button>
      </div>
    </div>
  );
};

export default Header;
