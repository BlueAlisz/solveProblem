//Determine Whether Matrix Can Be Obtained By Rotation
function findRotation(mat: number[][], target: number[][]): boolean {
    // Rotate matrix 90 degrees
    const rotate = (matrix: number[][]): number[][] => matrix.map((row, i) =>
        row.map((_, j) => matrix[matrix.length - 1 - j][i])
    )
    mat.map((row, i) => row.map((_, j) => console.log(j,mat.length - 1 - j, i)))
    const targetJsonStr = JSON.stringify(target);

    // It will be first check of initial matrix + 3 rotations
    let rotations: number = 4;
    while (rotations--) {
        if (JSON.stringify(mat) == targetJsonStr) return true;
        mat = rotate(mat);
    }

    return false;
};

findRotation([[0,0,0],[0,1,0],[1,1,1]],[[1,1,1],[0,1,0],[0,0,0]])