const item1 = document.getElementById('item1_key');
const item2 = document.getElementById('item2_key');
const item3 = document.getElementById('item3_key');


const arrow_kamer4 = document.getElementById("arrow_kamer4");
const image_item3 = document.getElementById("svg_image3");

window.onload = (event) => {
    if (localStorage.getItem('item1')){
        item1.style.display = "flex";
    }
    if (localStorage.getItem('item2')){
        item2.style.display = "flex";
    }
    if (localStorage.getItem('item3')){
        item3.style.display = "flex";
    } else {
        item3.style.display = "none";
    }
    if (localStorage.getItem('use_item3')){
        if (image_item3 != null){
            image_item3.style.filter = "brightness(1)";
            arrow_kamer4.style.display = "block";
        }
    }
}


function storeItem1() {
    localStorage.setItem('item1', 'key1')
    item1.style.display = "flex";
    location.reload();
}

function storeItem2() {
    localStorage.setItem('item2', 'key2')
    item2.style.display = "flex";
    location.reload();
}

function storeItem3() {
    localStorage.setItem('item3', 'key3')
    item3.style.display = "flex";
    location.reload();
}

function useItem3() {
    localStorage.setItem('use_item3', 'use_key3')
    image_item3.style.filter = "brightness(1)";
    arrow_kamer4.style.display = "block";
    localStorage.removeItem('item3');
    location.reload();
}

function clearStorage() {
    localStorage.clear();
    location.reload();
}

// numpad code
let code = "";

function numpad(num) {
    if (code.length >= 4) numpadC();
    code += String(num);
    console.log(code);
}
function numpadC() { //cancel
    code = "";
}
function numpadE() { //enter
    if (code !== "3040") { // als code niet correct is
        numpadC();
        return;
    }
    //als code wel correct
    window.location = "kamer2.html";
}