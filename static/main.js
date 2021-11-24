document.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll('.mobile-menu > div > *').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('#mobile-menu').classList.add('d-none');
        })
    }) 
    document.querySelector('#nav-logo').addEventListener('click', ()=> {
        document.querySelector('#mobile-menu').classList.add('d-none');
    })
});


function route(destination) {

    switch(destination) {
        case "home":
            home();
            break;
        case "about":
            about();
            break;
        case "portfolio":
            portfolio();
            break;
        case "contact":
            contact();
            break;
    }
}

function home() {

    document.querySelector('#about').classList.add('d-none');
    document.querySelector('#portfolio').classList.add('d-none');
    document.querySelector('#contact').classList.add('d-none');
    document.querySelector('#home').classList.remove('d-none');
    scrollToTop()

    document.querySelector('#about-nav').classList.add('d-none');
    document.querySelector('#portfolio-nav').classList.add('d-none');
    document.querySelector('#contact-nav').classList.add('d-none');
    document.querySelector('#home-nav').classList.remove('d-none');
}

function about() {

    document.querySelector('#home').classList.add('d-none');
    document.querySelector('#portfolio').classList.add('d-none');
    document.querySelector('#contact').classList.add('d-none');
    document.querySelector('#about').classList.remove('d-none');
    scrollToTop()

    document.querySelector('#home-nav').classList.add('d-none');
    document.querySelector('#portfolio-nav').classList.add('d-none');
    document.querySelector('#contact-nav').classList.add('d-none');
    document.querySelector('#about-nav').classList.remove('d-none');
}

function portfolio() {

    document.querySelector('#home').classList.add('d-none');
    document.querySelector('#about').classList.add('d-none');
    document.querySelector('#contact').classList.add('d-none');
    document.querySelector('#portfolio').classList.remove('d-none');
    scrollToTop()

    document.querySelector('#home-nav').classList.add('d-none');
    document.querySelector('#about-nav').classList.add('d-none');
    document.querySelector('#contact-nav').classList.add('d-none');
    document.querySelector('#portfolio-nav').classList.remove('d-none');
}

function contact() {

    document.querySelector('#home').classList.add('d-none');
    document.querySelector('#about').classList.add('d-none');
    document.querySelector('#portfolio').classList.add('d-none');
    document.querySelector('#contact').classList.remove('d-none');
    scrollToTop()

    document.querySelector('#home-nav').classList.add('d-none');
    document.querySelector('#about-nav').classList.add('d-none');
    document.querySelector('#portfolio-nav').classList.add('d-none');
    document.querySelector('#contact-nav').classList.remove('d-none');
}


function sendMessage() {
    var email = document.createElement('a');
    var content = document.querySelector('#contact-message').value;
    email.href = `mailto:tanweikang02@gmail.com?body=${content}`;
    email.click();
}

function toggleMobileMenu() {
    var menuIsClosed = document.querySelector('#mobile-menu').classList.contains('d-none');

    if (menuIsClosed === true) {
        document.querySelector('#mobile-menu').classList.remove('d-none');
    } else {
        document.querySelector('#mobile-menu').classList.add('d-none');
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }