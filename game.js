const cursor = document.querySelector(".cursor");
const gameField = document.querySelector("#gameField");
const stratBtn = document.querySelector(".btn");
const scoreNum = document.querySelector(".score");

//cursor
window.addEventListener("mousemove",(e)=>{
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";
})

//creatinng duck img
const duck = document.createElement("img");
duck.classList.add("duck");
duck.setAttribute("src","https://cdn-icons-png.flaticon.com/512/141/141737.png");

//startBtn
stratBtn.addEventListener("click",()=>{
    gameField.appendChild(duck)
});

//hit the chick for points
let score=0
window.addEventListener("click",(e)=>{
    if(e.target === duck){
        score++
    }
    scoreNum.innerHTML = score; 
})

//duch/chick random pos generator
setInterval(()=>{
    const topp = Math.random() * 400 ;  
    const leftt = Math.random() * 300; 
    duck.style.top = topp + "px";
    duck.style.left = leftt + "px"; 
},1000)
