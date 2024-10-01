let a = document.querySelector("#a")
let b = document.querySelector("#b")
let c = document.querySelector("#c")
let d = document.querySelector("#d")
let e = document.querySelector("#e")
let f = document.querySelector("#f")
let g = document.querySelector("#g")
let h = document.querySelector("#h")
let i = document.querySelector("#i")
let z = document.querySelector("body")
let j = document.querySelectorAll(".box")
play();



win = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7],
[2, 5, 8], [0, 4, 8], [2, 4, 6]];

function play() {
    n = true;

    j.forEach((box) => {
        box.onclick = () => {
            if (n === true) {
                box.innerHTML = "O";


                n = false;
            } else if (n === false) {
                box.innerHTML = "X"

                n = true;
            }
            box.disabled = true;
            if (box.innerText == "O") {

                box.style.color = "blue";
            } else if (box.innerText == "X") {
                box.style.color = "red";
            }
            box.style.fontSize = "xx-large";
            winner();

        }
    })
}
x = document.querySelector(".newgame");
x.addEventListener("click", () => {
    window.location.reload();
})


function winner() {

    for (let i of win) {

        let p1 = j[i[0]].innerText;
        let p2 = j[i[1]].innerText;
        let p3 = j[i[2]].innerText;
        if (p1 != "" && p2 != "" && p3 != "") {
            if (p1 === p2 && p2 === p3) {
             
                showwinner(p1);
            }
        }
    }



}


function showdraw() {
    z.innerHTML = `<div id="klkl">
    <p> DRAW</p><br><br>
    <div id="kkl">RESTART</div>
    </div> 
    `
    hhj = document.querySelector("#kkl");
    hhj.addEventListener("click", () => {
        window.location = "index.html";
    })
}
function showwinner(show) {


    z.innerHTML = `<div id="klkl">
    <p>${show} is the winner</p><br><br>
    <div id="kkl">RESTART</div>
    </div> 
    `
    hhj = document.querySelector("#kkl");
    hhj.addEventListener("click", () => {
        window.location = "index.html";
    })
}


console.log("gj")