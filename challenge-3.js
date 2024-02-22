function getLargestNumber(numOne, numTwo, numThree) {
    
    if (numOne > numTwo && numOne > numThree) {
        return numOne
    } else if (numTwo > numOne && numTwo > numThree){
        return numTwo
    } else {
        return numThree
    }

}

/* code to test output 

let test1 = getLargestNumber(2, 1, 4)
console.log(test1) */