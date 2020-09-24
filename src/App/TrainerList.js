import React, { Component } from 'react';
import './App.scss';

class TrainerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trainers: [],
      newName: '',
    };
  }

  componentDidMount() {
    this.getTrainers();
  }

  addNewName = (event) => {
    this.setState({
      newName: event.target.value,
    });
    fetch('http://localhost:8080/trainers', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event.target.value),
    })
      .then((response) => {
        if (response.ok) {
          return Promise.resolve(response.json());
        }
        return Promise.reject();
      })
      .catch(() => {
        console.log('err');
      });
  };

  getTrainers = () => {
    fetch('http://localhost:8080/trainers?grouped=false', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          return Promise.resolve(response.json());
        }
        return Promise.reject();
      })
      .then((data) => {
        this.setState({
          trainers: data,
        });
      })
      .catch(() => {
        console.log('err');
      });
  };

  render() {
    return (
      <div className="list-head">
        <h2>讲师列表</h2>
        <div className="list-item">
          {this.state.trainers.map((trianer) => (
            <p className="item">
              {trianer.id}. {trianer.name}
            </p>
          ))}
          <input
            className="add-item"
            type="text"
            placeholder="+添加导师"
            value={this.state.newName}
            onChange={this.addNewName}
          />
        </div>
      </div>
    );
  }
}

export default TrainerList;
