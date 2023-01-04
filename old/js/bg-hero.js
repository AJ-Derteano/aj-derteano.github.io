let writing = (idTag, speed) =>{
    let text = document.getElementById(idTag);
    let str = text.innerHTML;
    
    text.innerHTML = '';
    
    let i = 0;
    
    function typeWrite(){
        if(i < str.length){
            text.innerHTML += str.charAt(i);
            i++;
            setTimeout(typeWrite, speed);
        }

        if(i === str.length){
            return;
        }
    }
    
    setTimeout(typeWrite, speed);
}

setTimeout(() =>{
    if(document.getElementById('animate-text-title')){
        /* writing('animate-text-name', 200); */
        writing('animate-text-title', 150);
    }
},100);
