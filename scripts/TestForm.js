const form = document.querySelector('#user-info')
const btnSubmit = form.querySelector('li:last-of-type')

form.addEventListener('submit', (e) => { /*监听表单事件*/
    e.preventDefault() /*关闭默认的提交跳转*/
    console.log('表单提交')
})