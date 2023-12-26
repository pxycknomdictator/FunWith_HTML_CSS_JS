const runScript = document.querySelector("#submit");

runScript.addEventListener("click", () => {
    let name = document.querySelector("#name").value;
    let color = document.querySelector("#color").value;
    let result = document.querySelector("#result"); // Styling issue here?

    result.textContent = `${name}`;
    result.style.color =  `${color}`;
    result.style.transition = `all .9s ease-in-out`;
});