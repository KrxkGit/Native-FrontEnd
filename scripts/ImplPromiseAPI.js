const btnSetAlarm = document.getElementById('set-alarm')
const outAlarm = document.getElementById('alarm-output')
const Name = document.querySelector('#Name')
const Delay = document.querySelector('#Delay')

function setAlarm() {
    window.setTimeout(() => {
        outAlarm.textContent = 'Wake up!'
    }, 5000)
}

// btnSetAlarm.onclick = setAlarm
// btnSetAlarm.addEventListener('click', setAlarm)

function alarm(person, delay) {
    return new Promise((resolve, reject) => {
        if (delay < 0) {
            throw new Error(`Alarm delay must not be negative`) /* 将被 catch 捕获*/
        } else if (delay > 10 * 1000) {
            reject(`${delay / 1000} is too long. 10s is limited.`) /* 该参数 将往 Promise 链传递*/
        }
        window.setTimeout(() => {
            resolve(`Wake up,${person}`) /*该参数 将往 Promise 链 传递*/
        }, delay)
    })
}


/*btnSetAlarm.addEventListener('click', ()=> {
    alarm(Name.value, Delay.value)
        .then((message) => {
            outAlarm.textContent = message
        })
        .catch((err) => {
            outAlarm.textContent = `Couldn't set alarm: ${err}`
        })
})*/

btnSetAlarm.addEventListener('click', async ()=> {
    try {
        outAlarm.textContent = await alarm(Name.value, Delay.value)
    } catch (err) {
        outAlarm.textContent = `Couldn't set alarm: ${err}`
    } finally {
        console.log('Finally')
    }
})