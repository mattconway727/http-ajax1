import React, { Component } from "react";

class FriendForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }
  handleAdd = e => {
    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    this.props.addFriendprop(newFriend);
  };

  handleChange = e => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log("this is our state", this.state);
    return (
      <div>
        <input name="name" onChange={this.handleChange} />
        <input name="age" onChange={this.handleChange} />
        <input name="email" onChange={this.handleChange} />
        <button onClick={this.handleAdd}>Add Friend</button>
      </div>
    );
  }
}

export default FriendForm;
