//Find prime numbers

function isPrime(number){
    for(let i = 2; i <=Math.sqrt(number); i++){
        if(number % i === 0){
            return false;
        }
        else{
            return true;
        }
    }
}

console.log(isPrime(7))
console.log(isPrime(12))
console.log(isPrime(11))
console.log(isPrime(9))