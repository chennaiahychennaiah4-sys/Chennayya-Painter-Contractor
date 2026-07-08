/* ===========================
   CHENNAIAH PAINTER
   SCRIPT.JS
=========================== */

// Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Contact Form

const form = document.querySelector("form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert("ధన్యవాదాలు!\n\nచెన్నయ్య గారు త్వరలోనే మిమ్మల్ని సంప్రదిస్తారు.");

form.reset();

});

}

// Header Background on Scroll

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.background="#ffffff";

header.style.boxShadow="0 5px 20px rgba(0,0,0,.15)";

}else{

header.style.background="#ffffff";

header.style.boxShadow="none";

}

});

// Gallery Hover Animation

const gallery=document.querySelectorAll(".gallery-item");

gallery.forEach(item=>{

item.addEventListener("mouseenter",()=>{

item.style.transform="scale(1.03)";

});

item.addEventListener("mouseleave",()=>{

item.style.transform="scale(1)";

});

});

// Fade In Animation

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll("section").forEach(sec=>{

sec.style.opacity="0";

sec.style.transform="translateY(40px)";

sec.style.transition="1s";

observer.observe(sec);

});

// Floating WhatsApp Animation

const whatsapp=document.querySelector(".whatsapp-float");

setInterval(()=>{

whatsapp.style.transform="scale(1.15)";

setTimeout(()=>{

whatsapp.style.transform="scale(1)";

},500);

},2500);

// Floating Call Animation

const call=document.querySelector(".call-float");

setInterval(()=>{

call.style.transform="scale(1.15)";

setTimeout(()=>{

call.style.transform="scale(1)";

},500);

},2500);

// Current Year in Footer

const year=document.getElementById("year");

if(year){

year.innerHTML=new Date().getFullYear();

}

console.log("✅ Chennaiah Painter Website Loaded Successfully");
// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior:"smooth"
        });

    });
});
