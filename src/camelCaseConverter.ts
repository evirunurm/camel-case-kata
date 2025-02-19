export function CamelCaseConverter(text: string): string {
    const separatorCharacters = ['-', '_'];

    const getWordsFromString = (text: string): string[] => {
        const space = ' ';
        return text
            .replace(new RegExp(separatorCharacters.join('|'), 'g'), space)
            .split(space)
    }

    const capitalizeWords = (words: string[]): string[] => {
       return words.map((word) => {
           if (word.length === 0) return word;
           return word[0].toUpperCase() + word.slice(1);
       })
    }

    const words = getWordsFromString(text)
    const capitalizedWords = capitalizeWords(words)
    return capitalizedWords.join('');
}
