import React from 'react';

const Download = () => {
  return (
    <div className="download-container">
      <div className="download-box">
        <h2 className="download-title">DOWNLOAD</h2>
      </div>
      <div className="options">
        <div className="option">
          <span>Option 1</span>
          <button className="download-button">Download</button>
        </div>
        <div className="option">
          <span>Option 2</span>
          <button className="download-button">Download</button>
        </div>
        <div className="option">
          <span>Option 3</span>
          <button className="download-button">Download</button>
        </div>
        <div className="option">
          <span>Option 4</span>
          <button className="download-button">Download</button>
        </div>
        <div className="option">
          <span>Option 5</span>
          <button className="download-button">Download</button>
        </div>
      </div>
      <div className="pledge-section">
        <h3>Pledge</h3>
        <p>#SaveElectricityWithHalox</p>
        <div className="download-links">
          <button className="download-link-button">DOWNLOAD IN ENGLISH</button>
          <button className="download-link-button">DOWNLOAD IN ENGLISH</button>
        </div>
      </div>
    </div>
  );
};

export default Download;

