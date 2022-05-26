"use strict";

const textTodoContent = document.getElementById('textTodoContent'),
    addTodoBtn = document.getElementById('addTodo'),
    removeBtn = document.querySelectorAll('.RemoveBtn'),
    donBtn = document.querySelectorAll('#doneBtn')

// add Elemnt with click Event
addTodoBtn.addEventListener('click', () => {
    CreateComponentTodo();
    textTodoContent.value = ''
    textTodoContent.focus()
});
// add Element with Enter key
textTodoContent.addEventListener('keypress', () => {
    if (event.key === "Enter") {
        CreateComponentTodo();
        textTodoContent.value = ''
        textTodoContent.focus()
    }
})

donBtn.forEach(addEventDone)
removeBtn.forEach(addEventRemove)

// create Element function
function CreateComponentTodo() {
    let divComponent = document.createElement('div')
    divComponent.classList.add('flex', 'mb-4', 'items-center', 'bg-gray-50', 'px-4', 'py-2', 'rounded-md')

    let p = document.createElement('p')
    p.classList.add('w-full', 'text-gray-700')
    p.innerHTML = textTodoContent.value
    divComponent.appendChild(p)

    let donBtn = document.createElement('button')
    let RemoveBtn = document.createElement('button')

    addEventRemove(RemoveBtn);
    addEventDone(donBtn)
    donBtn.classList.add('flex-no-shrink', 'p-2', 'ml-4', 'mr-2', 'border-2', 'rounded', 'hover:text-white', 'text-green-700', 'border-green-700', 'hover:bg-green-700')
    donBtn.innerHTML = "Done"
    donBtn.id = "doneBtn"
    divComponent.appendChild(donBtn)

    RemoveBtn.classList.add('flex-no-shrink', 'RemoveBtn', 'p-2', 'ml-2', 'border-2', 'rounded', 'text-red-700', 'border-red-700', 'hover:text-white', 'hover:bg-red-700')
    RemoveBtn.innerHTML = "Remove"
    divComponent.appendChild(RemoveBtn)

    document.getElementById('contentBox').appendChild(divComponent)
}
// delete Element function
function addEventRemove(e) {
    e.addEventListener('click', () => {
        e.parentElement.remove();
    })
}
// Done button Event function
function addEventDone(e) {
    e.addEventListener('click', (e) => {
        let Text = e.target.previousElementSibling
        if (Text.classList.contains('text-gray-700') && e.target.innerHTML == "Done") {
            Text.classList.remove('text-gray-700');
            Text.classList.add('text-green-500', 'line-through');
            e.target.classList.add('text-gray-500', 'border-grey-500', 'hover:bg-gray-500')
            e.target.classList.remove('text-green-700', 'border-green-700', 'hover:bg-green-700')
            e.target.innerHTML = "Not Done";
        } else {
            Text.classList.remove('text-green-500', 'line-through')
            Text.classList.add('text-gray-700')
            e.target.classList.remove('text-gray-500', 'border-grey-500', 'hover:bg-gray-500')
            e.target.classList.add('text-green-700', 'border-green-700', 'hover:bg-green-700')
            e.target.innerHTML = "Done"
        }
    })
}
