// filter even number on an array
const numbers = [4,6,7,9,23,44,78,45];

function filterEvenNumbers(even){
    let newArray = [];
    //condition for filtering even numbers 
    for(const num of even){
        if( num % 2 !== 0){
            newArray.push(num)
        }
    }
    return newArray;
}

const argument = filterEvenNumbers(numbers);
console.log('This is even number array: ',argument)