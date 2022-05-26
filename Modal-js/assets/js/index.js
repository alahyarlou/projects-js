const closebtn = document.querySelectorAll('.closeBtn'),
    showModal = document.getElementById('showModal'),
    modalBox = document.getElementById('modalBox')



showModal.addEventListener('click', () => {
    if (modalBox.classList.contains('hidden')) {
        modalBox.classList.remove('hidden')
    } else {
        modalBox.classList.add('hidden')
    }
})
closebtn.forEach((item) => {
    item.addEventListener('click', () => {
        modalBox.classList.add('hidden')
    })
})
