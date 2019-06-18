import React, { Component } from "react";

class FriendsList extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      name: "",
      age: "",
      email: ""
    };
  }

  handleChange = e => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  deleteFriend = e => {
    this.props.handleDeleteprop(this.props.friendprop.id);
  };

  editFriend = e => {
    const editFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    this.props.handleEditprop(this.props.friendprop.id, editFriend);
  };

  render() {
    console.log("props in friends list", this.props);

    return (
      <div>
        <div>{this.props.friendprop.name}</div>
        <div>{this.props.friendprop.age}</div>
        <div>{this.props.friendprop.email}</div>
        <button onClick={this.deleteFriend}>Delete</button>

        {this.state.show ? (
          <div className="toggle">
            <input name="name" onChange={this.handleChange} />
            <input name="age" onChange={this.handleChange} />
            <input name="email" onChange={this.handleChange} />
            <button onClick={this.editFriend}>Edit</button>
            <button onClick={this.toggleShow}>Cancel</button>
          </div>
        ) : (
          <button onClick={this.toggleShow}>Edit</button>
        )}
      </div>
    );
  }
}

export default FriendsList;
