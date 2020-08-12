const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

// All functions

//Function to show error
function showError(input, massage) {
    const formControl = input.parentElement
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.innerText = massage
}

// Function to show success
function showSuccess(input) {
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}

// This is an event listener for the form on submit
form.addEventListener('submit', function(e) {
    e.preventDefault()
    if (username.value === '') {
        showError(username, 'Username is required')
    } else {
        showSuccess(username)
    }
    if (email.value === '') {
        showError(email, 'email is required')
    } else {
        showSuccess(email)
    }
    if (password.value === '') {
        showError(password, 'password is required')
    } else {
        showSuccess(password)
    }
    if (password2.value === '') {
        showError(password2, 'confirming password is required')
    } else {
        showSuccess(password2)
    }
})