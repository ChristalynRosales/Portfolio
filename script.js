function hamburg() {
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

function cancel() {
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}

const texts = [
    "WEB DEVELOPER",
    "WEB DESIGNER"
]

let speed =100;
const textElements = document.querySelector(".typewriter-text")

let textIndex = 0;
let characterIndex = 0;

function typeWriter() {
    if(characterIndex <texts[textIndex].length){
     textElements.innerHTML += texts[textIndex].charAt(characterIndex)
     characterIndex ++;
     setTimeout(typeWriter,speed);
    }else {
        setTimeout(eraseText, 1000)
    }
}

function eraseText() {
    if(textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0,-1)
        setTimeout(eraseText,50)
    }else {
        textIndex = (textIndex + 1 ) % texts.length;
        characterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}

window.onload = typeWriter

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const responseMessageDiv = document.getElementById('response-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Create a FormData object from the form
        const formData = new FormData(form);

        // Send form data using fetch
        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                // Handle success
                displayMessage('Thank you for your message! We will get back to you soon.');
                form.reset(); // Optionally reset the form
            } else {
                // Handle error
                displayMessage('Oops! Something went wrong. Please try again.');
            }
        }).catch(error => {
            // Handle fetch error
            displayMessage('Oops! Something went wrong. Please try again.');
        });
    });

    function displayMessage(message) {
        responseMessageDiv.textContent = message;
        responseMessageDiv.style.display = 'block';
    }

    document.querySelector(".hamburg").addEventListener("click", hamburg);
    document.querySelector(".cancel").addEventListener("click", cancel);
});