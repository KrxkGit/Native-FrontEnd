/* getElementBy 函数获取的是动态的，会随着 dom 而更新 */
const ul = document.getElementById('ul-el')
const list = ul.getElementsByTagName('li')

console.log(list.length)

for (let i = 0; i < list.length ; i++) { /*list.length 伴随 dom 而更新*/
    const newLi = document.createElement('li')
    newLi.textContent = 'Lorem ipsum dolor sit amet.'
    ul.appendChild(newLi)

    if (i > 10) {
        break
    }
}

/* querySelector 函数是静态的，查询后不伴随 dom 而更新*/
const list2 = document.querySelectorAll('#ul-el li') /*规则与CSS相同*/
console.log(list2.length)

for(let i = 0; i< list2.length; i++) {
    const newLi = document.createElement('li')
    newLi.textContent = 'Lorem ipsum dolor.'
    ul.appendChild(newLi)
}