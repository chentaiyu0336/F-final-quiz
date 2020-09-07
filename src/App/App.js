import React, { Component } from 'react';
import DivideList from './DivideList';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <DivideList />
      </div>
    );
  }
}

export default App;
