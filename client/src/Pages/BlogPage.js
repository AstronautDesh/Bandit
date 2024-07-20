//Pages/BlogPages.js
import React from 'react';
import { Link } from 'react-router-dom';
//import '../css/blogPage.css';
import '../css/blog_mobile.css';
//import PerformingActsPage from '../BluePages/PerformingActsPage';

function BlogPage() {
  return (
    <div
    className="blogPage"
  >
      <div className="top-right-corner">
      </div>
      <h1>Browse Categories</h1>
      <div className='category'>
        <Link to={'/performingActsPage'}>
        <div className='card'>Performing Acts</div>
        </Link>
        <Link to={'/songwriter'}>
        <div className='card'>Song Writers</div>
        </Link>
        <Link to={'/design'}>
        <div className='card'>UI/UX Designers</div>
        </Link>
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