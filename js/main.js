let links = document.querySelectorAll(".nav-link");


for (let i = 0; i < links.length; i++) {
    const link = links[i];
    link.addEventListener('click', function() {
        console.log('home event');
    
        addAndRemoveClass(link);

    });
}
function addAndRemoveClass(linkToAdd) {
    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        link.classList.remove('red-color');
        

    }
    linkToAdd.classList.add('red-color');

}

