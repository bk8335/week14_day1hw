import React from 'react';
import ReactDOM from 'react-dom';
import ListingBox from './components/ListingBox.jsx'

window.addEventListener('load', () => {
  const targetDiv = document.getElementById('app');
  ReactDOM.render(<ListingBox />, targetDiv);
});
