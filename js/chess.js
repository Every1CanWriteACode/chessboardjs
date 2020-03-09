"use strict"

const board = document.querySelector('.board');

console.log(board);
const rowsCount = 6;
const columnsCount = 6;
const firstColor = '#fff';
const secondColor = '#000';
let color = '';

let HTML = '';
board.innerHTML = HTML;

for( let y=1; y<=rowsCount; y++){

    HTML += `<div class="row"
                  style="height: calc(100% / ${rowsCount});">`;  
        for ( let x=1; x<=columnsCount; x++){

            if ( (x+y)%2 === 0 ){
                color = firstColor;
            } else {
                color = secondColor;
            }
            HTML += `<div class="cell"
                          style="background-color: ${color};
                                 width: calc(100% / ${columnsCount});">
                    </div>`;
            
        }
    HTML += `</div>`    
}

board.innerHTML = HTML;

// const someThingNew = `llvfghjnbvghjsd ${HTML} ${19+87} CDCD`
// let HTML = '<div class="row">row1</div>';
// board.innerHTML = HTML;
// HTML = '<div class="row">row2</div>';
// board.innerHTML += HTML;