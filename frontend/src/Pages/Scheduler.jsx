import React, { useState } from 'react';

const Scheduler = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }
    if (!date.trim()) {
      setErrorMessage('Please select a date.');
      return;
    }
    if (!time.trim()) {
      setErrorMessage('Please select a time.');
      return;
    }
    if (!phoneNumber.trim() || !phoneNumber.match(/^\d{10}$/)) {
      setErrorMessage('Please enter a valid 10-digit phone number.');
      return;
    }
    // Handle submission logic here
  };

  return (
    <div className="scheduler-container">
      <div className="scheduler-form">
        <h2>Schedule Call</h2>
        <p>Got questions? Have something to share? Let's schedule a call.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name *</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label>Preferred Date *</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Preferred Time *</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone Number *</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter your phone number"
              pattern="[0-9]{10}"
              required
            />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit" className="schedule-call-btn">
            SCHEDULE CALL
          </button>
        </form>
      </div>
    </div>
  );
};

export default Scheduler;


