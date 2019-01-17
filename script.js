document.addEventListener("DOMContentLoaded", function () {

    //create the winning conditio
    //there are 7 winning conditions
    //each winning condition is placed inside an array 0 to 8
    //the arrays are then placed inside an array
    let playerTurn = true;
    const winCombs = [
        [0, 1, 2], //0
        [3, 4, 5], //1
        [6, 7, 8], //2
        [0, 3, 6], //3
        [1, 4, 7], //4
        [2, 5, 8], //5
        [0, 4, 8], //6
        [6, 4, 2], //7
    ] //array within an array

    // query select all the td tags
    // store the arrays of td's in squares 
    let square = document.querySelectorAll('td'); //td represents the individual grid squares

    // game loop
    //for each  square the for loop  adds an event listner
    for (let i = 0; i < square.length; i++) {
        //the eventlistner targets the squares and adds a click event
        square[i].addEventListener("click", function (e) { //e is event

            if (playerTurn) {
                e.target.className = "X";//e.target targets the square we clicked on
                e.target.innerText = "X"; //this targets the text within the box and tells the computer to display 'X'
                playerTurn = false; //when player1 fills the box, this statement allows player 2 to fill a box
            }
            else if (!playerTurn) { //this means 'else if' not playerTurn
                e.target.className = "O"; // this targets the className '.O' wich sets the back ground of the box
                e.target.innerText = "O"; //this targets the text within the box and tells the computer to display 'O'
                playerTurn = true; //when player2 fills the box, this statement allows player 1 to fill a box
            }
            //this for loop goes throught the length of the winning combos
            for (let i = 0; i < winCombs.length; i++) {
                if (square[winCombs[i][0]].innerText == 'X' &
                    square[winCombs[i][1]].innerText == 'X' &&
                    square[winCombs[i][2]].innerText == 'X') {
                    alert('X Wins!');
                }
                else if (square[winCombs[i][0]].innerText == 'O' &&
                    square[winCombs[i][1]].innerText == 'O' &&
                    square[winCombs[i][2]].innerText == 'O') {
                    alert('O Wins!');
                }
            }
        })
    }

    const newGame = document.getElementById('reset')

    function newGame() {
        button.addEventListner('click',
            function () {

                for (let i = 0; i < 9; i++) {
                    td[i].innerText = "";
                    td[i].setAttribute("class", "clear")
                }
            })
    }

})


