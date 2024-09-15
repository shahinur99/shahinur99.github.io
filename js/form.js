document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#form")

    form.addEventListener("submit", (event) => {
        event.preventDefault()
        const formData = new FormData(form)
        const obj = Object.fromEntries(formData)
        const json = JSON.stringify(obj)

        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: json,
            mode: 'cors'})
            .then(response => response.json)
            .then(data => console.log(data))
            .catch(error => {
                console.log(error)
            })
    })
})