import MessageMixer from './MessageMixer.js';


import {countCharacter} from './MessageMixer.js';
import {capitalizeFirstCharacterOfWords} from './MessageMixer.js';
import {reverseWord} from './MessageMixer.js';
import {reverseAllWords} from './MessageMixer.js';
import {replaceFirstOccurence} from './MessageMixer.js';
import {replaceAllOccurrences} from './MessageMixer.js';
import {encode} from './MessageMixer.js';
import {palindrome} from './MessageMixer.js';
import {pigLatin} from './MessageMixer.js';




function displayMessage () {
    console.log(`Count Characters:`);
    console.log(countCharacter("What is the color of the sky?", "t"));

   console.log(``);

    console.log(`Capitilize first character of words:`);
    console.log(capitalizeFirstCharacterOfWords("What is the color of the sky?"));

    console.log(``);

    console.log(`Reverse an entire sentence:`);
    console.log(reverseWord("What is the color of the sky?"));

    console.log(``);

    console.log(`Reverse every individual word in a sentence:`);
    console.log(reverseAllWords("What is the color of the sky?"));

    console.log(``);
    
    console.log(`Replace one word with another word:`);
    console.log(replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
    
    console.log(``);

    console.log(`Encode a sentence:`);
    console.log(encode("What is the color of the sky?"));

    console.log(``);

    console.log(`palindrome:`);
    console.log(palindrome(`Reverse`));

    console.log(``);

    console.log(`pig latin:`);
    console.log(pigLatin(`What time is it?`, `z`));
  }

  displayMessage();