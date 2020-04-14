import React, { Component } from 'react'
import API from '../API'

class SearchBar extends Component{

    state = {
        searchedTerm: ''
    }

    searchUsers = () => {
        API.getUsers(this.state.searchedTerm)
        .then( resp =>{
            if (resp.error) throw Error(resp.error)
            console.log(resp)
        }).catch(() => console.log('User not found'))
    };

    handleOnChange = (e) => {
        this.setState({
            searchedTerm: e.target.value
        }, () => this.searchUsers())
    };

    render(){
        return(
            <div>
                <input 
                    type='text' 
                    onChange={this.handleOnChange} 
                    value={this.state.searchedTerm}
                    placeholder='Search by user name'/>
            </div>
        )
    }
}

export default SearchBar
