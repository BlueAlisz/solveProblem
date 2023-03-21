function numWaterBottles(numBottles, numExchange) {
    let fullBottle = numBottles;
    let emptyBottle = 0;
    let drinkTime = 0;
    let loop = true;
    while (loop) {
        if (fullBottle != 0) {
            emptyBottle += fullBottle;
            drinkTime += fullBottle;
            fullBottle = 0;
            fullBottle += Math.floor(emptyBottle / numExchange);
            emptyBottle = emptyBottle - (fullBottle * numExchange);
        }
        else {
            loop = false;
        }
    }
    console.log(drinkTime);
    return;
}
numWaterBottles(15, 4);
