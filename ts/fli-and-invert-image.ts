function flipAndInvertImage(image: number[][]): number[][] {
    for(let i = 0; i < image.length; i++){
        image[i].reverse()
        for(let j = 0; j < image[i].length; j++){
            image[i][j] == 0 ? image[i][j] = 1 :  image[i][j] = 0
        }
    }
    return image
};

flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]])