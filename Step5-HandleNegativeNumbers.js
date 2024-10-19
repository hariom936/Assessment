function Add(numbers) {
    console.log("Handle Negative Numbers : ")
    if (numbers === "") {
        return 0;
    }

    let delimiter = ",";
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        delimiter = parts[0].substring(2);
        numbers = parts[1];
    }

    const numArray = numbers.split(new RegExp(`[${delimiter}\n]`)).map(Number);

    // Handle negative numbers
    const negatives = numArray.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error("negatives not allowed: " + negatives.join(", "));
    }

    return numArray.reduce((sum, num) => sum + num, 0);
}

// Test Cases
console.log(Add("//;\n1;2"));     // Output: 3
console.log(Add("1,-2"));         // Throws Error
