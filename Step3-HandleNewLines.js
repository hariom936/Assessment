function Add(numbers) {
    console.log("Handle New Lines : ")
    if (numbers === "") {
        return 0;
    }

    // Step 3: Handle new lines
    const numArray = numbers.split(/[\n,]/).map(Number);
    return numArray.reduce((sum, num) => sum + num, 0);
}

// Test Cases
console.log(Add("1\n2,3"));     // Output: 6
console.log(Add("1\n2\n3"));     // Output: 6
