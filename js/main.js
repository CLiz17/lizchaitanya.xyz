const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".nav-menu");

function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");

        // add menu icon
        toggle.innerHTML = `<i class="fas fa-bars">`;
    }
    else {
        menu.classList.add("active");

        // add x (close menu) icon
        toggle.innerHTML = `<i class="fas fa-times"></i>`;
    }
}

toggle.addEventListener("click", toggleMenu, false);

// function sendMail() {
//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "email",
//         Password : "password",
//         To : 'email',
//         From : documment.getElementById('email').value,
//         Subject : "Query from portfolio",
//         Body : document.getElementById('message').value,
//     }).then(
//     message => alert(message)
//     );
// }