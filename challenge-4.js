function getLastName (lastNameArray) {
    let lengthOfArray;
    let lastItemInArray;

    lengthOfArray = lastNameArray.length;
    lastItemInArray = lengthOfArray - 1;

    return lastNameArray[lastItemInArray];
}

/* code testing

let test1 = getLastName(["Ash", "Stu"])
console.log(test1) */