const permissions = document.getElementById('permissions')

permissions.addEventListener('click', () => {
    if (Notification.permission !== 'granted') {
        getPermissions()
    } else {
        notify()
    }
})

// const getPermissions = () => {
//     Notification.requestPermission()
//         .then(res => console.log(res))
//         .catch(err => console.log(err))
// }

function getPermissions () {
    Notification.requestPermission()
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

// const notify = () => {
//     const options = {
//         body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
//         icon: 'world.png',
//         data: 'Extra data',
//         tag: 'notification demo'
//     }
//     const notification = new Notification('Hello World', options)

//     notification.addEventListener('close', () => console.log('CLOSE'))
//     notification.addEventListener('show', () => console.log('SHOW'))

//     console.log(notification)
// }

function notify () {
    const options = {
        body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        icon: 'world.png',
        data: 'Extra data',
        tag: 'notification demo'
    }
    const notification = new Notification('Hello World', options)

    notification.addEventListener('close', () => console.log('CLOSE'))
    notification.addEventListener('show', () => console.log('SHOW'))

    console.log(notification)
}
