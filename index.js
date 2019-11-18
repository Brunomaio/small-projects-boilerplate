let listItems = document.querySelectorAll(".list-item");
let todolist = document.getElementById("todoList")
let completedList = document.getElementById("completedlist")
let todoItem = document.createElement("li")
let formSubmit = document.querySelector(".form-submit")
let inputField = document.querySelector(".input-field")

inputField.addEventListener("onChange", (e) => console.log(e))

formSubmit.addEventListener("click", (e) => {
	e.preventDefault()
	console.log(inputField)
})

const addItem = () => {

}

let items = [{
	"name": "",
	"completed": 1
}
]


for(let item of listItems) {
	item.addEventListener("click", e => {
		e.target.classList.toggle("completed");
		console.log(e)
		items.forEach(item => {
			if (e.target.outerText === item.name) {
				item.completed = !item.completed
			}
		})
	})
}

