export function getLetterMatch(guessedWord, secretWord) {
  const secretLetter = new Set(secretWord.split(""));
  const guessedLetter = new Set(guessedWord.split(""));
  return [...secretLetter].filter((letter) => guessedLetter.has(letter)).length;
}
