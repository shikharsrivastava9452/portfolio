// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');
// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if (top >= offset && top < offset + height) {
//             navLinks.forEach(link => {
//                 link.classList.remove('active');
//             });
//             document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
//         }
//     });
// };

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// };
// Wait for the DOM content to be loaded
// Wait for the DOM content to be loadede
document.addEventListener('DOMContentLoadd', function () {

    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    // Add an event listener for scroll events
    window.addEventListener('scroll', function () {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            }
        });
    });

    // Add an event listener for clicks on the menu icon
    menuIcon.addEventListener('click', function () {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    });

});
