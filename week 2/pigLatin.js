const vowels = ["a", "e", "i", "o", "u"];

phrase = prompt("Enter a phrase");
document.write("You entered - ", phrase, "<br>");

if (phrase.includes(" "))
{
    document.write("You entered multiple words.<br>");
    phraseArray = phrase.split(" ");
}
else
{
    document.write("You entered a single word.<br>");
    phraseArray = [phrase];
}

document.write("Here is the pig latin translation of your phrase:<br>");

phraseArray.forEach(translate);

function translate(word)
{
    initial = word.slice(0, 1);

    if (vowels.includes(initial))
    {
        document.write(word, "way ");
    }
    else
    {
        second = word.slice(1,2);
        if (vowels.includes(second))
        {
            oneConsonant = word.substring(1);
            document.write(oneConsonant, initial, "ay ");
        }
        else
        {
            twoConsonants = word.substring(2);
            document.write(twoConsonants, initial, second, "ay ");
        }
    }
}