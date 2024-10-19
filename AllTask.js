function Add(numbers) {
    if (numbers === "") {
        return 0;
    }

    let delimiters = [","];
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        const delimiterPart = parts[0].substring(2);
        delimiters = delimiterPart.match(/[\[\]]/g) ? delimiterPart.match(/(?<=\[)[^\]]+(?=\])/g) : [delimiterPart];
        numbers = parts[1];
    }

    const regex = new RegExp(`[${delimiters.join("")}\n]`);
    const numArray = numbers.split(regex).map(Number);

    const negatives = numArray.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error("negatives not allowed: " + negatives.join(", "));
    }

    return numArray.filter(num => num <= 1000).reduce((sum, num) => sum + num, 0);
}

// Test Cases with unique messages
console.log("Test Case 1: Add('') -> Output:", Add(""));                       // Output: 0
console.log("Test Case 2: Add('1') -> Output:", Add("1"));                     // Output: 1
console.log("Test Case 3: Add('1,2') -> Output:", Add("1,2"));                 // Output: 3
console.log("Test Case 4: Add('1\\n2,3') -> Output:", Add("1\n2,3"));          // Output: 6
console.log("Test Case 5: Add('//;\\n1;2') -> Output:", Add("//;\n1;2"));      // Output: 3
console.log("Test Case 6: Add('//[***]\\n1***2***3') -> Output:", Add("//[***]\n1***2***3")); // Output: 6
console.log("Test Case 7: Add('//[*][%]\\n1*2%3') -> Output:", Add("//[*][%]\n1*2%3")); // Output: 6
console.log("Test Case 8: Add('1,1001') -> Output:", Add("1,1001"));           // Output: 1
console.log("Test Case 9: Add('//;\\n1001;2') -> Output:", Add("//;\n1001;2")); // Output: 2
