"use strict"

const board = document.querySelector('.board');

console.log(board);
const rowsCount = 4;
const columnsCount = 4;
const firstColor = '#fff';
const secondColor = '#000';
let HTML = '';
board.innerHTML = HTML;

for( let y=1; y<=rowsCount; y++){

    HTML = `<div class="row">`;

        for ( let x=1; x<=columnsCount; x++){

            HTML += `<div class="cell"
                    style="background-color: red;>
                    [${x}, ${y}]
                    </div>`;
            
        }

    HTML += `</div>`;
    board.innerHTML += HTML;

}

// const someThingNew = `llvfghjnbvghjsd ${HTML} ${19+87} CDCD`
// let HTML = '<div class="row">row1</div>';
// board.innerHTML = HTML;
// HTML = '<div class="row">row2</div>';
// board.innerHTML += HTML;