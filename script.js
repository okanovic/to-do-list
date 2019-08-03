const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');

eventListener();

function eventListener() {
    form.addEventListener('submit', addNewItem)
}

function addNewItem(e) {

    if (input.value === "") {
        alert('boş geçmeyin')
    }

    // create li
    const li = document.createElement('li') // Burada bir li tag'i oluşturuyoruz.
    li.className = 'list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(input.value)) // input'un değerini li'ye ekliyoruz.
    console.log(li);


    // create a
    const a = document.createElement('a');
    a.classList='delete-item float-right';
    a.setAttribute('href','#');
    a.innerHTML='<i class="fas fa-times"></i>';


    //add a to li
    li.appendChild(a);

    //add li to ul

    taskList.appendChild(li)

    // clear input

    input.value = '';

    e.preventDefault()
}