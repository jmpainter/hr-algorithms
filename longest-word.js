function longestEvenWord(sentence) {
  stringArr = sentence.split(' ');
  stringArr = stringArr.filter(word => word.length % 2 === 0);
  if (stringArr.length === 0) {
    return '00';
  }
  let maxLengthString = '';
  for (string of stringArr) {
    if (string.length > maxLengthString.length) {
      maxLengthString = string;
    }
  }
  return string;
}

const sentence = 'The brown cat is around town';
console.log(longestEvenWord(sentence));
