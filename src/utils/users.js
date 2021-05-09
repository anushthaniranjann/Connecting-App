const users = []

//addUser to track new user , removeUser, getUser, getUsersInRoom

const addUser = ({ id, username, room }) => {
    // Clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    // Validate the data
    if (!username || !room) {
        return {
            error: 'Username and room are required!'
        }
    }

    //Check for existing user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    //validate username
    if (existingUser) {
        return {
            error: 'Username is in use'
        }
    }
    //Store user
    const user = { id, username, room }
    users.push(user)
    return { user }
}

addUser({
    id: 11,
    username: 'shivangi',
    room: 'Delhi'
})

console.log(users)