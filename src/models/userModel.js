import { users } from "../db-memory/users.js";

const list = () => {
    return users
}

const create = (user) => {
    user.id = users[users.length-1].id + 1
    users.push(user)
    return users
}

const remove = (userId) => {
    users.map((user, index)=> {
        if(user.id === userId){
            users.splice(index, 1)
        }
    })
    return users
}

const edit = (userData) => {
    users.map((user)=>{
        if(user.id === userData.id){
            user.nome = userData.nome
            user.email = userData.email
        }
    })
    return users
}



export default { list, create, remove, edit }
