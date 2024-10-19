function Add(numbers) {
    console.log("Handle Multiple Numbers : ")
    if (numbers === "") {
        return 0;
    }

    // Step 2: Allow multiple numbers
    const numArray = numbers.split(",").map(Number);
    return numArray.reduce((sum, num) => sum + num, 0);
}

// Test Cases
console.log(Add("1,2,3"));     // Output: 6
console.log(Add("10,20,30"));  // Output: 60
