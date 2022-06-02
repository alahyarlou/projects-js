
document.querySelector('.left').addEventListener('click', () => {
    let random = Math.floor((Math.random() * 10) + 1)
    if (random % 2 == 0) {
        document.querySelector('.left').style.backgroundColor = "green"
        document.querySelector('.right').style.backgroundColor = 'red'
        document.querySelector('.text-result').innerHTML = 'You win!'
    } else {
        document.querySelector('.left').style.backgroundColor = 'red'
        document.querySelector('.right').style.backgroundColor = "green"
        document.querySelector('.text-result').innerHTML = 'You lose!'

    }
})
document.querySelector('.right').addEventListener('click', () => {
    let random = Math.floor((Math.random() * 10) + 1)
    if (random % 2 != 0) {
        document.querySelector('.right').style.backgroundColor = "green"
        document.querySelector('.left').style.backgroundColor = 'red'
        document.querySelector('.text-result').innerHTML = 'You win!'
    } else {
        document.querySelector('.right').style.backgroundColor = 'red'
        document.querySelector('.left').style.backgroundColor = "green"
        document.querySelector('.text-result').innerHTML = 'You lose!'
    }

})

document.querySelector('.reset').addEventListener('click', () => {
    document.querySelector('.right').style.backgroundColor = ''
    document.querySelector('.left').style.backgroundColor = ''
    document.querySelector('.text-result').innerHTML = 'Try it!'
})
