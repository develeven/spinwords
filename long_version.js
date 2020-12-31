/*
Reverse every word in a string which
contains five or more characters.

To make things more interesting, 
DO NOT USE: split, join, reverse, or map
*/

function spinWords(wordString){
    var characterCounter = 0;
    var spacePosition = [];
    var wordPosition = [0];
    var endPosition = wordString.length-1;
    var newWordString = "";
    var wordLength = 0;

    for(var i=0; i<wordString.length; i++) {
        if (wordString[i] == " ") {
            //find the number of spaces
            spacePosition.push(i);
            //find the position of each word in the string
            wordPosition.push(i+1);
        }
    }
    //The end value is padded by one so that the 
    //subtraction process used to find the length 
    //of the other words, which include a space, 
    //will work for the last word in the wordString
    wordPosition.push(wordString.length+1);
    
    // Diagnostic Logs:
    // console.log(
    //     "\nspacePosition: " + spacePosition + 
    //     " wordPosition: " + wordPosition +
    //     " endPosition: " + endPosition);
    
    //single word: return the word if it is shorter than 5 characters
    if (spacePosition.length == 0 && wordString.length < 5) {
        console.log("one-word no ", wordString.length);

        for (var j=0; j<=endPosition; j++){
            newWordString += wordString[j];
        }
        return newWordString;
    }
    //single word: reverse if it is 5 characters or longer
    if (spacePosition.length == 0 && wordString.length >= 5) {

        for (var j=endPosition; j>=0; j--){
            newWordString += wordString[j];
        }
        return newWordString;
    }
    
    //multiple words: reverse word only if longer than 5 characters
    for (var i=1; i<wordPosition.length; i++) {
        wordLength = wordPosition[i]-wordPosition[i-1] -1;
        if (wordLength >= 5) {
            //add a space between words, except on the first word
            if(i!=1) {
                newWordString += " ";
            }
            //reverse the order of the letters
            for (var j=wordPosition[i]-2; j>=wordPosition[i-1]; j--){
                newWordString += wordString[j];
            }
        }
        else {
            //add a space between words, except on the first word
            if(i!=1) {
                newWordString += " ";
            }
            //keep the same order of letters
            for (var k=wordPosition[i-1]; k<wordPosition[i]-1; k++){
                newWordString += wordString[k];
            }
        }
    }
    return newWordString;
}
//Tests
console.log(spinWords("Welcome"), "\nemocleW");
console.log(spinWords("Hey fellow warriors"), "\nHey wollef sroirraw");
console.log(spinWords("This is a test"), "\nThis is a test");
console.log(spinWords("This is another test"), "\nThis is rehtona test");
console.log(spinWords("You are almost to the last test"), "\nYou are tsomla to the last test");
console.log(spinWords("Just kidding there is still one more"), "\nJust gniddik ereht is llits one more");
console.log(spinWords("Seriously this is the last one"), "\nylsuoireS this is the last one");
