function numWaterBottles(numBottles: number, numExchange: number): number {
  let fullBottle: number = numBottles;
  let emptyBottle: number = 0;
  let drinkTime: number = 0;
  let loop = true;
  while (loop) {
    if (fullBottle != 0) {
      emptyBottle += fullBottle;
      drinkTime += fullBottle;
      fullBottle = 0;

      fullBottle += Math.floor(emptyBottle / numExchange)
      emptyBottle = emptyBottle - (fullBottle * numExchange)
    
    } else {
      loop = false;
    }
  }
  console.log(drinkTime);
  return drinkTime; 
}

numWaterBottles(15, 4);
