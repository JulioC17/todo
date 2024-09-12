const input = document.querySelector("#input")
const addBtn = document.querySelector("#addBtn")
const body = document.querySelector("body")

addBtn.addEventListener("click", () => {
    
    const ul = document.querySelector("#list")
    const li = document.createElement("li")
    const p = document.createElement("p")
    p.innerHTML = input.value
    const removeBtn = document.createElement("button")
    removeBtn.innerText = "❌"
    
    ul.appendChild(li)
    li.appendChild(p)
    li.appendChild(removeBtn)

    input.value = ""

    removeBtn.addEventListener("click", () => {
        li.remove()
    })

    p.addEventListener("click", () => {
        p.classList.toggle("completed")
    })
})











