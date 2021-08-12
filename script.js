
var started = false;
const startFunction = document.querySelector(".start");

startFunction.addEventListener("click", () => {

    var x = Math.floor(Math.random() * 100) + 1;
    console.log(x);
    //Purple Rarities
    if (x <= 20) {
        document.getElementById('imgRarities').src = `./img/purple.jpg`
        console.log('purple')
    } else if (x <= 40) {
        document.getElementById('imgRarities').src = `./img/gold.jpg`
        console.log('gold')
    } else if (x <= 60) {
        document.getElementById('imgRarities').src = `./img/green.jpg`
        console.log('green')

    } else if (x <= 80) {
        document.getElementById('imgRarities').src = `./img/blue.jpg`
        console.log('blue')

    } else {
        document.getElementById('imgRarities').src = `./img/red.jpg`
        console.log('blue')

    }


});





