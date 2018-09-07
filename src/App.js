import React, { Component } from 'react';
import logo from './logo.svg';
import './utils/app.sass';

class App extends Component {
  state = { toggle: true };
  toggleToggle = () => this.setState({ toggle: !this.state.toggle });
  render() {
    const { toggle } = this.state;
    return (
      <div className="container">
        <div className="App">
          <header className="App-header">
            <h1>
              This app is built with <br />React ⚛️ + Parcel 📦!
            </h1>
          </header>
        </div>
      </div>
    );
  }
}

export default App;
