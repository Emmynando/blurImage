const bg = document.querySelector('.bg');
const loadText = document.querySelector('.loading');

let load = 0;
let initt = setInterval(countText, 30);

function countText(){
    load++;
    if(load > 99){
        clearInterval(initt);

    }
    loadText.innerText = `${load}%`;
    if(initt > 99) clearInterval();
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale  = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}