function distributeCandies(candyType) {
    var countType = {};
    for (var i = 0; i < candyType.length; i++) {
        var num = candyType[i];
        countType[num] = countType[num] ? countType[num] + 1 : 1;
    }
    var uniqueCandyTypes = Object.keys(countType).length;
    console.log(uniqueCandyTypes);
    var maxCanEat = candyType.length / 2;
    var canEat = uniqueCandyTypes >= maxCanEat ? maxCanEat : uniqueCandyTypes;
    return canEat;
}
distributeCandies([1, 1, 2, 3]);
