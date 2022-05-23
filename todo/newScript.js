const input_data = document.querySelector(".data")
const btn_create = document.querySelector(".btn-create")


const parent = document.querySelector(".parent")

// setting object data
// obj = {id: , text: }
let data_list = []

btn_create.addEventListener('click', () => {
    const data_obj = {
        id: data_list.length,
        text: input_data.value,
    }
    data_list.push(data_obj)
    clearElement()
    render()

})

function createChild(id, text) {
    const child = document.createElement('div')
    const data_text = document.createElement('h3')
    const btn_delete = document.createElement('button')

    // setting class="child" and id="0" dynamic
    child.setAttribute("id", id)
    child.className = "child"
    data_text.innerText = text

    // adding delete btn function
    btn_delete.classList.add("btn-delete")
    btn_delete.innerText = "Delete"
    btn_delete.addEventListener('click', () => {

        console.log(child.getAttribute("id"))
        const child_id = parseInt(child.getAttribute("id"))
        // reassign new data
        // yesterday i explain it to you (like deletion)
        data_list = data_list.filter(n => n.id !== child_id)

        // remove old nodes(child element)
        clearElement()
        // Re render
        render()
    })

    child.appendChild(data_text)
    child.appendChild(btn_delete)
    parent.appendChild(child)
}
// rendering all child element in data_list variable
function render() {
    // reorder (the feature you want to add)
    for (let i = 0; i < data_list.length; i++) {
        data_list[i].id = i
    }
    data_list.map(box => createChild(box.id, box.text))
    console.log(data_list)
}
// clear old child element
function clearElement() {
    const children = document.querySelectorAll(".child")
    children.forEach(child => child.remove())
}


// note: everytime we delete it will render new element again