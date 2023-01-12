const formElement = document.getElementById("register-form")
formElement.addEventListener("submit", e => {
    e.preventDefault()
    formElement.reset()
    setTimeout(function() {
        alert("We received your registration form, and we'll contact you by your email if you got hired.")
    }, 500)                
    
})