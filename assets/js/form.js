const submit = document.getElementById("submit")
const vorname = document.getElementById("vorname")
const email = document.getElementById("email")

submit.disabled = true

const validate = () => {
    if (vorname.value == "" || email.value == "") {
        submit.disabled = true
    } else {
        submit.disabled = false
    }
}

vorname.addEventListener("keyup", () => {
  validate()
})
email.addEventListener("keyup", (event) => {
    validate()
})


submit.addEventListener("click", async (event) => {
    event.preventDefault()
    const result = await databaseClient.insertInto("users", ["vorname", "email"], [vorname.value, email.value])
    if (result.error) {
        alert("Datenbank Fehler: " + JSON.stringify(result.error, null, 2))
    }
    else {
        // Weiterleitung auf die Game Page  
        location.href = "./game.html"
    }

})