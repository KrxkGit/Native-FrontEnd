const quotaInput = document.querySelector('#quota')
const btnGenPrime = document.querySelector('#gen-prime')
const outputBox = document.querySelector('#genPrime-output')

/*加载脚本(基于本地服务器)，注意 Worker 的加载路径是 不基于本js的，需要从 填写服务器文件路径*/
const worker = new Worker('scripts/generatePrime.js')

/*获取 worker 发送回主线程的消息 */
worker.addEventListener('message', (message) => {
    outputBox.textContent = `Finished generating ${message.data} primes!`
})

btnGenPrime.addEventListener('click', () => {
    const quota = quotaInput.value
    console.log(quota)
    worker.postMessage({ /* 一个 JSON 对象传递给 worker */
        command: "generate",
        quota: quota,
    })
})


