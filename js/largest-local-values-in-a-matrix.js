function largestLocal(grid) {
    let result = new Array(grid.length - 2).fill(0).map(x => []);
    for (let i = 0; i < grid.length - 2; i++) {
        for (let k = 0; k < grid.length - 2; k++) {
            result[i][k] = Math.max(...grid.slice(i, i + 3).map(row => row.slice(k, k + 3)).flat());
            console.log(...grid);
        }
    }
    return result;
}
;
largestLocal([[9, 9, 8, 1], [5, 6, 2, 6], [8, 2, 6, 4], [6, 2, 2, 2]]);
