
//sum all of array elements
const numbers = [34,67,89,23,78];

function sumArray(number){
    let sum = 0;
    for(const num of number){
        sum = sum+num;
    }
    return sum
}

const argumnetPerameter = sumArray(numbers);
console.log(argumnetPerameter);