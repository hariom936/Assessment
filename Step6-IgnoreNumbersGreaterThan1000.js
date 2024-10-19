function Add(numbers) {
    console.log("Ignore Numbers Greater Than 1000 : ")
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

    const negatives = numArray.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error("negatives not allowed: " + negatives.join(", "));
    }

    return numArray.filter(num => num <= 1000).reduce((sum, num) => sum + num, 0);
}

// Test Cases
console.log(Add("1,1001"));       // Output: 1
console.log(Add("//;\n1001;2"));  // Output: 2
