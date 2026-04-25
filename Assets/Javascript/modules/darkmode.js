export function darkmode() {
    const buttons = document.querySelectorAll(".header-dark-and-light-mode");
    const selector = document.getElementById("header-button-select");
    const select = document.getElementById("header-button-selector");
    const body = document.documentElement;
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        body.classList.add("dark");
        selector?.classList.add("dark");
        select?.classList.add("dark");
    } else {
        body.classList.remove("dark");
        selector?.classList.remove("dark");
        select?.classList.remove("dark");
    }
    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            body.classList.toggle("dark");
            const isDark = body.classList.contains("dark");
            if (isDark) {
                localStorage.setItem("theme", "dark");
                selector?.classList.add("dark");
                select?.classList.add("dark")
            } else {
                localStorage.setItem("theme", "light");
                selector?.classList.remove("dark");
                select?.classList.remove("dark");
            }
        });
    });
}