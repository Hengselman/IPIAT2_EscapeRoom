const countOmhoog = document.querySelector('.countOmhoog button');
const countOmlaag = document.querySelector('.countOmlaag button');
const kiezen = document.querySelector(' .kiezen button');
const lockshow = document.getElementById('item2_key');
const indienen = document.getElementById('indienen');
var countNumber = parseInt("-1");
const versie = `lockpick${countNumber}.png`;
var rightNumber = Math.floor(Math.random() * 8);

countOmhoog.addEventListener('click', countUp);
countOmlaag.addEventListener('click', countDown);
kiezen.addEventListener('click', choose);

console.log(rightNumber);

function countUp(){
    if (countNumber < 7){
        countNumber++;
        document.getElementById("pick").src = `img/lockpick${countNumber}-removebg-preview.png`;
        console.log(`lockpick${countNumber}-removebg-preview.png`);
    }
    else {
        countNumber = -1;
        console.log('too high');
    }
    }

function countDown(){
    if (countNumber > 0){
        countNumber--;
        document.getElementById("pick").src = `img/lockpick${countNumber}-removebg-preview.png`;
        console.log(`lockpick${countNumber}-removebg-preview.png`);
    }
    else {
        countNumber = 8;
        console.log('too high');
    }
    }

function choose(){
    if (countNumber == rightNumber){
    document.getElementById("indienen").href = "seanlockpick2.html";
    console.log("testworthy")
    }
    else{
        alert('dat is niet de juiste ;)');
    }
}

function change() {
    var image = document.getElementById('pick');
}