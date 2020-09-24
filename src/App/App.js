import React, { Component } from 'react';
import DivideList from './DivideList';
import StudentList from './StudentList';
import './App.scss';
import TrainerList from './TrainerList';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <DivideList />
        <TrainerList />
        <StudentList />
      </div>
    );
  }
}

export default App;
