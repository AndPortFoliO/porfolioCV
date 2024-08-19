const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
let letters = document.querySelectorAll('span');
function changeColors() {
    letters.forEach((letter, index) => {
        const colorIndex = index % colors.length;
        letter.style.color = colors[colorIndex];
    });
}

// Call the function every second
setInterval(changeColors, 1000);

