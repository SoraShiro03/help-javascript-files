const data_input = document.querySelector(".data")
const btn_create = document.querySelector(".btn-create")
const parent = document.querySelector(".parent")

let all_boxes = []

function create_child_box(id, data) {
    const child_box = document.createElement('div')
    child_box.setAttribute("id", id)
    child_box.classList.add("child")


    const delete_btn = document.createElement('h3')
    delete_btn.classList.add("btn-delete")
    delete_btn.innerText = "Delete"

    const text_div = document.createElement("h3")
    text_div.classList.add("just-text")
    text_div.innerText = data

    child_box.appendChild(text_div)
    child_box.appendChild(delete_btn)


    parent.appendChild(child_box)


    console.log("clicked workd")
}

function createBox() {
    all_boxes.push({
        id: all_boxes.length,
        data: data_input.value
    })
}

function reRender() {
    const children = document.querySelectorAll(".child")
    children.forEach(child => child.remove())
    all_boxes.map(box => (create_child_box(box.id, box.data)))
}
function render() {


    const children = document.querySelectorAll(".child")
    children.forEach(child => child.remove())
    all_boxes.map(box => (create_child_box(box.id, box.data)))

    let delete_btn = document.querySelectorAll(".btn-delete")
    delete_btn.forEach((btn) => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.parentElement.getAttribute("id"))
            console.log("dele", id)
            all_boxes = all_boxes.filter(box => box.id !== id)
            reRender()
        })
    })
    // console.log("render")
}


console.log("all box", all_boxes)
btn_create.addEventListener('click', () => {
    createBox()

    render()
})


function deleteElement(id) {
    children.forEach(child => {
        if (child.getAttribute("id", id) === id) {

            child.remove()
        }
    })
}