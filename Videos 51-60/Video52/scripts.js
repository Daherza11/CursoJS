const fileInput = document.getElementById('file')
const img = document.getElementById('img')
const text = document.getElementById('text')
const images = document.getElementById('images')


// PARA TEXTO
// fileInput.addEventListener('change', (e)=>{
//     const file = e.target.files[0]
//     const fileReader = new FileReader()
//     fileReader.readAsText(file)
//     fileReader.addEventListener('load',(e)=>{
//         text.textContent = e.target.result
//     })
// })


//Carga simple de imagen
// fileInput.addEventListener('change', (e)=>{
//     const file = e.target.files[0]
//     const fileReader = new FileReader()
//     fileReader.readAsDataURL(file)
//     fileReader.addEventListener('load',(e)=>{
//         img.setAttribute('src', e.target.result)
//     })
// })

//Con carga múltiple de imágenes
fileInput.addEventListener('change', (e)=>{
    const files = e.target.files
    const fragment = document.createDocumentFragment()
    for(const file of files){
        const fileReader = new FileReader()
        const img = document.createElement('IMG')
        fileReader.readAsDataURL(file)
        fileReader.addEventListener('load',(e)=>{
            img.setAttribute('src', e.target.result)
        })
        fragment.appendChild(img)
    }
    images.appendChild(fragment)
})