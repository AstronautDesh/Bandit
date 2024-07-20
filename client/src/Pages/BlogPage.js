import React from 'react';
//import '../css/blogPage.css';
import '../css/blog_mobile.css';

function BlogPage() {
  return (
    <div
    className="blogPage"
  >
      <div className="top-right-corner">
      </div>
      <h1>Browse Categories</h1>
      <div className='category'>
        <div className='card'>Performing Acts</div>
        <div className='card'>Song Writers</div>
        <div className='card'>UI/UX Designers</div>
        <div className='card'>Web Developers</div>
        <div className='card'>Music Producers</div>
        <div className='card'>Consultancy Services</div>
        <div className='card'>Event Planners</div>
        <div className='card'>Legal Services</div>
        <div className='card'>Hospitality</div>
        <div className='card'>Services</div>
        </div>
      </div>
  );
}

export default BlogPage;