var sudoku = [
    [3, 9, 1, 2, 8, 5, 7, 4, 6],
    [5, 4, 6, 9, 3, 7, 2, 1, 8],
    [2, 7, 8, 6, 1, 4, 9, 5, 3],
    [7, 2, 4, 8, 6, 3, 1, 9, 5],
    [8, 1, 5, 4, 7, 9, 6, 3, 2],
    [6, 3, 9, 5, 2, 1, 4, 8, 7],
    [1, 5, 2, 7, 9, 8, 3, 6, 4],
    [9, 8, 7, 3, 4, 6, 5, 2, 1],
    [4, 6, 3, 1, 5, 2, 8, 7, 9]
];

var allSudoku = [
    "....7..4..28...617.......9...................2.6..4..51826...73394....56765......",
    "....4....49...1.....2...74.2....4..8..4...95...7.5....6..48.5.3548.......2...5.8.",
    ".61.......25........31.2...14..6.......427..557..1..48..7....3.....9..2.25..3....",
    "176.8.243.286.1957...27.8162.13......8........................................195",
    "3..7.85..79.3..42..5....873..7.43.5.2...7.6....1.8.9.7..6.1......................",
    "1..78246.....9178.....6..91.....5.........1..2..9....8...1798.....65...77........",
    "96........57.9.648.4.7.6...82.......43......7.7........12.......94.......86...513",
    "......4.3..3.4.2..24.3.8......4...62324896.1.65.....48.1..34.....................",
    "6..192.3.851437...923...147..87.....7.....6..49..2.37............................",
    ".74...852.9....4.7...8479.64.7..9...953......2...........3.4..1....1.....4.....9.",
    "5..6.....8.....2..67..294..2....6...9....2...76....382.96.....7.....7.9.457......",
    "7.5....3.8.3.9....1.9....28..78...........76.9...7..84.9..4.8...7..6.25.5........",
    "891.2..........78.4.....19..8......9735.6.....49.8..6..18......9...12.....4.....1",
    "39.....46...93.2........9.3.....3.9.....79.3..3..214..........4.....6..1.6315...9",
    "..3...15........9..8....4..6.97518.48173...65.54...........2589.9................",
    ".....781...5...97.7....8...5.89...4...9..............9...4...6.2..3..157....21498",
    ".39.82...526934.........293..2......19............8..9.8.2....52...1....9......62",
    "...3.27..........4.............38...147265389..3...........76.......3...2.168954.",
    "1.5....8..9..4.15...8..1.92.......317......4...4.1..67..7.96...........9.....237.",
    ".8.5..7........6.5251...3.8..5...........4.5.......47......2.39...8...675..3961..",
    "7....2...6......2.832.....7.6...8..5..8.1........96....831...6..79........6..9874",
    ".3.5214.7.5......22...6.35........7.5.........2.9....63..7......751.......234.7..",
    "...2....54....6...9..............2..2..6.....1...2..7.324167859..894....5..8.2...",
    "...9..712..4...3.9....1.4.8.4....5...8.5.16........2.....1.68.5..1...9.66.....1..",
    ".7.2...6..................8....6..47...........5.2....326.7.459.84..2.71...49683.",
    ".79.28.6...........6.........6........5..1......5..............1.2..4.8...7.1..4.",
    "684.9....92.4......7...8....5....6.3..8..6.....................7....4...........2",
    "..........92.........2.3...9.5..............................9.7..9......7186.9245",
    ".5...6.......82.............6..5..2...5......2.3.......7....2.9......13........68",
    "..2........1.4..7...6........5.....1.4.5.........67......1........9...28..9....6.",
    ".64......13...6.........6......3.189...........5...3..6.7.4............3..3......",
    "..9...8....7...9.....9.....4.....1...2.4..5..7.......9.78....9...6........2......",
    "......7....83....1..47...2....14.......2....7..................2....6....1.982...",
    "6.8........2..9........8.7.8...................5........6....2.....4269...9.36...",
    "974..6......3.9...5....79.....8..........3....9.4752...................7.........",
    "....2.....96.3..2.827..9....8......4..52.1...6....4.......1......................",
    "....7.315...5.92.6.5....7..6.................53....17.2.5........................",
    "...4......43.....5.7......4.......4..........2.....87..6...8.5....9...614........",
    "..3..6.......................9..3178.1..8..39....1..6.1..325.....................",
    "7.....49.4.51....7.2......1......5.....2.6.3.6.....2....7.......3................",
    "742..........4.2.....26.7414.....1.......2.....94..35............................",
    "...579.6.......2.............13...5......1...2.......3...9.......4...9..169......",
    "..........7....3..........4..5...81.2.......331......57.................98..725..",
    "....2.....3.1...........9..8975...16......7.33.........234...8...................",
    ".....6....5.2.3.....6....3..64..5......6....9....47.......6...28........6........",
    "234198765....6...4.............76..2..............1.5.7..........................",
    "1...8........9........4...8.....2..6....34.......6..2....4.....79.61........2....",
    "7...5...........7.1...9..8..........5.7.8.......4....2....1.39..1.92.............",
    "....58.......46.......3.6..9...........4.....3..8.........8...3....91.8.7...2....",
    "3....2..94....3......8.....7.34..2...8..2......5....9.91.......8.................",
];

/*
$(document).ready(function() {

    // ----------------------------------------------------------------------------
    //function to generate a new sudoku board
    function generateSudoku() {
        var randomLine = Math.floor(Math.random() * (allSudoku.length - 1));
        console.log(allSudoku[randomLine]);

        var index = 0;
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
<<<<<<< HEAD:js/generate.js
                sudoku[i][j] = allSudoku[randomLine][index];
                if (sudoku[i][j] === ".") {
                    sudoku[i][j] = " ";
                } else {
                    sudoku[i][j] = parseInt(sudoku[i][j]);
=======
                sudoku[i][j] = allSudoku[randomLigne][index];
                if (sudoku[i][j] === ".") {
                    sudoku[i][j] = " ";
                } else {
                    sudoku[i][j] = parseInt(sudoku[i][j])
>>>>>>> 492f7d26642e86a66bad3a9cc51c222ff6505af2:ewa/js/generate.js
                }
                index++;
            };
        };
    };

<<<<<<< HEAD:js/generate.js
    // ----------------------------------------------------------------------------
    //function to display the sudoku board
    function displaySudoku() {
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                //$("#sudokuBox").append.(`<div id="sudokuCells${i} ${j}" class="cells"> ${sudoku[i][j]} </div>`);
                $(`<div id="cell${i}${j}" class="cell"> ${sudoku[i][j]} </div>`).appendTo("#sudokuBoard");
            }
        }
    };
=======
>>>>>>> 492f7d26642e86a66bad3a9cc51c222ff6505af2:ewa/js/generate.js

    generateSudoku();
    displaySudoku();

<<<<<<< HEAD:js/generate.js
    $("#generateNew").on("click", function() {
        generateSudoku();
        displaySudoku();
    });
*/



// ----------------------------------------------------------------------------
//function to generate a new sudoku board
$(document).ready(function() {
    $("#generateNew").on("click", function() {
        resetGame();
        generateSudoku();
        displaySudoku();
    });
});

function generateSudoku() {
    var randomLine = Math.floor(Math.random() * (allSudoku.length - 1));
    console.log(allSudoku[randomLine]);

    var index = 0
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            sudoku[i][j] = allSudoku[randomLine][index];
            if (sudoku[i][j] === ".") {
                sudoku[i][j] = " ";
            } else {
                sudoku[i][j] = parseInt(sudoku[i][j]);
            }
            index++;
        };
    };
};
generateSudoku();

// ----------------------------------------------------------------------------
/** Reset game. */
function resetGame() {
    $("#sudokuBoard").html('');
}

// ----------------------------------------------------------------------------
/** Generate HTML sudoku grid.*/

function displaySudoku() {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            //$("#sudokuBox").append.(`<div id="sudokuCells${i} ${j}" class="cells"> ${sudoku[i][j]} </div>`);
            $(`<div id="cell${i}${j}" class="cell"> ${sudoku[i][j]} </div>`).appendTo("#sudokuBoard");
        }
    }
};
displaySudoku();
=======
        //function display sudoku
        function resetGame() {
            $("#grid").html('');
        }

        function displaySudoku() {
            for (let i = 0; i < 9; i++) {
                for (var j = 0; j < 9; j++) {
                    $(`<div id="tile${i}-${j}" class="tile"> ${sudoku[i][j]}</div>`).appendTo('#grid');
                };

            };

        }; //end function displaySudoku()
        function backgroundChange() {
            var nbImage = Math.floor(Math.random() * 9);
            $("body").css("backgroundImage", "url(./images/japan" + nbImage + ".jpg)");
        }
        resetGame();
        backgroundChange();
        displaySudoku();


    } //end function generateSudoku()


    //button Nouveau SUDOKU
    generateSudoku();
    $("#generate").click(generateSudoku);
>>>>>>> 492f7d26642e86a66bad3a9cc51c222ff6505af2:ewa/js/generate.js

// ----------------------------------------------------------------------------
/** Reset of sudoku data.*/