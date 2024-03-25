let mobileNavItems = document.querySelectorAll(`.mobileNav a`);
let navItems = document.querySelectorAll(`nav ul li`);
mobileNavItems.forEach((e) => {
    e.addEventListener('click', function(){
        toggleNavItems(mobileNavItems, e);
    });
})
navItems.forEach((e) => {
    e.addEventListener('click', function(){
        toggleNavItems(navItems, e);
    });
})

function toggleNavItems(items, i){

    items.forEach((e) => {

        e.classList.remove("active");


    });

    i.classList.add("active");

    setTimeout(function(){
        window.onscroll = () =>  i.classList.remove("active");
    }, 800);

    
}

// Auto type 

let typed = new Typed(".auto-type", {
    strings: ["Frontend Developer", "Software Engineer", "Web Designer"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
})

function setProgress(value,index){
        const skill = document.querySelectorAll('.skill')[index];
        const circle = skill.querySelector('.bar');
        const offset =(value / 100) * 250;
        circle.style.setProperty('stroke-dasharray', "250");
        circle.style.setProperty('stroke-dashoffset', 250 - offset);
        document.documentElement.style.setProperty('--stroke', offset)

}

setProgress(80, 0);
setProgress(75, 1);
setProgress(60, 2);
setProgress(55, 3);

let btns = document.querySelectorAll("#knowMore");
let message = document.getElementById("message");
btns.forEach((e) => {
    e.addEventListener("click", () => {
        message.value = `I want to ask about ${e.getAttribute("data-serv")} services`
    })
})


let projects = document.querySelectorAll(".item");
let accounts = document.querySelectorAll("#clickable");

projects.forEach((e) => {
    e.addEventListener("click", () => goToUrl(e))
})

accounts.forEach((e) => {
    e.addEventListener("click", () => goToUrl(e))
})

 function goToUrl(element){
    window.open(element.getAttribute("data-url")) ;
 }

 AOS.init({
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    mirror: true, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', 
 });


