const ksBFS = (() => {

    const min = 0;
    const max = 9;

    const run = (start, target) => {
        const visitedNodes = {};
        visitedNodes[start[0]] = [start[1]];
        const firstMoves = generateMoveSet(start);
        let moves = [...firstMoves];
        while(moves.length != 0) {
            const moveSet = moves.shift();
            const move = moveSet[moveSet.length - 1]
            //check if we made it
            if(target[0] === move[0] && target[1] === move[1]) {
                moveSet.unshift(start);
                return moveSet;
            }
            //if we didn't make it - 
            //Add to visited
            addToVisitedNodes(visitedNodes, move);
            //Generate new moves;
            const newMoves = generateMoveSet(move, moveSet);
            //Filter out nodes we've already visited;
            const filteredMoves = newMoves.filter((move) => haveVisited(visitedNodes, move[move.length - 1]));
            moves = moves.concat(filteredMoves);
        }
    };

    const addToVisitedNodes = (vN, move) => {
        if(!vN[move[0]]) {
            vN[move[0]] = [];
        }

        if(vN[move[0]].indexOf(move[1]) < 0) {
            vN[move[0]].push(move[1]);
        }
    }

    const haveVisited = (vN, move) => {
        return !vN[move[0]] || vN[move[0]].indexOf(move[1]) < 0;
    }

    const generateMoveSet = (currentLocation, baseMoves = []) => {
        const [x, y] = currentLocation;
        const newMoves = [];
        if(x - 2 > min && y + 1 < max) {
            newMoves.push([...baseMoves, [x- 2, y + 1]]);
        }
        if(x - 2 > min && y - 1 > min) {
            newMoves.push([...baseMoves, [x -2, y -1]]);
        }
        if(x + 1 < max && y - 2 > min) {
            newMoves.push([...baseMoves, [x +1, y -2]]);
        }
        if(x + 1 < max && y + 2 < max) {
            newMoves.push([...baseMoves, [x +1, y + 2]]);
        }
        if(x - 1 > min && y + 2 < max) {
            newMoves.push([...baseMoves, [x -1, y + 2]]);
        }
        if(x - 1 > min && y - 2 > min) {
            newMoves.push([...baseMoves, [x -1, y - 2]]);
        }
        if(x + 2 < max && y + 1 < max) {
            newMoves.push([...baseMoves, [x + 2, y + 1]]);
        }
        if(x + 2 > min && y - 1 > min) {
            newMoves.push([...baseMoves, [x + 2, y - 1]]);
        }
        return newMoves;
    }

    return {
        run
    }
})();