import React from 'react';
import QRCode from 'qrcode.react';

const QRCodeComponent = () => {
  // URL to redirect to
  const redirectUrl = "http://192.168.29.56:3000/button"; // Replace "your-laptop-ip-address" with your laptop's IP address

  return (
    <div>
      <h2>Scan this QR Code</h2>
      <QRCode value={redirectUrl} />
    </div>
  );
};

export default QRCodeComponent;


// import React from 'react';
// import QRCode from 'qrcode.react';

// const QRCodeComponent = () => {
//   // Replace "localhost" with your IP address
//   const ipAddress = "192.168.29.56"; // For example: "192.168.1.100"
//   const redirectUrl = `http://${ipAddress}:3000/ButtonsPage.jsx`;

//   return (
//     <div>
//       <h2>Scan this QR Code</h2>
//       <QRCode value={redirectUrl} />
//     </div>
//   );
// };

// export default QRCodeComponent;





