let myHeading = document.querySelector('h1')
let mySubHeading = document.createElement('h2')

function setUserName() {
    let userName = prompt('请输入您的名字: ')
    if(!userName) { /*为空*/
        setUserName()
    } else {
        localStorage.setItem('userName', userName) /*保存到 localStorage 中，无过期时间，需要手动删除*/
    }
}
setUserName()
mySubHeading.textContent = `欢迎您，${localStorage.getItem('userName')}`
localStorage.removeItem('userName') /*移除*/
console.log('存储值：' + localStorage.getItem('userName')) /*将返回 null */
// myHeading.appendChild(mySubHeading) /*在最后添加*/
myHeading.parentNode.insertBefore(mySubHeading, myHeading.nextSibling) /*在临近插入子标题*/

function AddListener() {
    let img1Obj = document.querySelector('#pic-1')
    console.log(typeof img1Obj)
    img1Obj.addEventListener('click', Img1Listener)

    document.querySelector('button').addEventListener('click', () => {
        let imgList = document.querySelectorAll('img')
        imgList.forEach((item) => {
            console.log(item.getAttribute('src')) /*输出图片路径*/
        })
        let tempSrc = imgList[0].getAttribute('src')
        let endPosition = imgList.length - 1
        imgList[0].setAttribute('src', imgList[endPosition].getAttribute('src'))
        imgList[endPosition].setAttribute('src', tempSrc)
        console.log('点击按钮')
        alert('点击按钮')
        clearInterval(TimerId) // 停止计时

    })
}

/**
 * 点击图片监听器，本注释格式为文档注释
 * 产生点击图片警告信息
 */
function Img1Listener() {

    // console.log(typeof imgList)

    // console.log('点击图片')
    alert("点击图片1")
}

AddListener()

let ol = document.querySelector('ol')
ol.addEventListener('click', function() {
    let new_item = document.createElement('li')
    new_item.textContent = prompt('请输入要添加的项：')
    ol.appendChild(new_item)
})

// 修改时间
function CurrentTime() {
    let dateTime = new Date()
    dateTime.toTimeString()
    timeEle.innerText = dateTime.toString()
    timeEle.dateTime = dateTime.toString()
}
let timeEle = document.querySelector('time')

CurrentTime()
let TimerId = setInterval(CurrentTime, 1000)

const audioReplayElem = document.querySelector('#RePlayAudio')
audioReplayElem.addEventListener('click', ()=> {
    document.querySelector('#audio-elem').load()
})