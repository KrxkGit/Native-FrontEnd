console.log('generatePrime.js run.')

function generatePrimes(quota) {
    console.log('generating')
    function isPrime(n) {
        for (let c = 2; c <= Math.sqrt(n); ++c) {
            if (n % c === 0) {
                return false;
            }
        }
        return true;
    }

    const primes = [];
    const maximum = 1000000;

    while (primes.length < quota) {
        const candidate = Math.floor(Math.random() * (maximum + 1));
        if (isPrime(candidate)) {
            primes.push(candidate);
        }
    }

    postMessage(primes.length)
}

/* 监听发送到 worker 的消息 */
addEventListener("message", (message) => {
    if (message.data.command === 'generate') {
        generatePrimes(message.data.quota)
    }
})