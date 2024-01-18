const apiOutput = document.querySelector('#api-output')
const canvas = document.querySelector('.myCanvas')

function Output(content) {
    apiOutput.textContent = content
}

function tryPosition() {
    navigator.geolocation.getCurrentPosition((position) => {
        Output(`海拔: ${position.coords.altitude}
    纬度: ${position.coords.longitude}
    经度: ${position.coords.latitude}`)
    }, (err) => {
        Output(err)
    })
    let latlng = new google.maps.LatLng(
        position.coords.latitude,
        position.coords.longitude,
    )

}


/* XHR 示例 */
function tryXHR() {
    const request = new XMLHttpRequest()
    try {
        /*设定请求*/
        request.open('GET',
            'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')
        request.responseType = 'json'

        /*监听请求事件*/
        request.addEventListener('load', () => {
           Output(request.response[0].name)
        })
        request.addEventListener('error', ()=> {
            Output('XHR Error.')
        })

        /*发送请求*/
        request.send()
    } catch (err) {
        Output(`XHR Error: ${request.status}`)
    }
}

/* Fetch 示例*/
function tryFetch() {
    async function query(data) {
        const huggingFaceAPI = "Bearer hf_fmivWx****YQYmvxMz******" /* 请替换该的 API */
        const response = await fetch(
            "https://api-inference.huggingface.co/models/Krxk/SRP-Business-Classification-GPT2",
            {
                headers: { Authorization: huggingFaceAPI },
                method: "POST",
                body: JSON.stringify(data),
            }
        );
        const result = await response.json();
        return result;
    }

    query({"inputs": "I like you. I love you"}).then((response) => {
        console.log(JSON.stringify(response));
        Output(JSON.stringify(response))
    });
}


// tryXHR()
// tryFetch()
// tryPosition()

function tryCanvas() {
    let width = canvas.width = 240
    let height = canvas.height = 150
    // console.log(`${width} ${height}`)
    /*获取 2d 上下文*/
    let ctx = canvas.getContext('2d')

    /*矩形*/
    ctx.fillStyle = "rgb(0,0,0)"
    ctx.fillRect(0,0, width, height)

    ctx.fillStyle='rgb(255,0,0)'
    ctx.fillRect(50,50,100,150)

    ctx.fillStyle = "rgba(255, 0, 255, 0.75)"
    ctx.fillRect(25, 100, 175, 50)

    /*描边*/
    ctx.strokeStyle = "rgb(255, 255, 255)";
    ctx.lineWidth = 5;
    ctx.strokeRect(25, 25, 175, 200);

    ctx.fillStyle = "rgb(0, 255, 0)";
    ctx.beginPath();
    ctx.moveTo(50, 50);
// 绘制路径
    ctx.fill();

}

tryCanvas()

function tryStorage() {
    /* cookie */
    document.cookie = "name=oeschger";
    document.cookie = "favorite_food=tripe";
    console.log(document.cookie)

    localStorage.setItem('krxk', '124')
    console.log(localStorage.getItem('krxk')) /* 永久存储在浏览器中 */
    localStorage.removeItem('krxk') /*删除*/
    console.log(localStorage.getItem('krxk')) /* null */

    /*对于更复杂的数据，可采用 IndexedDB */
}

tryStorage()

function trySWCache() {
    /* Service Worker */
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('scripts/serviceWorker.js')
            .then(() => {
                console.log("Service Worker Registered");
            })
    }
}

// trySWCache()