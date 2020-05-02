import React, { useState, useEffect } from 'react'
import API from '../API'

const TwtxtList = ({ followedUsers }) => {

    const [twtxts, setTwtxts] = useState([])
    

    const getIndividualTwtxt = (usersTwtxt) => {
        usersTwtxt.map(twtxt => setTwtxts({ twtxts: [...twtxts, twtxt]}))
    }

    const getUserTwtxts = (username) => {
        API.getUser(username)
        .then(data => getIndividualTwtxt(data.twtxts))
    }

    useEffect(() => {
        followedUsers.map(user => getUserTwtxts(user.username))
    }, [followedUsers.length])

    return(
        <div>
                
        </div>
    )
   
};

export default TwtxtList