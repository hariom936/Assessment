function Add(numbers) {
    console.log("Basic Functionality : ")
    // Step 1: Handle empty string
    if (numbers === "") {
        return 0;
    }

    // Step 2: Handle one or two numbers
    const numArray = numbers.split(",").map(Number);
    return numArray.reduce((sum, num) => sum + num, 0);
}

// Test Cases
console.log(Add(""));        // Output: 0
console.log(Add("1"));       // Output: 1
console.log(Add("1,2"));     // Output: 3
