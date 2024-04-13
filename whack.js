const holes = document.querySelectorAll(".hole");
const moles = document.querySelectorAll(".mole");
const scores = document.querySelector(".score");
let prevHole;
let difficulty = 100;
let playing = false;
let score;






function randomTime(minTime,maxTime){
    return Math.round(Math.random() * (maxTime-minTime) + minTime);
}

function randomHole(holes){
    const target = Math.floor(Math.random()*holes.length);
    const hole = holes[target];

    if(hole == prevHole){
        return randomHole(holes);
    }

    else{
        prevHole = hole;
        return hole;
    }
}

function pop(){
    const time = randomTime((5*difficulty),(10*difficulty));
    const hole = randomHole(holes);
    hole.classList.add('out');

    setTimeout(() => {
        hole.classList.remove('out');
        if(playing){
            pop();
        }
    }, time);
}

function start(){
    playing = true;
    score = 0;
    scores.textContent = score;
    pop();
    setTimeout(()=>{
        playing = false;
    },20000);
    
}

function hit(e){
    
    score++;
    this.parentNode.classList.remove('up');
    scores.textContent = score;
    
}

moles.forEach(mole=>mole.addEventListener('click',hit));