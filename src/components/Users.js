import React from 'react'
import User from './User'

const Users = ({ allUsers, followUser , followedUsers}) => {

    return(
        <div>
            {allUsers.map((user, index) => <User 
                key={index} 
                username={user.username}
                followUser={() => followUser(user)}
            />)}
        </div>
    );
};

export default Users 