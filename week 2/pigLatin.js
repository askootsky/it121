//Pig Latin Translator
//Written by: Austin Skootsky
//Written on: 10/6/24

//Establish an array of vowels for use later.
//This program assumes "Y" is not a vowel.
const vowels = ["a", "e", "i", "o", "u",
                "A", "E", "I", "O", "U"];

phrase = prompt("Enter a word or phrase");
document.write("You entered - ", phrase, "<br>");
phrase = phrase.trim(); //This accounts for someone inputting extraneous spaces on either side of their input.

//Check to see if the phrase is invalid (ie: if the input was nothing or a single letter)
if (phrase == "")
{
    document.write("You entered nothing. I can't translate that.");
}
else if (phrase.length < 2)
{
    document.write("You entered a single letter. I can't translate that.");
}
//If it is valid, turn the phrase into an array of strings so we can loop over each word later.
else if (phrase.includes(" "))
{
    document.write("You entered multiple words.<br>");
    document.write("Here is the pig latin translation of your phrase:<br>");
    phraseArray = phrase.split(" ");
}
else
{
    document.write("You entered a single word.<br>");
    document.write("Here is the pig latin translation of your word:<br>");
    phraseArray = [phrase];
}

//When we loop over each word, we are going to add each translated word to this string
//so that we can trim off extraneous spaces at the end.
phraseTranslation = ("");

//Here is where we do the looping.
phraseArray.forEach(translate);

function translate(word)
{
    //We grab the first character of each word
    initial = word.slice(0, 1);

    //We check to see if the first character of each word is
    //in our array of vowels.
    if (vowels.includes(initial))
    {
        //If so, we translate the word according to vowel rules
        //and append the word to our larger translation string.
        wordTranslation = (word + "way ");
        wordTranslation = wordTranslation.toLowerCase();
        phraseTranslation = phraseTranslation.concat(wordTranslation);
    }
    else
    {
        //If the first letter is NOT in our array of vowel,
        //we need to grab the second character and repeat the check.
        //After, we translate the word according to consonant rules
        //and append it to the larger translation string.
        second = word.slice(1,2);
        if (vowels.includes(second))
        {
            oneConsonant = word.substring(1);
            wordTranslation = (oneConsonant + initial + "ay ");
            wordTranslation = wordTranslation.toLowerCase();
            phraseTranslation = phraseTranslation.concat(wordTranslation);
        }
        else
        {
            twoConsonants = word.substring(2);
            wordTranslation = (twoConsonants + initial + second + "ay ");
            wordTranslation = wordTranslation.toLowerCase();
            phraseTranslation = phraseTranslation.concat(wordTranslation);
        }
    }
}

//Now we trim the extraneous space at the end of our translation string
//and then print it out for the user.
phraseTranslation = phraseTranslation.trim();
document.write(phraseTranslation);