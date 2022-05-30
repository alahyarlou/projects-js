document.querySelectorAll('.text-input').forEach((e) => {
    e.addEventListener('blur', (event) => {
        if (event.target.value != '') {
            event.target.nextElementSibling.classList.add('filled')
        } else {
            event.target.nextElementSibling.classList.remove('filled')
        }
    })
})