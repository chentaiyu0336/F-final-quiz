import React, { Component } from 'react';
import './App.scss';

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      newName: '',
    };
  }

  componentDidMount() {
    this.getStudentList();
  }

  addNewName = (event) => {
    this.setState({
      newName: event.target.value,
    });
    fetch('http://localhost:8080/student/add', {
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

  getStudentList = () => {
    fetch('http://localhost:8080/student', {
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
          students: data,
        });
        console.log(data);
      })
      .catch(() => {
        console.log('err');
      });
  };

  render() {
    return (
      <div className="studentListHead">
        <h2>学员列表</h2>
        <div className="studentListitem">
          {this.state.students.map((student) => (
            <p className="item">
              {student.id}. {student.studentName}
            </p>
          ))}
          <input
            type="text"
            placeholder="+添加学员"
            value={this.state.newName}
            onChange={this.addNewName}
          />
        </div>
      </div>
    );
  }
}

export default StudentList;
