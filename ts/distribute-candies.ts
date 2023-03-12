function distributeCandies(candyType: number[]): number {
  const countType = {};
  for (let i = 0; i < candyType.length; i++) {
    const num = candyType[i];
    countType[num] = countType[num] ? countType[num] + 1 : 1;
  }
  const uniqueCandyTypes = Object.keys(countType).length;
  console.log(uniqueCandyTypes)
  const maxCanEat = candyType.length / 2;
  const canEat = uniqueCandyTypes >= maxCanEat ? maxCanEat : uniqueCandyTypes;

  return canEat;
}

distributeCandies([1,1,2,3]);
