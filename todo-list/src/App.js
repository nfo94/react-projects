import React, { Component } from "react";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";

export default class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false
  };

  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };

  handleSubmit = e => {
    const newItem = {
      id: this.state.id,
      title: this.state.item
    };

    const updatedItens = [...this.state.items, newItem];

    this.setState({
      items: updatedItens,
      item: "",
      id: uuid(),
      editItem: false
    });

    e.preventDefault();
  };

  clearList = () => {
    this.setState({
      items: []
    });
  };

  handleDelete = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">Todo Input</h3>
            <ToDoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
            <ToDoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
            />
          </div>
        </div>
      </div>
    );
  }
}
