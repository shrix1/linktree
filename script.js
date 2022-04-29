const check = document.querySelector(".check");
const bg = document.querySelector(".bg");
const para = document.querySelector(".default");
const themeTxt = document.querySelector(".mode");
const iconChange = document.querySelector(".icon");
const footer = document.querySelector(".footer");
const gametxt= document.querySelector(".gametxt");

check.addEventListener("change", (e) => {
    bg.classList.toggle("change");
    para.classList.toggle("pchange");
    themeTxt.classList.toggle("pchange");  
    footer.classList.toggle("fchange");  
    gametxt.classList.toggle("gchange");  
    iconChange.innerHTML=`<i style="color:white" class="fa-solid fa-sun"></i>`;
});
