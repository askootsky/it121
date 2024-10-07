const vowels = ["a", "e", "i", "o", "u",
                "A", "E", "I", "O", "U"];

phrase = prompt("Enter a word or phrase");
document.write("You entered - ", phrase, "<br>");
phrase = phrase.trim(); //this accounts for someone inputting a single letter with spaces on either side

//Check to see if the phrase is valid
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
//so that we can clean up the full translation afterwards.
phraseTranslation = ("");

//Here is where we do the looping.
phraseArray.forEach(translate);

function translate(word)
{
    initial = word.slice(0, 1);

    if (vowels.includes(initial))
    {
        wordTranslation = (word + "way ");
        wordTranslation = wordTranslation.toLowerCase();
        phraseTranslation = phraseTranslation.concat(wordTranslation);
    }
    else
    {
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

//Now we clean up and write out our final phrase
phraseTranslation = phraseTranslation.trim();
document.write(phraseTranslation);