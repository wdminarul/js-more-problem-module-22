

const content = 'This is a content';

function reverseString(str){
    let revContent = str.split('').reverse().join('');
    return revContent
}

console.log(reverseString(content))

