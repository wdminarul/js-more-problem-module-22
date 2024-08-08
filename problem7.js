//Remove duplicates number from array

const arryNumbers = [2,3,4,5,6,7,8,4,2,5,4,3];

function removeDuplicates(numbers){
    const newArray = [];
    for(const number of numbers){
        if(newArray.includes(number) === false){
            newArray.push(number);
        }
    }
    return newArray
}

console.log(removeDuplicates(arryNumbers));