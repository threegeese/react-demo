/**
 * 一个 div 的生老病死
 */
let app = document.querySelector("#app")

// create
let div = document.createElement("div")

let state = 0
div.innerHTML = `
  <p>${state}</p>
  <button>+1</button>
  <button>die</button>
`

// mount
app.appendChild(div)

div.querySelector("button").onclick = ()=> {
  state += 1
  div.querySelector("p").innerText = `${state}`   // update
}

// destroy
div.querySelectorAll("button")[1].onclick = ()=> {
  div.querySelector("button").onclick = null
  div.querySelectorAll("button")[1].onclick = null
  div.remove()
  div = null
}