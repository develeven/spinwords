/*
Reverse every word in a string which
contains five or more characters.

To simplify code, this function will use: 
map, split (or spread), reverse, and join
*/

function spinWords(wordString){
    return wordString
        //separate the string into array elements    
        .split(" ")
        //map: return wordString array after applying the following
        //ternary conditional: if array element string length is greater than or equal to 5
        //true: split, reverse, join 
            //split characters into second array, 
            //reverse the order of the characters,
            //join each character without separator and return
        //false: return the word as is
        .map(word => 
            word.length >= 5 ? 
            word.split("").reverse().join("") :   
            //using spread operator, can also write above as [...word].reverse().join("") :
            word)
        //rejoin each array element into a results string, separated by a spaces
        .join(" ");
}
//Tests
console.log(spinWords("Welcome"), "\nemocleW");
console.log(spinWords("Hey fellow warriors"), "\nHey wollef sroirraw");
console.log(spinWords("This is a test"), "\nThis is a test");
console.log(spinWords("This is another test"), "\nThis is rehtona test");
console.log(spinWords("You are almost to the last test"), "\nYou are tsomla to the last test");
console.log(spinWords("Just kidding there is still one more"), "\nJust gniddik ereht is llits one more");
console.log(spinWords("Seriously this is the last one"), "\nylsuoireS this is the last one");
