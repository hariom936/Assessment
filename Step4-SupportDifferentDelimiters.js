function Add(numbers) {
    console.log("Support Different Delimiters : ")
    if (numbers === "") {
        return 0;
    }

    let delimiter = ",";
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        delimiter = parts[0].substring(2); // Get the custom delimiter
        numbers = parts[1]; // Remaining numbers
    }

    const numArray = numbers.split(new RegExp(`[${delimiter}\n]`)).map(Number);
    return numArray.reduce((sum, num) => sum + num, 0);
}

// Test Cases
console.log(Add("//;\n1;2"));     // Output: 3
console.log(Add("//:\n1:2:3"));   // Output: 6
