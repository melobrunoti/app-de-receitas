import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icon } from '@iconify/react';
import Footer from '../components/Footer';

import '../styles/explore.css';

function Explore(props) {
  const history = useHistory();
  return (
    <div>
      <section className="explore-container">
        <button
          type="button"
          data-testid="explore-foods"
          name="Explore Foods"
          onClick={ () => history.push('/explore/foods') }
        >
          <FontAwesomeIcon icon="hamburger" className="explore-icons" />
        </button>
        <button
          type="button"
          data-testid="explore-drinks"
          name="Explore Drinks"
          onClick={ () => history.push('/explore/drinks') }
        >
          {/* <FontAwesomeIcon icon="glass-cheers" className="explore-icons" /> */}
          <Icon icon="fluent:drink-wine-16-filled" className="explore-icons" />
        </button>
      </section>

      <Footer { ...props } />
    </div>);
}
export default Explore;
