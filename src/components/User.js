import React, { Component } from 'react'

class User extends Component{
    render(){
        const { username, followUser} = this.props

        return(
            <div>
                <p onClick={followUser}>{username}</p>
            </div>
        );
    };
};

export default User