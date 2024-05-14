
import React from 'react';
import { Link } from 'react-router-dom';
// import './ButtonsPage.css';

const ButtonsPage = ({ toggleBulb, toggleCurtain }) => {
  return (
    <div className="buttons-container">
      <h1>Buttons Page</h1>
      <button className="button" onClick={toggleBulb}>Toggle Bulb</button>
      <button className="button" onClick={toggleCurtain}>Toggle Curtain</button>
      <Link className="link" to="/images">Go to Images Page</Link>
    </div>
  );
};

export default ButtonsPage;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { QrReader } from 'react-qr-reader';


// const ButtonsPage = ({ toggleBulb, toggleCurtain }) => {
//   const [scanResult, setScanResult] = useState(null);

//   const handleScan = (data) => {
//     if (data) {
//       setScanResult(data);
//       // Redirect to the scanned URL
//       window.location.href = data;
//     }
//   };

//   const handleError = (err) => {
//     console.error(err);
//   };

//   return (
//     <div className="buttons-container">
//       <h1>Buttons Page</h1>
//       <button className="button" onClick={toggleBulb}>Toggle Bulb</button>
//       <button className="button" onClick={toggleCurtain}>Toggle Curtain</button>
//       <Link className="link" to="/images">Go to Images Page</Link>
      
//       {/* QR Code Scanner */}
//       <QrReader
//         delay={300}
//         onError={handleError}
//         onScan={handleScan}
//         style={{ width: '100%', maxWidth: '300px' }}
//       />
//     </div>
//   );
// };

// export default ButtonsPage;

// ButtonsPage.jsx





