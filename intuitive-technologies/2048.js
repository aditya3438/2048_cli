// Challenge: Make a cli version of 2048

// The GAME LOOP is as follows:
// Step 1: Put two '2's randomly on the 4x4 table
// Step 2: Move up/down/left/right on the board
// - If number changes then put a new number on the board (Step 3)
// - If not then repeat Step 2
// Step 3: Put a new number on the board
// - If an empty slot exists then repeat Step 2
// - If not then check if any additional moves are available?
// -- If available then repeat Step 2
// -- If not then end the game.

// Breaking ddown the problem:
// First, we need to declare a variable 'board' and assign an array [either 1D or 2D]
// For step 1 we will need to write a function for a '2 or 4' number generator that will assign two empty cells in the array 'board'
// Next need to make four functions, one each for 'LEFT/RIGHT/UP/DOWN/' which will take user input from arrow keys and change the values in 'board'
// We need to write a function for Adding the like numbers. In this function we have to write a function/conditions to check if the cells between two
// like numbers are vacant. 
// We will also have to write a function for checking whether there are empty cells and display game is over when there are none.


// First, declare a 2d array called 'board' to represent the 3d board.

var board = [
                [0,0,0,0], 
                [0,0,0,0], 
                [0,0,0,0], 
                [0,0,0,0]
            ];

    for(var i= 0 ; i < 4 ;i++){
        
            console.log(board[i][0]+" "+board[i][1]+" "+board[i][2]+" "+board[i][3]+" ");
        
        
    }

    var arr =[
        [1,2,3],
        [4,5,6],
        [7,8,9]
        ],arrText='';

        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr[i].length; j++) {
                arrText+=arr[i][j]+' ';
            }
            console.log(arrText);
            arrText='';
        }

// write a function to find out empty cells

// function addNumbers(){

//     let options= [];
//     for (i=0; i<4; i++){
//         for(j=0; j<4; j++){
//             if (board[i][j]==0){
//                 options.push( {
//                                 x:i,
//                                 y:j
//                               });
//             }
//         }
//     }
    
//     if (options.length>0);
//     let spot = random(options);
//     let r= random(1);
//     board[spot.x][spot.y]= r>0.5 ? 2 :4;

//     }
// }


// write a function for a '2 or 4' number generator that will assign two empty cells in the array 'board'

//  Random Number Generator
// var rand-index = [Math.trunc(Math.floor())]

// Math.floor(Math.random() * 6) + 1  
// var v = Math.floor(Math.random()*4)+1;
// console.log(v);

// function randomIntFromInterval(0,4) // min and max included
// {
//     return Math.floor(Math.random()*(3)+1);
// }
// console.log(randoIntFromInterval(2,5));


