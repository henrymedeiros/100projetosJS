let container = document.querySelector("#container");

const toggleBtn = document.querySelector(".switch");

toggleBtn.addEventListener("click", () => {
    container.classList.toggle("dark");
    toggleBtn.classList.toggle("dark");
});