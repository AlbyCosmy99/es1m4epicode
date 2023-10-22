function checkNum(num1, num2) {
    if(num1 === 50 || num2 === 50) return true
    if(num1 + num2 > 50) return true
    return false 
}

function removeChar(str, pos) {
    let strChar = str.split('')
    let arr = strChar.slice(0, pos).concat(strChar.slice(pos + 1, strChar.length))
    return arr.join('')
}

function firstLetters(str) {
    strArr = str.split(' ')
    newStr = ''
    strArr.forEach(word => {
        newStr += word[0].toUpperCase()
    });

    return newStr
}