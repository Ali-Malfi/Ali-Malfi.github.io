let home = document.querySelector("#home-link");

console.log("Home element:", home);

home.addEventListener('click', function() {
    console.log('home event');

    home.classList.toggle('red-color');
});
