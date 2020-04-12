import React, { Component } from 'react'
import API from '../API'

class SearchBar extends Component{

    state = {
        searchedTerm = '',
        allUsers = []
    }

    componentDidMount = () => {
        API.getUsers()
        .then( resp => console.log(resp))
    }

    handleOnChange = (e) => {
        this.setState({
            searchedTerm: e.target.value
        })
    }

    render(){
        return(
            <div>
                <input 
                    type='text' 
                    onChange={null} 
                    value={this.state.searchedTerm}
                    placeholder='Search by user name'/>
            </div>
        )
    }
}

export default SearchBar
