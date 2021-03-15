import logo from './logo.svg';
import React from 'react';

class AppHeader extends React.Component {
  render() {
    return (
      <div>
        <img src={logo} width="256" height="256" alt="My avatar"/>
        <h1>{this.props.name}</h1>
        <h3>{this.props.tagline}</h3>
      </div>
    );
  }
}

export default AppHeader;
