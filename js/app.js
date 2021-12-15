// Function to send email when click the button

const form = document.querySelector('.contact_form');

function sendMsg(e){
    e.preventDefault();

      const name = document.querySelector('.name'),
            email = document.querySelector('.email'),
            subject = document.querySelector('.subject'),
            msg = document.querySelector('.msg');

    // Function to send a message....

    Email.send({
        SecureToken : "14021f81-9a43-44dd-8034-03086b2571e8",
        To : 'fombifavour@gmail.com',
        From : email.value,
        Subject : subject.value,
        Body : msg.value
    }).then(
    message => alert(message)
    );
}

// Adding event listener submit
form.addEventListener('submit', sendMsg);