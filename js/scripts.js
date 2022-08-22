// Eventos de los Inputs...
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const form = document.querySelector('.form');

const data = {
    name: '',
    email: '',
    message: ''
}

name.addEventListener('input', text);
email.addEventListener('input', text);
message.addEventListener('input', text);


form.addEventListener("submit", function(e) {
    e.preventDefault();

    const {email, message, name} = data;
    
    if(email === "" || name === "" || message === "") {
        showAlert('All field must required', 'error');
        return;
    }
    showAlert("Thank You Your Message");
});

function text(e) {
    data[e.target.id] = e.target.value;
}

function showAlert(message, error = null) {
    const alert = document.createElement("P");
    alert.textContent = message;
    if(error){
        alert.classList.add('error');
    } else {
        alert.classList.add('success');
    }
    form.appendChild(alert);
    setTimeout(() => {
        alert.remove();
    }, 3000)
}
