// let url = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
let url = "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"

const fetchPromise = fetch(url)

console.log(fetchPromise)

/*fetchPromise.then((response) => {
    // console.log(`receive response: ${response.status}`)
    const jsonPromise = response.json()
    jsonPromise.then((json) => {
        console.log(json[0].name)
    })
})*/

/* 由于 then() 也是返回 Promise对象，而该Promise 对象能指示 then() 中调用的异步函数的完成状态，
故下列代码可行，且不再有嵌套结构(即通知由then 自动完成)*/
fetchPromise.then((response) => {
    if(!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`)
    }
    return response.json() /* 此处 response.json() 返回的也是Promise 对象*/
}).then((json) => {
    console.log(json[0].name)
}).catch((err) => {
    console.error(`无法获取产品列表: ${err}`)
})

console.log('Request has be sent.')

/*合并使用多个 Promises */
const fetchPromise1 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
const fetchPromise2 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
);
const fetchPromise3 = fetch(
    // "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
    "bad-scheme://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
);

// Promise.all([fetchPromise1, fetchPromise2, fetchPromise3]) /*所有Promise 完成才then*/
Promise.any([fetchPromise1, fetchPromise2, fetchPromise3]) /*任何一个 Promise 完成 都能then*/
.then((responses) => {
    // for (const response of responses) { /*for of 迭代value； for in 迭代 key*/
    //     console.log(`${response.url} : ${response.status}`)
    // }
    console.log(`${responses.url} : ${responses.status}`)
}, () => {
    console.log('Rejected.')
})
.catch((error) => {
    console.error(`Failed: ${error}`)
})

/*异步函数*/
async function fetchProducts() { /*函数整体是异步的，另外异步函数的返回值总是 Promise */
    console.log('Async function is called.')
    try {
        const response = await fetch( /*await 可以拿到 Promise 最后的内容 */
            'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'
        )
        if (!response.ok) {
            throw new Error(`HTTP 请求错误：${response.status}`);
        }
        /*await 行将等待 Promise 完成*/
        const json = await response.json() /*此步必须等待完成，因为解析 json 也是异步的*/
        console.log(json[0].name)
    } catch (err) {
        console.error(`无法获取产品列表：${err}`);
    }
}

fetchProducts()

console.log(Promise)