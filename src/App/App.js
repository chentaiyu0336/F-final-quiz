import React, { Component } from 'react';
import DivideList from './DivideList';
import StudentList from './StudentList';
import './App.scss';
import TrainerList from './TrainerList';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        {/* TODO Feedback: 命名不符合业务功能, GroupList更合理 */}
        <DivideList />
        <TrainerList />
        {/* TODO Feedback: 命名不符合业务功能, TraineeList更合理 */}
        <StudentList />
      </div>
    );
  }
}

export default App;
