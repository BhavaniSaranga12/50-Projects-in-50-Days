
let div1=document.querySelector(".container");
let div2= document.querySelector(".container2");

window.addEventListener("keydown" , (keyPress) => {
  div1.classList.add("none");
  div2.classList.remove("none");
  
  div2.innerHTML = `
  <div class="key">
  ${keyPress.key === ' ' ? 'Space' : keyPress.key} 
  <small>event.key</small>
</div>

<div class="key">
  ${keyPress.keyCode}
  <small>event.keyCode</small>
</div>

<div class="key">
  ${keyPress.code}
  <small>event.code</small>
</div>`;
    
} )