import React from 'react';

const Blog = () => {
  return (
    <div className="blog-container">
      {/* First box */}
      <div className="blog-box">
        <h2 className="blog-title">Redefining security for smart homes</h2>
        <p className="blog-content">
          Smart devices are going to be part of our daily life in the coming decade. Smart devices not only make life more comfortable and luxurious but also offer tangible benefits to the user at the same time in terms of security, safety, efficiency...
        </p>
        <a href="/blog1" className="read-more-link">READ MORE -&gt;</a>
      </div>

      {/* Text without box */}
      <div className="blog-text">
        <h2 className="blog-title">What is Haloxcloudless technology and how it works?</h2>
        <p className="blog-content">
          Smart devices are going to be part of our daily life in the coming decade. Smart devices not only make life more comfortable and luxurious but also offer tangible benefits to the user...
        </p>
        <a href="/blog2" className="read-more-link">READ MORE -&gt;</a>
      </div>

      {/* Second box with horizontal hovering cards */}
      <div className="blog-box">
        <div className="horizontal-card-container">
          <div className="horizontal-card">
            <h2 className="card-title">What is Halox cloudless technology and how it works</h2>
            <p className="card-content">
              Smart devices are going to be part of our daily life in the coming decade. Smart devices...
            </p>
            <a href="/blog3" className="continue-reading-link">CONTINUE READING...</a>
          </div>
          <div className="horizontal-card">
            <h2 className="card-title">Another Card Title</h2>
            <p className="card-content">
              Another card content here...
            </p>
            <a href="/blog4" className="continue-reading-link">CONTINUE READING...</a>
          </div>
          <div className="horizontal-card">
            <h2 className="card-title">Yet Another Card Title</h2>
            <p className="card-content">
              Yet another card content here...
            </p>
            <a href="/blog5" className="continue-reading-link">CONTINUE READING...</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;



