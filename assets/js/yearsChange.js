function yearsChange() {
    const years = document.querySelectorAll("#years span");
    const wines = document.querySelector(".wines__items")

    years.forEach(item => {
        item.addEventListener("click", () => {
            wines.classList.add("active")
        })
    })
}
yearsChange()