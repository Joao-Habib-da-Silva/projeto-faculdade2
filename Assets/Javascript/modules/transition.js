export function transition() {
    window.addEventListener("DOMContentLoaded", () => {
        const header = document.querySelector("header")
        if (header) {
            header.classList.add("begin")
        }
    })
}