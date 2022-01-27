import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

// class Header extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       searchVisible: true,
//     };
//   }

//   render() {
//     const { pageName } = this.props;
//     return (
//       <div>
//         <Link to="/profile">
//           <img data-testid="profile-top-btn" src={ profileIcon } alt="profile icon" />
//         </Link>
//         <p data-testid="page-title">{ pageName }</p>
//         <img data-testid="search-top-btn" src={ searchIcon } alt="search icon" />
//       </div>
//     );
//   }
// }

function Header({ pageName, searchVisible }) {
  console.log(searchVisible);
  return (
    <div>
      <Link to="/profile">
        <img data-testid="profile-top-btn" src={ profileIcon } alt="profile icon" />
      </Link>
      <p data-testid="page-title">{ pageName }</p>
      {searchVisible
        ? <img data-testid="search-top-btn" src={ searchIcon } alt="search icon" />
        : null}

    </div>
  );
}

Header.propTypes = {
  pageName: PropTypes.string.isRequired,
  searchVisible: PropTypes.bool.isRequired,
};

export default Header;
