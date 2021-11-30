// console.log(newPost)
// console.log(JSON.stringify(newPost))

const button = document.getElementById('button')

button.addEventListener('click',()=>{
    const newPost = {
        ttile: 'A new post',
        body: 'Lorem ipsum dolor ist amet consectetur adipisicing elit.',
        userId: 1
    }
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify(newPost),
        headers:{
            "Content-type": "application/json"
        }
    })
        .then(res=>res.json())
        .then(data=>console.log(data))
})