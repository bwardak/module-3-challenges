function allNumbersPositive(numbersArray) {
    
    let numbersPositive;

    for (let i=0; i < numbersArray.length; i++) {
        if (numbersArray[i] >= 0) {
            numbersPositive = true;
        } else {
            return false;
        }
    }

    if (numbersPositive = true) {
        return true;
    }
}

/* code to test output

let test1 = allNumbersPositive([2, 4, 6])
let test2 = allNumbersPositive([-5, 4, 6])
console.log(test1)
console.log(test2) */ 