window.addEventListener("DOMContentLoaded", () => {

    function burger() {
        const burger = document.querySelector(".burger")
        const nav = document.querySelector(".navigation")

        burger.addEventListener("click", () => {
            burger.classList.toggle("open")
            nav.classList.toggle("active")
        })
    }
    burger()
})