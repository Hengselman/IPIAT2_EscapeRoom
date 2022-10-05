const item1 = document.getElementById('item1_key');
const item2 = document.getElementById('item2_key');
const item3 = document.getElementById('item3_key');

window.onload = (event) => {
    if (localStorage.getItem('item1')){
        item1.style.display = "flex";
    }
    if (localStorage.getItem('item2')){
        item2.style.display = "flex";
    }
    if (localStorage.getItem('item3')){
        item3.style.display = "flex";
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

function clearStorage() {
    localStorage.clear();
    location.reload();
}
