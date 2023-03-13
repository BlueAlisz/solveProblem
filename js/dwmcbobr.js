//Determine Whether Matrix Can Be Obtained By Rotation
function findRotation(mat, target) {
    // Rotate matrix 90 degrees
    const rotate = (matrix) => matrix.map((row, i) => row.map((_, j) => matrix[matrix.length - 1 - j][i]));
    console.log(mat.map((row, i) => row.map((_, j) => j)));
    const targetJsonStr = JSON.stringify(target);
    // It will be first check of initial matrix + 3 rotations
    let rotations = 4;
    while (rotations--) {
        if (JSON.stringify(mat) == targetJsonStr)
            return true;
        mat = rotate(mat);
    }
    return false;
}
;
findRotation([[0, 0, 0], [0, 1, 0], [1, 1, 1]], [[1, 1, 1], [0, 1, 0], [0, 0, 0]]);
