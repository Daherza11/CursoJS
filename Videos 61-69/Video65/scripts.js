const button = document.getElementById('button')

button.addEventListener('click',()=>{
    const geolocation = navigator.geolocation

    geolocation.getCurrentPosition(getPosition, error, options)
})

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximunAge: 0
}

const getPosition = (position) => {
    console.log(position)
}

const error = () => console.log(error)