const kM = (() => {
    const states =  {
        WAITING_TO_START: 0,
        WAITING_FOR_END: 1,
        PROCESSING:2,
        DONE: 3
    }
    
    const state = {
        gameState: states.WAITING_TO_START,
        startingCell: null,
        endingCell: null
    }
    const generateBoard = (height = 8, width = 8, base="main") => {
        const mainDiv = document.getElementById('main');
        mainDiv.innerHTML = "";
        for(let i = 0; i < height; i++) {
            //add a row
            const row = document.createElement('div');
            row.setAttribute('class', 'row');
            for(let j = 0; j < width; j++) {
                //add column
                const cell = document.createElement('div');
                cell.setAttribute('class', 'cell');
                cell.setAttribute('id', `${i+1}${j+1}`);
                row.appendChild(cell);
            }
            mainDiv.appendChild(row);
        }
    }

    const onReset = () => {
        state.gameState = states.WAITING_TO_START,
        state.startingCell = null;
        state.endingCell = null;
        generateBoard();
    }

    const onStartingPointSelection = (cell) => {

    }

    const onEndPointSelection = (cell) => {

    }

    return {
        generateBoard,
        state,
        onReset
    }
})();