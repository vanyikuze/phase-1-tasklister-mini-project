
  document.addEventListener("DOMContentLoaded", () => {
    // your code here
    let form = document.querySelector("form")
    form.addEventListener("submit", (e) =>{
      e.preventDefault()
      activeTodo(e.target.new-task-description.value);
      form.reset()})
  });
  
  function activeTodo(todo){
    let li = document.createElement("li")
    let btn = document.createElement("button")
    btn.addEventListener("click", deleteTodo)
    btn.textContent = "x"
    li.textContent = `${todo}`
    li.appendChild(btn)
    console.log(li)
    document.querySelector("#tasks").appendChild(li)
  }
  function deleteTodo(e){
    e.target.parentNode.remove()
  }
