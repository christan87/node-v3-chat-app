const users = [];

const addUser = ({id, username, room})=>{
    //Clean The Data
    username = username.trim().toLowerCase();
    room = room.trim().toLowerCase();

    //Validate The Data
    if(!username || !room){
        return {
            error : "Username and Room required!"
        }
    }

    //Check for existing users
    const existingUser = users.find((user)=>{
        return user.room === room && user.username === username;
    });

    //Vaidate Username
    if(existingUser){
        return {
            error : "Username is in use!"
        }
    }

    //Store User
    const user = {id, username, room};
    users.push(user);
    return {user}; 
}

const getUser = (id) => {
    return users.find((user)=>{
        return user.id === id;
    });

}

const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase();
    return users.filter((user)=>{
        return user.room === room;
    });
}

const removeUser = (id)=>{
    const index = users.findIndex((user)=>{
        return user.id === id;
    });

    if(index !== -1){
        return users.splice(index, 1)[0];
    }
}

module.exports = {
    addUser,
    getUser,
    getUsersInRoom,
    removeUser
}