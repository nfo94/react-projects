import React, { Component } from "react";

export default class ToDoItem extends Component {
  render() {
    const { title } = this.props;

    return (
      <div className="ToDoItem">
        <li className="list-group-item text-capitalize d-flex justify-content-between mt-2">
          <h6>{title}</h6>
          <div>
            <span className="mx-2 text-success">
              <i className="fas fa-pen" />
            </span>
            <span className="mx-2 text-danger">
              <i className="fas fa-trash" />
            </span>
          </div>
        </li>
      </div>
    );
  }
}
