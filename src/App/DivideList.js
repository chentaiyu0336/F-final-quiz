import React, { Component } from 'react';
import './App.scss';

class DivideList extends Component {
  render() {
    return (
      <div className="divide-list-head">
        <h2>分组列表</h2>
        <button type="button">分组学员</button>
      </div>
    );
  }
}

export default DivideList;
