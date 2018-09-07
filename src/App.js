import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import './utils/app.sass';

import GalleryContainer from './containers/GalleryContainer';

class App extends Component {
  state = { toggle: true };
  toggleToggle = () => this.setState({ toggle: !this.state.toggle });
  render() {
    const { toggle } = this.state;
    return (
      <div>
        <Navbar color="dark" dark>
          <NavbarBrand href="/">Photo gallery</NavbarBrand>
        </Navbar>
        <GalleryContainer/>
      </div>
    );
  }
}

export default App;
