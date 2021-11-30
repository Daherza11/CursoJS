// Un callback es una función que se ejecuta a través de otra función,
// no son asíncronos

// const getUser = (id,cb)=>{
//     const user = {
//         name: 'Daniel',
//         id:id
//     }
//     if(id==2)cb('User not exist')
//     else cb(null,user)
// }

// getUser(1,(err,user)=>{
//     if(err) return console.log(err)
//     console.log(`User name is ${user.name}`);
// })

const users = [{id:1,name: 'Daniel'},{id:2,name:'Laura'},{id:3,name:'Carlos'}]

const emails = [{id:1,email:'daherza@gmail.com'},{id:2,email:'laura@gmail.com'},]

const getUser=(id,cb)=>{
    const user = users.find(user=>user.id==id)
    if(!user) cb(`Doesn't exist an user with id ${id}`)
    else cb(null,user)
}

const getEmail=(user,cb)=>{
    const email = emails.find(email=>email.id==user.id)
    if(!email) cb(`${user.name} hasn't email`)
    else cb(null,{
        id:user.id,
        name: user.name,
        email: email.email
    })
}

getUser(2,(err,user)=>{
    if(err) return console.log(err)
    getEmail(user,(err,res)=>{
        if(err) return console.log(err)
        console.log(res)
    })
})