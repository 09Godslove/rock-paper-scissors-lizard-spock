const rulesEl = document.querySelector(".rules-box")
const step1El = document.querySelector(".step1")
const step2El = document.querySelector(".step2")
const imageEl = document.querySelector(".image")
const cancelEl = document.querySelector(".cacl-btn")
const rules2 = document.querySelector(".box")
const paperEL = document.querySelector('.paper')
const paper2EL = document.querySelector('.paper2')
const paper3EL = document.querySelector('.paper3')
const rockEL = document.querySelector('.rock')
const rock2EL = document.querySelector('.rock2')
const rock3EL = document.querySelector('.rock3')
const scissorsEL = document.querySelector('.scissors')
const scissors2EL = document.querySelector('.scissors2')
const scissors3EL = document.querySelector('.scissors3')
const spockEL = document.querySelector('.spock')
const spock2EL = document.querySelector('.spock2')
const spock3EL = document.querySelector('.spock3')
const lizardEL = document.querySelector('.lizard')
const lizard2EL = document.querySelector('.lizard2')
const lizard3EL = document.querySelector('.lizard3')
const displayEl = document.querySelector('.winorlose')
const scoreEl = document.querySelector(".score-no")
const score1El = document.querySelector(".actual-score")
const playBtn = document.querySelector(".play-btn")
const resetBtn = document.querySelector(".reset-btn")
const youCircle = document.querySelector(".you")
const houseCicle = document.querySelector(".house")
const circleAnimation = document.querySelector(".house-circle")
const circleAnimation2 = document.querySelector(".you-circle")
let score = 0
const scoreInLocalStorage = localStorage.score
let paper = false
let rock = false
let scissors = false
let spock = false
let lizard = false
let btn = document.createElement("button")
btn.innerHTML= "Play Again"
let btn2 = document.createElement("button")
btn2.innerHTML= "Reset Score"
btn.setAttribute('class', "play-again")
btn2.setAttribute('class', "reset")
let house = Math.floor(Math.random() * 5)
btn.addEventListener("click", e=>{
    location.reload()
})
btn2.addEventListener("click", e=>{
    score = 0
    localStorage.setItem("score", JSON.stringify(score))
    location.reload()
})
if (score = isNaN){
    score = 0
    localStorage.setItem("score", JSON.stringify(score))
}
scoreEl.innerHTML = Number (scoreInLocalStorage)
score1El.innerHTML = Number (scoreInLocalStorage)
score = Number(scoreInLocalStorage)



rulesEl.addEventListener("click", e=>{
    imageEl.style.zIndex = "0"
    step1El.style.filter = "brightness(50%)"
})
rules2.addEventListener("click", e=>{
    imageEl.style.zIndex = "1"
    step2El.style.filter = "brightness(50%)"
})
cancelEl.addEventListener("click", e=>{
    imageEl.style.zIndex = "-1"
    step1El.style.filter = 'brightness(100%)'
    step2El.style.filter = 'brightness(100%)'
})
paperEL.addEventListener("click", e=>{
    step2El.style.zIndex = "1"
    paper2EL.style.zIndex = "1"
    paper = true
    setTimeout(
        function housePicked (){
            if (house === 0 ){
                paper3EL.style.zIndex = "1"
                paper3EL.style.opacity = "1"
            }
            else if (house ===  1 ){
                rock3EL.style.zIndex = '1'
                rock3EL.style.opacity = "1"
            }
            else if (house === 2 ){
                scissors3EL.style.zIndex = "1"
                scissors3EL.style.opacity = "1"
            }
            else if ( house === 4){
                spock3EL.style.zIndex = "1"
                spock3EL.style.opacity = "1"
            }
            else if(house === 3){
                lizard3EL.style.zIndex = "1"
                lizard3EL.style.opacity = "1" 
            }
        }, 1000
    )
    setTimeout(
        function paper1(){
            resetBtn.appendChild(btn2)
            displayEl.setAttribute('style',"margin-top: 7rem ; font-size: 2rem")
            playBtn.appendChild(btn)
            if (paper=true && house=== 0 ){
                displayEl.innerHTML= "DRAW"
            }
            else if((paper = true && house== 1 ) || (paper= true && house === 4)){
                displayEl.innerHTML="YOU WIN"
                score += 1
                localStorage.setItem("score", JSON.stringify(score))
                score1El.innerHTML = score
                circleAnimation2.style.display = "block"
            }
            else if((paper=true && house== 2)||(paper=true && house=== 3)){
                displayEl.innerHTML = "YOU LOSE"
                score -= 1
                localStorage.setItem("score", JSON.stringify(score))
                score1El.innerHTML = score
                circleAnimation.style.display = "block"
            }
        }, 1500
    )
})
rockEL.addEventListener("click", e=>{
    step2El.style.zIndex = "1"
    rock2EL.style.zIndex = "1"
    rock = true
    setTimeout(
        function housePicked (){
            if (house === 0 ){
                paper3EL.style.zIndex = "1"
                paper3EL.style.opacity = "1"
            }
            else if (house ===  1 ){
                rock3EL.style.zIndex = '1'
                rock3EL.style.opacity = "1"
            }
            else if (house === 2 ){
                scissors3EL.style.zIndex = "1"
                scissors3EL.style.opacity = "1"
            }
            else if ( house === 4){
                spock3EL.style.zIndex = "1"
                spock3EL.style.opacity = "1"
            }
            else if(house === 3){
                lizard3EL.style.zIndex = "1"
                lizard3EL.style.opacity = "1" 
            }
        }, 1000
    )
    setTimeout(
        function rock1(){
            displayEl.setAttribute('style',"margin:7rem 0rem 0rem 0rem ; font-size: 2rem; text-align: center;")
            playBtn.appendChild(btn)
            resetBtn.appendChild(btn2)
            if((rock=true && house === 0)||(rock =true && house === 4)){
                displayEl.innerHTML = "YOU LOSE"
                score -= 1
                localStorage.setItem("score", JSON.stringify(score))
                score1El.innerHTML = score
                circleAnimation.style.display = "block"
            }
            else if(rock=true && house == 1){
                displayEl.innerHTML= "DRAW"
            }
            else if((rock =true && house == 2) || (rock = true && house === 3)){
                displayEl.innerHTML="YOU WIN"
                score += 1
                localStorage.setItem("score", JSON.stringify(score))
                score1El.innerHTML = score
                circleAnimation2.style.display = "block"
            }
            
        }, 1500
    )
})
scissorsEL.addEventListener("click", e=>{
    step2El.style.zIndex = "1"
    scissors2EL.style.zIndex = "1"
    scissors = true
    setTimeout(
        function housePicked (){
            if (house === 0 ){
                paper3EL.style.zIndex = "1"
                paper3EL.style.opacity = "1"
            }
            else if (house ===  1 ){
                rock3EL.style.zIndex = '1'
                rock3EL.style.opacity = "1"
            }
            else if (house === 2 ){
                scissors3EL.style.zIndex = "1"
                scissors3EL.style.opacity = "1"
            }
            else if ( house === 4){
                spock3EL.style.zIndex = "1"
                spock3EL.style.opacity = "1"
            }
            else if(house === 3){
                lizard3EL.style.zIndex = "1"
                lizard3EL.style.opacity = "1" 
            }
        }, 1000
    )
    setTimeout(
        function scissors1(){
            resetBtn.appendChild(btn2)
            displayEl.setAttribute('style',"margin-top: 7rem; font-size: 2rem")
            playBtn.appendChild(btn)
            if((scissors=true && house == 0)|| (scissors = true && house === 3)){
                displayEl.innerHTML="YOU WIN"
                score += 1
                localStorage.setItem("score", JSON.stringify(score))
                score1El.innerHTML = score
                circleAnimation2.style.display = "block"
            }
            else if((scissors=true && house == 1)||(scissors=true &&house ===4)){
                displayEl.innerHTML = "YOU LOSE"
                score -= 1
                localStorage.setItem("score", JSON.stringify(score))
                score1El.innerHTML = score
                circleAnimation.style.display = "block"
            }
            else if(scissors=true && house== 2){
                displayEl.innerHTML= "DRAW"
            }
        }, 1500
    )
})
spockEL.addEventListener("click", e=>{
    step2El.style.zIndex = "1"
    spock2EL.style.zIndex = "1"
    spock = true
    setTimeout(
        function housePicked (){
            if (house === 0 ){
                paper3EL.style.zIndex = "1"
                paper3EL.style.opacity = "1"
            }
            else if (house ===  1 ){
                rock3EL.style.zIndex = '1'
                rock3EL.style.opacity = "1"
            }
            else if (house === 2 ){
                scissors3EL.style.zIndex = "1"
                scissors3EL.style.opacity = "1"
            }
            else if ( house === 4){
                spock3EL.style.zIndex = "1"
                spock3EL.style.opacity = "1"
            }
            else if(house === 3){
                lizard3EL.style.zIndex = "1"
                lizard3EL.style.opacity = "1" 
            }
        }, 1000
    )
    setTimeout(
        function (){
            resetBtn.appendChild(btn2)
            displayEl.setAttribute('style',"margin-top: 7rem; font-size: 2rem")
            playBtn.appendChild(btn)
            if((spock=true && house == 2)|| (scissors = true && house === 1)){
                displayEl.innerHTML="YOU WIN"
                score += 1
                localStorage.setItem("score", JSON.stringify(score))
                score1El.innerHTML = score
                circleAnimation2.style.display = "block"
            }
            else if((scissors=true && house == 0)||(scissors=true &&house ===3)){
                displayEl.innerHTML = "YOU LOSE"
                score -= 1
                localStorage.setItem("score", JSON.stringify(score))
                score1El.innerHTML = score
                circleAnimation.style.display = "block"
            }
            else if(spock=true && house== 4){
                displayEl.innerHTML= "DRAW"
            }
        }, 1500
    )
})
lizardEL.addEventListener("click", e=>{
    step2El.style.zIndex = "1"
    lizard2EL.style.zIndex = "1"
    lizard = true
    setTimeout(
        function housePicked (){
            if (house === 0 ){
                paper3EL.style.zIndex = "1"
                paper3EL.style.opacity = "1"
            }
            else if (house ===  1 ){
                rock3EL.style.zIndex = '1'
                rock3EL.style.opacity = "1"
            }
            else if (house === 2 ){
                scissors3EL.style.zIndex = "1"
                scissors3EL.style.opacity = "1"
            }
            else if ( house === 4){
                spock3EL.style.zIndex = "1"
                spock3EL.style.opacity = "1"
            }
            else if(house === 3){
                lizard3EL.style.zIndex = "1"
                lizard3EL.style.opacity = "1" 
            }
        }, 1000
    )
    setTimeout(
        function (){
            resetBtn.appendChild(btn2)
            displayEl.setAttribute('style',"margin-top: 7rem; font-size: 2rem")
            playBtn.appendChild(btn)
            if((lizard=true && house == 4)|| (lizard = true && house === 0)){
                displayEl.innerHTML="YOU WIN"
                score += 1
                localStorage.setItem("score", JSON.stringify(score))
                score1El.innerHTML = score
                circleAnimation2.style.display = "block"
            }
            else if((lizard=true && house == 2)||(lizard=true &&house ===1)){
                displayEl.innerHTML = "YOU LOSE"
                score -= 1
                localStorage.setItem("score", JSON.stringify(score))
                score1El.innerHTML = score
                circleAnimation.style.display = "block"
            }
            else if(lizard=true && house== 3){
                displayEl.innerHTML= "DRAW"
            }
        }, 1500
    )
})