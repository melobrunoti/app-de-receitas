import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const explore = (props) => (
  <div>
    <Header pageName="Explore" searchVisible={ false } />
    <h1>Explore</h1>
    <Footer { ...props } />
  </div>);

export default explore;
