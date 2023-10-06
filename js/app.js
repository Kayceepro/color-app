let hex = [1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F'];
let colors = document.querySelector('.color');
let btn = document.getElementById('btn');
let footer = document.querySelector('footer');


btn.addEventListener('click', function (){
    let hexColor ="#";
    for (i = 0; i < 6; i++){
        hexColor += hex[loopth()];
        colors.style.color =  hex[loopth()];
        
        
        console.log(hexColor);
        document.body.style.backgroundColor = hexColor;
 colors.textContent = hexColor    
 
    }
})
function loopth() {
   return Math.floor(Math.random() * hex.length)
}



