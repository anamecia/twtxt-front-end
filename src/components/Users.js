import React from 'react'
import API from '../API'
import User from './User'

const Users = ({ allUsers }) => {

    return(
        <div>
            {allUsers.map((user, index) => <User key={index} username={user.username}/>)}
        </div>
    );
};

export default Users 