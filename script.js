const nume = 'Geoka'

document.querySelector('h1').innerText=nume

document.querySelector("h2").style.display = "none"

document.querySelector("button").addEventListener("click", () => {
    document.querySelector("h1").style.display = "none"
    document.querySelector("button").style.display = "none"
    document.querySelector("h2").style.display = "block"
})
