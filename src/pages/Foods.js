import React from 'react';
import Footer from '../components/Footer';

const foods = (props) => {
  function renderFooter() {
    const { pathname } = props.location;

    if (pathname === '/foods') return <Footer { ...props } />;
  }

  return (
    <div>
      <h1>FOODS</h1>
      {
        renderFooter()
      }
    </div>
  );
};

export default foods;
