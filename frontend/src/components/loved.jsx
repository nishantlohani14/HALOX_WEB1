import React from 'react';

const Loved = () => {
  return (
    <div>
      <h1 style={{textAlign: 'left', fontSize: '2em'}}>Loved our hotel offerings?</h1>
      <h2 style={{textAlign: 'left', fontSize: '1.2em'}}>Here's how we do it</h2>
      <div className="container">
        <div className="card assessment">
          <div className="overlay">
            <div className="content">
              <h2>1</h2>
              <h3>Assessment</h3>
              <p>Our team will visit your hotel and inspect for feasibility of the project</p>
            </div>
          </div>
        </div>
        <div className="card analysis">
          <div className="overlay">
            <div className="content">
              <h2>2</h2>
              <h3>Analysis</h3>
              <p>We will further analyze the data to calculate budget estimation and other miscellaneous requirements</p>
            </div>
          </div>
        </div>
        <div className="card agreement">
          <div className="overlay">
            <div className="content">
              <h2>3</h2>
              <h3>Agreement</h3>
              <p>Either opt for pay as you go or buy all infrastructure by paying one time</p>
            </div>
          </div>
        </div>
        <div className="card installation">
          <div className="overlay">
            <div className="content">
              <h2>4</h2>
              <h3>Installation</h3>
              <p>Our team will install and test the entire system until smooth operation is achieved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loved;



