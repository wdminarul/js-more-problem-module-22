// Count same number in an array
const array = [2,3,4,5,6,7,2,4,5,2,2,2]
function countOccurrences(arr,targetnumber){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === targetnumber){
            count++;
        }
    }
    return count;
}

console.log(countOccurrences(array, 2))