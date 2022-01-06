import React, { Component } from "react";
import "./TodoApp.css";

export class Todoapp extends Component {
  state = {
    input: "",
    items: [],
  };

  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });

  };

  storeItems = (event) => {
    event.preventDefault();
    const { input } = this.state;
    const allItems = this.state.items;

    allItems.push(input);

    this.setState({
      items: allItems,
      input: "", //input field need to be cleared when we type new text
    });
  };

  deleteItem = (key) => {
    const allItems = this.state.items;
    allItems.splice(key, 1);

    this.setState({
      items: allItems,
    });
  };

  render() {
    const { input, items } = this.state;
    console.log(items);
    /*
        //this.handleChange

        */
    return (
      <div className="todo-container">
        <form className="input-section" onSubmit={this.storeItems}>
          <h1>ToDo App</h1>
          <input
            type="text"
            value={input}
            onChange={this.handleChange}
            placeholder="Enter your text.."
          />
        </form>

        <ul>
          {items.map((data, index) => (
            <li key={index}>
              {data}{" "}
              <i
                className="fas fa-trash"
                onClick={() => this.deleteItem(index)}
              ></i>
            </li>
          ))}
          ;
        </ul>
      </div>
    );
  }
}

export default Todoapp;
