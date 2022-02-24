import React from "react";

const FileInput = () => {
  return (
    <div className="FileInput">
      <input type="file" name="file" id="file" />
      <label htmlFor="file">Upload a CSV or excel file.</label>
    </div>
  );
};

export default FileInput;
