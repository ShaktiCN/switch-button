const button = document.querySelector('.button');

button.addEventListener('mouseover', function() {
    console.log("hover")
    button.src = 'img/light_hover.png';
});

button.addEventListener('mouseout', function() {
    console.log("default")
    button.src = 'img/light_default.png';
});
