const getNumber = (max = 11, min = 0) => Math.floor(Math.random() * (max - min) + min);
const optimizeNumber = (n) => (n + "").length === 2 ? str : "0" + n;

const data = [];
const colors = ["#660709aa", "#121896aa", "#E89F03aa", "#FFE490aa", "#209ECFaa" ];
let n = Math.floor(getNumber(61, 6) / 6) * 6;

while(n--) {
    data.push(getNumber(101))
}

console.log(data);

const box = document.querySelector(".box");
box.innerHTML = "<div class=\"card\"></div>";
for (let val of data) {
    box.innerHTML += `<div 
    class="card" 
    style="background-color: ${colors[getNumber(colors.length - 1)]}">
    ${val}
    </div>`;
}


function showTime(day = new Date) {
let now = new Date();
let final = new Date(2023, 1, 7);
let d, h, m, s;
let time = final - now;
m = Math.floor(time / 60);
s = time - m * 60;
h = Math.floor(m / 60);
m -= h * 60;
d = Math.floor(h / 24);
h -= d * 24;
return `${d}д ${h}ч ${m}мин ${s}сек`;
}

setInterval(function() {
    box.firstElementChild.innerText = `До окончания осталось ${showTime()}`
}, 1000)
