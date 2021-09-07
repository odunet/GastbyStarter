const shifter = (word) => {
  let newWord = ''
  let newValue
  for (let letter of word) {
    let asciiC = letter.charCodeAt(0)

    if (asciiC >= 65 && asciiC <= 90) {
      if (asciiC < 78) {
        newValue = String.fromCharCode(asciiC + 13);
      } else {
        let shift = 13 - (90 - asciiC)
        newValue = String.fromCharCode(65 + shift - 1)
      }
    }
    else if (asciiC >= 97 && asciiC <= 122) {
      if (asciiC < 110) {
        newValue = String.fromCharCode(asciiC + 13);
      } else {
        let shift = 13 - (122 - asciiC)
        newValue = String.fromCharCode(97 + shift - 1)
      }
    }
    else {
      newWord += letter
      continue
    }
    newWord += newValue
  }
  return newWord
}

export default shifter
