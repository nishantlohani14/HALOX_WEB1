import React, { useState } from 'react';

const Partner = () => {
  const [activeFAQ, setActiveFAQ] = useState('faq-1');

  const handleFAQClick = (faqId) => {
    setActiveFAQ(faqId);
  };

  return (
    <div className="partner-container">
      {/* Non confirmed referral */}
      <div className="referral-box">
        <h3 className="referral-title">Non confirmed referral</h3>
        <p className="referral-description">
          In this program you will be referring clients which we will try to convince to install IoTronix's devices. All head ache is ours you will just earn the commission on successful conversion.
        </p>
        <p className="referral-requirements">
          Requirements: No special requirements
          <br />
          Benefit: Commission upto 5% & perks
          <br />
          Estimated earning: ₹10,000 - ₹20,000
        </p>
        <a href="/refer-now" className="refer-now-button">REFER NOW</a>
      </div>
      
      {/* Points */}
      <div className="points-container">
        <div className="point">
          <h4>What will I have to do?</h4>
          <p>If you have a good network of people who wants to convert their home into smart home you can refer them and earn upto 5% commission.</p>
        </div>
        <div className="point">
          <h4>What IoTronix will do?</h4>
          <p>We will arrange meetings with your referrals, install devices, also we will provide after sale support for any issue.</p>
        </div>
        <div className="point">
          <h4>Suitable for</h4>
          <p>If you have very limited time to make sales on our behalf you can just refer potential clients we will do the rest.</p>
        </div>
      </div>
      
      {/* Confirmed referral */}
      <div className="referral-box">
        <h3 className="referral-title">Confirmed referral</h3>
        <p className="referral-description">
          In this program you will be referring us clients and we will take care of installation and after sales service.
        </p>
        <p className="referral-requirements">
          Requirements: Skills to convince clients
          <br />
          Benefit: Commission upto 15% & perks
          <br />
          Estimated earning: ₹30,000 - ₹50,000
        </p>
        <a href="/refer-now" className="refer-now-button">REFER NOW</a>
      </div>
      
      {/* Points */}
      <div className="points-container">
        <div className="point">
          <h4>What will I have to do?</h4>
          <p>You will be having responsibility of referring us 100% confirmed clients who are sure to install IoTronix's devices.</p>
        </div>
        <div className="point">
          <h4>What IoTronix will do?</h4>
          <p>We will install devices, provide after sale support for any issue. We will not arrange any additional physical meetings.</p>
        </div>
        <div className="point">
          <h4>Suitable for</h4>
          <p>If you can afford to spend few hours a week to convert you referrals into buyer than you are good to go with it.</p>
        </div>
      </div>
      
      {/* DISTRIBUTOR */}
      <div className="distributor-text">
        <h3>DISTRIBUTOR</h3>
        <p>Role of an entrepreneur is to create more entrepreneurs</p>
        <h4>How do I start it?</h4>
        <p>Start Smart home business with minimal investment in your city/locality and earn 50K to 300K per month!</p>
      </div>
      
      {/* Three static cards */}
      <div className="cards-container">
        <div className="card">
          <h3>ONBOARDING</h3>
          <p>Get one time agreement done and deposit a minimal refundable security, hurrah you are onboarded.</p>
        </div>
        <div className="card">
          <h3>SELL</h3>
          <p>Procure original device from our manufacturing hub and stock in your local store/warehouse.</p>
        </div>
        <div className="card">
          <h3>STOCK</h3>
          <p>Market the products are per your strategy and sell as per your convenience.</p>
        </div>
      </div>
      
      {/* Frequently Asked Questions */}
      <div className="faq-container">
        <h3>Frequently Asked Questions</h3>
        <div className="faq-buttons">
          <button className="faq-button" onClick={() => handleFAQClick('faq-1')}>How much is the security amount?</button>
          <button className="faq-button" onClick={() => handleFAQClick('faq-2')}>Will I be trained?</button>
          <button className="faq-button" onClick={() => handleFAQClick('faq-3')}>How can I buy the devices?</button>
          <button className="faq-button" onClick={() => handleFAQClick('faq-4')}>What is the full process to become distributor?</button>
        </div>
        <div className="faq-answers">
          <p id="faq-1-answer" style={{ display: activeFAQ === 'faq-1' ? 'block' : 'none' }}>Minimum security amount is ₹30,000. We will send you devices worth or 30,000. You can either sell those devices or install in your own home, once you return the devices in working condition we will refund you the amount.</p>
          <p id="faq-2-answer" style={{ display: activeFAQ === 'faq-2' ? 'block' : 'none' }}>Of course, you will be trained how our devices work, how to install the devices, some basic troubleshooting etc. You will also be trained to handle some miscellaneous cases.</p>
          <p id="faq-3-answer" style={{ display: activeFAQ === 'faq-3' ? 'block' : 'none' }}>You can reach our sales department, make the payment as per agreement and device cost and devices will be shipped to you. Transportation cost to be borne by the distributor. In case of bulk order we will ship the devices for free.</p>
          <p id="faq-4-answer" style={{ display: activeFAQ === 'faq-4' ? 'block' : 'none' }}>1. Onboarding<br />2. Procure devices from our manufacturing hub<br />3. Sell the products as per your convenience<br /><br />You can contact us for any further queries.</p>
        </div>
      </div>
    </div>
  );
};

export default Partner;



