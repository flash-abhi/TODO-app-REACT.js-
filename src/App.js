import "./styles.css";
import { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { text: "Do the laundry" },
        { text: "Iron the clothes" },
        { text: "Go for a walk" }
      ]
    };
  }
  handleAdd = (text) => {
    // complete the function to add a new Todo to the list
    const {todos} = this.state;
    todos.push({text:text});
    this.setState({
      todos: todos
    })
    // console.log(todos);
  };

  handleRemove = (todo) => {
    // complete the function to remove the Todo from the list
    const {todos} = this.state;
    // console.log(todos);
    const todoIndex = todos.indexOf(todo);
    todos.splice(todoIndex,1);
    this.setState(
      {todos}
    )
  };
  render() {
    const {todos} = this.state;
    return (
      <div className="App">
        <span>Todo</span>
        {/* Pass the todos list and function as props to utilize those in the component for adding and removing */}
        <Form handleAdd= {this.handleAdd}/>
        <List todos = {todos} handleRemove = {this.handleRemove}/>
      </div>
    );
  }
}
