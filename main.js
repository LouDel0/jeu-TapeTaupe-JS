const stop = document.querySelector("#stop");
const box = document.querySelectorAll(".box");
const container = document.getElementById("container");

const colors = ['red', 'yellow', 'green', 'blue', 'orange']
let i = 0

// container.addEventListener('click', (e) => {
    //     e.target.style.backgroundColor = colors[i];
    //     i++;
    //     if (i==5) {
        //         i=0;
        //     }
        // });
        
        
        stop.addEventListener('click', () => {
            clearInterval(interval);
        });
        
let interval = setInterval(function () {
    const random_box = Math.floor(Math.random() * box.length);
    const box_colored = box[random_box];
    box_colored.style.backgroundColor = colors[i];
    i++;
    if (i==5) {
        i=0;
    }
}, 1000);


container.addEventListener('click',(e) => {
    console.log("success");
    const audio = new Audio();
    audio.src = 'victoire.mp3';
    audio.play();

    const cssObj = window.getComputedStyle(container, null);
    let bgColor = cssObj.getPropertyValue("background-color");
    document.getElementById("container").innerHTML = bgColor;
})