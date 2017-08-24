function translate (str) {
    let vowels = 'aeiouAEIOU';
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        str = words[i];
        if (vowels.indexOf(str[0]) >= 0){
            piglatinWord = str + 'ay';
        } else {
            let firstVowelIndex = 0;
            while (vowels.indexOf(str[firstVowelIndex]) < 0) {
                firstVowelIndex += 1
            }
            if (str[firstVowelIndex] === 'u' && str[firstVowelIndex-1] === 'q') {
                firstVowelIndex += 1;
            }
            piglatinWord = str.slice(firstVowelIndex) + str.slice(0,firstVowelIndex) + 'ay';
        }       
        words[i] = piglatinWord;
    }
    return words.join(' ');
}


