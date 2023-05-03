const displayEl = document.querySelector(".displayNote")
const svNote = document.querySelector("#sv")
const fiNote = document.querySelector("#fi")

let svNotes = []
let fiNotes = []



function svCLick() {
  localStorage.setItem("lang", "sv")
  location.reload()
}

function fiCLick() {
  localStorage.setItem("lang", "fi")
  location.reload()
}

function compare() {
  if (localStorage.getItem('lang') == "fi") {
    fiNotes.push(fiNote.value)
    displayEl.innerText = fiNotes
  } else {
    svNotes.push(svNote.value)
    displayEl.innerText = svNotes
  }
}

