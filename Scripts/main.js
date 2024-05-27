// NAVIGATION JS
const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 200)
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

// Feedback Modal Form
document.addEventListener('DOMContentLoaded', () => {
    const bookingBtn = document.getElementById('bookingBtn');
    const bookingModal = document.getElementById('bookingModal');
    const closeModal = document.querySelector('.close');

    bookingBtn.addEventListener('click', () => {
        bookingModal.style.display = 'block';
    });

    closeModal.addEventListener('click', () => {
        bookingModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == bookingModal) {
            bookingModal.style.display = 'none';
        }
    });

    document.getElementById('bookingForm').addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Booking submitted!');
        bookingModal.style.display = 'none';
    });
});

// Handle form submission
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;

    if (name && surname && email && date) {
        const bookingInfo = {
            name: name,
            surname: surname,
            email: email,
            date: date
        };

        localStorage.setItem('booking', JSON.stringify(bookingInfo));
        alert(`Booking confirmed for ${name} ${surname} on ${date}. Confirmation sent to ${email}.`);
        modal.style.display = 'none';
        document.getElementById('bookingForm').reset();
    } else {
        alert('Please fill all fields.');
    }
});

// Faqs js
let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("faq-slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}