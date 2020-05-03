import React, { useState, useEffect } from 'react'
import API from '../API'

const TwtxtList = ({ followedUsers }) => {

    const [twtxts, setTwtxts] = useState([])
    

    const getIndividualTwtxt = (usersTwtxt) => {
        const allTwtxts = twtxts.concat(usersTwtxt)
        console.log(allTwtxts)
        setTwtxts([allTwtxts]);
    }

    const getUserTwtxts = (username) => {
        API.getUser(username)
        .then(data => {
            const userAllTwtxts = data.twtxts.map(twtxt => {
                twtxt.username = data.user
                return twtxt
            })
            console.log(userAllTwtxts)
            // getIndividualTwtxt(userAllTwtxts)
        }) 
    }

    useEffect(() => {
        followedUsers.map(user => getUserTwtxts(user.username))
    }, [followedUsers.length])

    return(
        <div>
            {/* {twtxts.map(twtxt => <p>{twtxt.text}</p>)}    */}
        </div>
    )
   
};

export default TwtxtList