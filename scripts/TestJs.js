const box = document.querySelector('div.box')
// console.log(box)
const btn = box.firstElementChild
const textBox = document.querySelector('#textBox')
let count = 0

btn.addEventListener('click', changeBackground)
btn.addEventListener('mouseover', logHover)

btn.onclick = logClick

textBox.addEventListener('keydown', logKey)

function logKey(event) {
    console.log(event.key)
}


function logClick() {
    console.log('click')
}
function changeBackground(e) {
    let sObj = JSON.stringify(e)
    console.log(sObj)
    localStorage.setItem('eventObj', sObj)
    count++
    console.log(e)
    box.style.backgroundColor = randomColor()


    const para = document.createElement('p')
    para.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, possimus!'
    e.target.parentNode.appendChild(para)

    if(count > 5) {
        e.target.removeEventListener('click', changeBackground)
    }
}

function randomColor() {
    return `rgb(${RandColor()},${RandColor()},${RandColor()})`
}

function RandColor() {
    return (Math.floor(Math.random() * 255) + 1 )
}

function logHover() {
    console.log('Hover')
}

const form = document.querySelector('form')
const fname = document.getElementById('fname')
document.querySelector('.container').addEventListener('click', (e) => {
    console.log('container is clicked')
}, { capture: true }) /*指定捕获模式而非默认的冒泡模式*/

form.addEventListener('submit', (e) => {
    if(fname.value === '') {
        e.preventDefault()
        fname.value = '不可为空'
    }
})

box.addEventListener('click', (e) => {
    let childE = JSON.parse(localStorage.getItem('eventObj'))
    console.log(childE)
    console.log(e)
    console.log(e === childE)
    console.log('Parent')

    e.stopPropagation() /*防止进一步传递*/
})

const region = document.querySelector('#region')
region.addEventListener('click', (e) => {
    const newChild = document.createElement('p')
    newChild.textContent = `${count}`
    e.currentTarget.appendChild(newChild)
    e.target.style.backgroundColor = randomColor()
    e.target.style.color = randomColor()
})