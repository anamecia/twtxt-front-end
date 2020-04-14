import React, { Component } from 'react'

class User extends Component{
    render(){
        const { username } = this.props
        return(
            <div>
                <p>{username}</p>
            </div>
        );
    };
};

export default User