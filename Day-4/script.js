

let img= document.querySelector(".background");
let text=document.querySelector(".loading-text");
let load=0;
setInterval(() => {
   load++;
   if(load>99){
    clearInterval(1);

   }
   text.innerText=`${load}%`; 
   text.style.opacity=scale(load, 0, 100, 1, 0);
   console.log(text.style.opacity);
   img.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}, 30);



const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }
  