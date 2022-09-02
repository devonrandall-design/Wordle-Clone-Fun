const wordleArea = document.querySelector('.wordle-area')

for (let i = 0; i < 30; i++) {

const newBox = document.createElement('div')
newBox.classList.add('letter-box')
newBox.setAttribute('id', 'box-'+ (i + 1))
wordleArea.append(newBox)

}

const keys = document.querySelectorAll('.keys')

//keys.forEach(function(key) {
  //key.addEventListener('click', handleClick)
//});

window.addEventListener('keydown', handleKey)

let currentTile = 1

function handleKey(e) {
  const currentBox = document.getElementById('box-' + currentTile)

  if (currentTile < 5 && e.keyCode != 8) {
console.log(e.keyCode)
currentBox.innerHTML = String.fromCharCode(e.keyCode)
currentTile++

return currentTile
}

if (currentTile > 0 && e.keyCode == 8) {
currentBox.innerHTML = ' '
currentTile--

return currentTile


}

if (currentTile = 0) {
  return currentTile/H
}
  



  


}



//H = 72 //E 69 L 76 0 48



