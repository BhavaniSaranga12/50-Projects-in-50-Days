let show= document.getElementById("show");

let mydiv=document.getElementById("my");
let messages=["Message One", 'Message Two', 'Message Three', 'Message Four'];
let colors=["red",'green','purple'];

show.addEventListener('click',()=>showmessage());


function showmessage() {
    const notif = document.createElement('p')
    mydiv.appendChild(notif);
    notif.innerHTML=randomMessage();
    notif.classList.add(randomColor());
    setTimeout(() => {
        mydiv.removeChild(notif);
    }, 3000);
}

function randomMessage(){
    return messages[Math.floor(Math.random()*messages.length)];
}

function randomColor(){
    return colors[Math.floor(Math.random()*messages.length)];
}