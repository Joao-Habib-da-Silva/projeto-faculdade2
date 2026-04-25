export function menumode() {
    const menu = window.document.getElementById("menu-button")
    const menu_items = window.document.getElementById("menu")
    const body = window.document.documentElement
    menu.addEventListener("click", ()=> {
        menu_items.classList.toggle("open")
        body.classList.toggle("open")
    })
}