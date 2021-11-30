// Comprobación de soporte FETCH
// if(window.fetch!=undefined)console.log('FETCH OK')
//     else console.log('FETCH NOT WORKS')

const button = document.getElementById('button')

//RES = Response = Respuesta
button.addEventListener('click',()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.ok ? Promise.resolve(res):Promise.reject(res))
    .then(res=>res.json())
    .then(res=>{
        const list = document.getElementById('list')
        const fragment = document.createDocumentFragment()
        for (const userInfo of res){
            const listItem = document.createElement('LI')
            listItem.textContent = `${userInfo.id} - ${userInfo.name}`
            fragment.appendChild(listItem)
        }
        list.appendChild(fragment)
    })
})