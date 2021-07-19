let text = document.getElementById('text');
let bird1 = document.getElementById("bird1");
let bird2 = document.getElementById("bird2");
let bg = document.getElementById("bg");
let forest = document.getElementById("forest");
let water = document.getElementById("water");
let header = document.getElementById("header");
window.addEventListener('scroll',function(){
    let value = window.scrollY;
    text.style.top = 50+value* -0.5 + '%';
    bird1.style.top = value * -1.5 + 'px';
    bird1.style.left = value * 2 + 'px';
    bird2.style.top = value * -1.5 + 'px';
    bird2.style.right = value * -5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    forest.style.top = value * 0.25 + 'px';
    header.style.top = value * 0.5 + 'px';
})