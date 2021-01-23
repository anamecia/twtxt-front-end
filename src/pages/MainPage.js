import React, { Component } from "react";
import API from "../API";
import SearchBar from "../components/seachBar/SearchBar";
import Users from "../components/Users";
import TwtxtList from "../components/TwtxtList";
import NavBar from "../components/navBar/NavBar";

class MainPage extends Component {
  state = {
    allUsers: [],
    followedUsers: [],
  };

 

  // followUser = (userToFollow) => {
  //   const allUsers = [...this.state.allUsers];
  //   const notFollowedUsers = allUsers.filter((user) => user !== userToFollow);
  //   this.setState({
  //     allUsers: notFollowedUsers,
  //     followedUsers: [...this.state.followedUsers, userToFollow],
  //   });
  // };

  render() {
    return (
      <div>
        {/* <SearchBar
                    updateSearchedUsers={this.updateSearchedUsers}
                /> */}
        {/* <Users 
                    allUsers={this.state.allUsers}
                    followUser={this.followUser}
                />
                <TwtxtList followedUsers={this.state.followedUsers}/> */}
      </div>
    );
  }
}

export default MainPage;
