// TODO: typing feature
// make each cell an array to type into
// check if previous cell is 

const cellOne = document.querySelector('.cell-one')
let arr = [];


document.addEventListener('keydown', (event)=> { 
    const cell = document.querySelector('.cell');  
    if (arr.length < 5 && 'qwertyuiopasdfghjklzxcvbnm'.includes(event.key)) {
        arr.push(event.key)
        if (cell.classList.contains('empty')) {
            cell.textContent = event.key
            cell.classList.remove('empty')
    }
}
    console.log(arr)
});
// TODO: initialize list of five letter words, pick a random word out of each
// TODO: start/stop game
// TODO: helper function to check if letter in word and another to check position
