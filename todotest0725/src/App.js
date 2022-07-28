import React from "react";
import Todo from "./Todo";
import { Paper, List, Container } from "@material-ui/core";
import "./App.css";
import AddTodo from "./AddTodo.js";
import { call } from "./service/ApiService";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  // componentDidMount() {
  //   const requestOptions = {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" },
  //   };

  //   fetch("http://localhost:8080/todo", requestOptions)
  //     .then(response => response.json())
  //     .then(
  //       response => {
  //         this.setState({
  //           items: response.data,
  //         });
  //       },
  //       error => {
  //         this.setState({
  //           error,
  //         });
  //       }
  //     );
  // }

  componentDidMount() {
    call("/todo", "GET", null).then(response =>
      this.setState({ items: response.data })
    );
  }

  add = item => {
    call("/todo", "GET", null).then(response =>
      this.setState({ items: response.data })
    );
  };

  delete = item => {
    call("/todo", "DELETE", item).then(response =>
      this.setState({ items: response.data })
    );
  };

  update = item => {
    call("/todo", "PUT", item).then(response =>
      this.setState({ items: response.data })
    );
  };

  // add = item => {
  //   const thisItems = this.state.items;
  //   item.id = "ID-" + thisItems.length;
  //   item.done = false;
  //   thisItems.push(item);
  //   this.setState({ items: thisItems });
  //   console.log("items : ", this.state.items);
  // };

  // delete = item => {
  //   const thisItems = this.state.items;
  //   console.log("Before Update Items :", this.state.items);
  //   const newItems = thisItems.filter(e => e.id !== item.id);
  //   this.setState({ items: newItems }, () => {
  //     console.log("Update Items : ", this.state.items);
  //   });
  // };

  // add = item => {
  //   const requestOptions = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(item),
  //   };
  //   fetch("http://localhost:5000/todo", requestOptions)
  //     .then(response => response.json())
  //     .then(response => this.setState9({ items: response.data }));
  // };

  // delete = item => {
  //   const requestOptions = {
  //     method: "DELETE",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(item),
  //   };
  //   fetch("http://localhost:5000/todo", requestOptions)
  //     .then(response => response.json())
  //     .then(response => this.setState9({ items: response.data }));
  // };

  render() {
    const todoItems = this.state.items.length > 0 && (
      <Paper style={{ margin: 16 }}>
        <List>
          {this.state.items.map((item, idx) => (
            <Todo
              item={item}
              key={item.id}
              delete={this.delete}
              update={this.update}
            />
          ))}
        </List>
      </Paper>
    );

    return (
      <div className="App">
        <Container maxWidth="md">
          <AddTodo add={this.add} />
          <div className="TodoList">{todoItems}</div>
        </Container>
      </div>
    );
  }
}
