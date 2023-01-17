const board = document.querySelector('#board')
const colors = ['#d61717', '#1cefb0', '#27ef1c', '#c81cef', '#ef1cc1']
const SQUARES_NUMBER = 500

for(let i=0; i < SQUARES_NUMBER; i++) {
    let square = document.createElement('div');
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        setColor(square)
    })
    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })


    board.append(square)
}

function setColor(element) {
    let color = randomMathColor();
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}
function randomMathColor() {
    const index =  Math.floor(Math.random() * colors.length);
    return colors[index]
}