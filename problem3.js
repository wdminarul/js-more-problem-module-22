//find a maximum number from an array
const numbers = [1,2,3,4,5];
function findMax(array) {
    let max = array[0]; 
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]; 
        }
    }

    return max; 
}


const maximum = findMax(numbers);
console.log('This is maximum number in array : ', maximum); 
