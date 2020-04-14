const baseUrl = 'http://twtxt-api-prototype.herokuapp.com/'
const usersUrl = baseUrl + 'users'

const get = (url) => 
    fetch(url)
    .then(resp => resp.json())

const getUsers = () => get(usersUrl)

const getUser = (user) => get(usersUrl + user)

export default { getUsers, getUser}
