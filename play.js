
let started = false;
const startFunction = document.querySelector(".start");
console.log(startFunction);
startFunction.addEventListener("click", () => {

    const x = Math.floor(Math.random() * 100) + 1;
    console.log(x);

    const y = Math.floor(Math.random() * 100) + 1;
    console.log(y);
    //Purple Rarities
    if (x <= 20) {
        if (y <= 33) {
            document.getElementById('imgRarities').src = `./img/purple.jpg`;
            console.log('purple 1')
        } else if (y <= 66) {
            document.getElementById('imgRarities').src = `./img/purple2.jpg`;
            console.log('purple 2')
        } else {
            document.getElementById('imgRarities').src = `./img/purple3.jpg`;
            console.log('purple 3')
        }
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





