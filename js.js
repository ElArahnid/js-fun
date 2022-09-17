const getNumber = (max = 11, min = 0) => Math.floor(Math.random() * (max - min) + min);
const optimizeNumber = (n) => (n + "").length === 2 ? str : "0" + n;

const data = [];
const colors = ["#660709aa", "#121896aa", "#E89F03aa", "#FFE490aa", "#209ECFaa" ];
let n = getNumber(41, 1);

while(n--) {
    data.push(getNumber(101))
}

console.log(data);

const box = document.querySelector(".box");

for (let val of data) {
    box.innerHTML += `<div 
    class="card" 
    style="background-color: ${colors[getNumber(colors.length - 1)]}">
    ${val}
    </div>`;
}