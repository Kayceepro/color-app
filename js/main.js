const btn = document.getElementById("btn")
const color = document.querySelector(".color")
let colors = ['red', 'yellow', 'green', 'purple', 'pink', 'orange']
let selectedColor = 2

btn.addEventListener('click', function(){
    let selectedColor = changeColor();
    document.body.style.backgroundColor = colors[selectedColor];
    
    color.textContent = colors[selectedColor];
    color.style.color = colors[selectedColor];
    })
    
    
    
function changeColor () {
  return  Math.floor(Math.random() * colors.length )
    
}
