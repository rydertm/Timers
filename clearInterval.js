// clearInterval irá cancelular um setInterval registrado
const timeOut = 100
const checking = () => console.log('checking!')

let interval = setInterval(checking, timeOut)

setTimeout( () => clearInterval(interval), 3000)
// no terceiro log o checking! ira parar pois cancelamos o setInterval