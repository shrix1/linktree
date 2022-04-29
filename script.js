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


// chick img https://cdn-icons-png.flaticon.com/512/141/141737.png
// net img https://cdn-icons.flaticon.com/png/512/924/premium/924189.png?token=exp=1651238713~hmac=8fe040677082d3187deb90f257fd009e