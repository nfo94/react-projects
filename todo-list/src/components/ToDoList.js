import React, { Component } from "react";
import ToDoItem from "./ToDoItem";

export default class ToDoList extends Component {
  render() {
    const { items, clearList, handleDelete } = this.props;

    return (
      <React.Fragment>
        <ul className="list-group mt-5" />
        <h3 className="text-capitalize text-center">Todo list</h3>
        {items.map(item => {
          return (
            <ToDoItem
              key={item.id}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
            />
          );
        })}
        <button
          type="button"
          className="btn btn-danger btn-block text-capitalize mt-5"
          onClick={clearList}
        >
          Clear list
        </button>
      </React.Fragment>
    );
  }
}
