let dot = document.querySelector('.arrow')
let dot2 = document.querySelector('.arrow2')
let line = window.getComputedStyle(dot, "::after");
let range = document.getElementById("points")
dot.style.setProperty('--bg-color', 'red');
let power = 0
let btn = document.querySelector('#fire')
let decision = document.querySelector('.game-over')
let decisionText = document.querySelector('.text')
let chances = document.querySelector('.chances')
let lefts = 2;
let count = 0;

function radomBetween(min,max) {
    return Math.round(Math.random() * (max - min)) + min;
 }
 


dot.style.setProperty('--width', `${range.value}px`);
dot2.style.display='block'
dot2.style.left = `${ radomBetween(50,80)}%`

let position = Math.trunc(dot2.getBoundingClientRect().left)


range.addEventListener('input', function () {

    dot.style.setProperty('--width', `${range.value}px`);
})

btn.addEventListener('click', function () {
    
    lefts--
    chances.textContent = lefts;
    count++
    dot.classList.add('move')
    dot.style.setProperty('--distance', `${range.value}px`);
    dot.style.setProperty('--display', `none`);
   
    setTimeout(function () {
        if (Math.trunc(dot.getBoundingClientRect().left > 235)){
            if (Math.trunc(dot.getBoundingClientRect().left) >= (position - 10) && Math.trunc(dot.getBoundingClientRect().left) <= (position + 10)) {
                
                
                decision.style.display = "block";
                decisionText.textContent='Congragulation You Won 🎁'
                
            }else if(count === 2){
                decision.style.display="block"
            }
        
        } 
},400)

})

