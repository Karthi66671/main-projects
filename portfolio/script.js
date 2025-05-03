const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");
menu.onclick = ()=>{
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
}
const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = form.querySelector("input[name='name']").value.trim();
    const email = form.querySelector("input[name='email']").value.trim();
    const message = form.querySelector("input[name='message']").value.trim();

    if (name && email && message) {
        alert("Thanks for contacting me, " + name + "!");
        form.reset();
    } else {
        alert("Please fill out all fields.");
    }
});
