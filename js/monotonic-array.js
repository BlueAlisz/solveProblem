function isMonotonic(nums) {
    let temp = null;
    let positive = null;
    let result = true;
    nums.forEach((element, index) => {
        console.log(element);
        if (index == 1) {
            if (element > temp) {
                positive = true;
            }
            else {
                positive = false;
            }
        }
        console.log(`positive: ${positive} temp: ${temp} element: ${element} result: ${result}`);
        if (positive == true && index > 0) {
            if (element < temp) {
                result = false;
            }
        }
        else if (positive == false && index > 0) {
            if (element > temp) {
                result = false;
            }
        }
        temp = element;
    });
    return result;
}
console.log(isMonotonic([1, 2, 2, 3]));
