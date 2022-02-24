import React from "react";

// import css
import "./MainContainer.css";

// import components
import FileInput from "../FileInput";

const MainContainer = () => {
  return (
    <div className="MainContainer">
      <div className="MainContainer__file_input">
        <FileInput />
      </div>
    </div>
  );
};

export default MainContainer;
