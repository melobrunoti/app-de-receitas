import React from 'react';
import Footer from '../components/Footer';

const drinks = (props) => {
  function renderFooter() {
    const { pathname } = props.location;
    console.log(props);

    if (pathname === '/drinks') return <Footer { ...props } />;
  }

  return (
    <div>
      <h1>drinks</h1>
      {
        renderFooter()
      }
    </div>
  );
};

export default drinks;
