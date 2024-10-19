function Add(numbers) {
    console.log("Handle Multi-Character Delimiters : ")
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

// Test Cases
console.log(Add("//[***]\n1***2***3"));     // Output: 6
console.log(Add("//[*][%]\n1*2%3"));        // Output: 6
