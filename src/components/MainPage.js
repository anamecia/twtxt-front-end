import React, { Component } from 'react'
import API from '../API'
import SearchBar from './SearchBar'
import Users from './Users'


class MainPage extends Component {

    state = {
        allUsers:[]
    }

    componentDidMount = () => {
        API.getUsers()
        .then(data => this.setState({
            allUsers: data.users
        }))
    }

    render(){

        return(
            <div>
                {/* <SearchBar
                    updateSearchedUsers={this.updateSearchedUsers}
                /> */}
                <Users allUsers={this.state.allUsers}/>
            </div>
        )
    }
}

export default MainPage