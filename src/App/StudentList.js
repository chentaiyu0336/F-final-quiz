import React, { Component } from 'react';
import './App.scss';

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        {
          id: 1,
          name: '沈乐棋',
        },
        {
          id: 2,
          name: '徐慧慧',
        },
        {
          id: 3,
          name: '陈思聪',
        },
        {
          id: 4,
          name: '王江林',
        },
        {
          id: 5,
          name: '王登宇',
        },
        {
          id: 6,
          name: '杨思雨',
        },
        {
          id: 7,
          name: '江雨舟',
        },
        {
          id: 8,
          name: '廖燊',
        },
        {
          id: 9,
          name: '胡晓',
        },
        {
          id: 10,
          name: '但杰',
        },
        {
          id: 11,
          name: '盖迈达',
        },
        {
          id: 12,
          name: '肖美琦',
        },
        {
          id: 13,
          name: '黄云洁',
        },
        {
          id: 14,
          name: '齐瑾浩',
        },
        {
          id: 15,
          name: '刘亮亮',
        },
        {
          id: 16,
          name: '肖逸凡',
        },
      ],
    };
  }

  render() {
    return (
      <div className="studentListHead">
        <h2>学员列表</h2>
        <div className="studentListitem">
          {this.state.students.map((student) => (
            <p className="item">
              {student.id}. {student.name}
            </p>
          ))}
        </div>
      </div>
    );
  }
}

export default StudentList;
