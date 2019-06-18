import React from "react";
import axios from "axios";
import "./App.css";
import FriendsList from "./components/FriendsList";
import FriendForm from "./components/FriendForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  handlePut = (id, newObj) => {
    axios
      .put(`http://localhost:5500/friends/${id}`, newObj)
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => console.log("put err", err));
  };

  handleDelete = id => {
    axios
      .delete(`http://localhost:5500/friends/${id}`)
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => console.log("delete err", err));
  };

  addFriend = newFriend => {
    axios
      .post("http://localhost:5500/friends", newFriend)
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => console.log("err", err));
  };

  componentDidMount() {
    axios
      .get("http://localhost:5500/friends")
      .then(res => {
        // console.log("res data", res.data);
        this.setState({ friends: res.data });
      })

      .catch(err => console.log("catch err", err));

    console.log("hi from CDM");
  }
  render() {
    // console.log("props", this.props);
    console.log("friends in state", this.state.friends);
    console.log("hi in render");
    return (
      <div>
        <FriendForm addFriendprop={this.addFriend} />
        {this.state.friends.map(friend => {
          return (
            <FriendsList
              key={friend.id}
              handleDeleteprop={this.handleDelete}
              handleEditprop={this.handlePut}
              friendprop={friend}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
