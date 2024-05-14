import React from "react";

const Amazing = () => {
  return (
    <>

      <div className="content-container">
        <div className="text-content">
          <h3>Why you must switch to Smart Hotel?</h3>
          <p>
            Our Smart Hotel technology offers touch less and unforgettable stay experience to guests. With our cloudless technology guests can simply scan provided QR code to use in room appliances, order food and many more.
          </p>
          <p>Coding is fun!</p>
        </div>
        <div className="image-content">
          <img src="/smartroom.png" alt="Smart Room" />
        </div>
      </div>

      <div className="cards-container">
        <div className="card card1 royal-blue">
          <p>Card1 -> Covid-19 compliance</p>
        </div>
        <div className="card card2 royal-blue">
          <p>Card2 -> Unforgettable guest stay experience</p>
        </div>
        <div className="card card3 royal-blue">
          <p>Card3 -> Increase energy efficiency</p>
        </div>
        <div className="card card4 royal-blue">
          <p>Card4 -> Increase revenue</p>
        </div>
        <div className="card card5 royal-blue">
          <p>Card5 -> Increase operational efficiency</p>
        </div>
        <div className="card card6 royal-blue">
          <p>Card6 -> Stay ahead of competition</p>
        </div>
      </div>

      <h2 className="section-heading">Sounds amazing! See what all we offer for Smart Hotel!</h2>
      <div className="content">
      <p className="paragraph">
        Halox is helping hotels adopt smart hotel technology at an affordable cost. Our cloudless technology and innovative business model offer the benefits of a smart hotel at a fraction of the cost.
      </p>
      {/* <div className="image-container">
        <img src="bedroom.png" alt="Bedroom" className="image" />
        <img src="phones.png" alt="Phones" className="image" />
      </div> */}
    </div>
      <div className="bullet-points">
        <ul>
          <li>Works without internet.</li>
          <li>Scan and use QR code.</li>
          <li>Switch ON/OFF lights.</li>
          <li>Dim lights, Control fan speed.</li>
          <li>Change room temperature.</li>
          <li>Change channel on TV.</li>
          <li>Geyser ON/OFF.</li>
          <li>Smart motion sensor.</li>
          <li>Schedule and routine.</li>
          <li>Voice control your devices.</li>
          <li>Change mood light color.</li>
          <li>One tap device discovery.</li>
        </ul>
      </div>

      <p>Halox is helping hotels adopt smart hotel technology at affordable cost. Our cloudless technology and innovative business model offers benefit of smart hotel at the fraction of cost.</p>
    </>
  );
};

export default Amazing;



