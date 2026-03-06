/* Mouse Light */

const light=document.createElement("div");
light.className="light";
document.body.appendChild(light);

document.addEventListener("mousemove",e=>{
light.style.left=e.clientX+"px";
light.style.top=e.clientY+"px";
});

/* Particles */

for(let i=0;i<200;i++){
let p=document.createElement("div");
p.className="particle";
p.style.left=Math.random()*100+"vw";
p.style.top=Math.random()*100+"vh";
p.style.animationDuration=(20+Math.random()*40)+"s";
document.body.appendChild(p);
}
