import {darkmode} from "./modules/darkmode.js"
import { menumode } from "./modules/menu.js"
import { transition } from "./modules/transition.js"
darkmode()
menumode()
transition()
window.addEventListener("DOMContentLoaded", ()=> {
    const container_title = window.document.getElementById("container-content-main-title")
    const container_parag = window.document.getElementById("container-content-main-text")
    container_title.classList.add("begin")
    container_parag.classList.add("begin")
})