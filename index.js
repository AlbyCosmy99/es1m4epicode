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

function countMaxChar(str) {
    if(!str) return -1

    strArr = str.split('')
    let dict = {}
    strArr.forEach(char => {
        if(!dict[char]) {
            dict[char] = 1
        }
        else {
            dict[char] = dict[char] + 1
        }
    })

    let max = strArr[0]
    for(let i=1;i<strArr.length;i++) {
        if(dict[max] < dict[strArr[i]]){
            max = strArr[i]
        }
    }
    return max
}

function printHash(n) {
    let str = ''
    for(let i=1;i<=n;i++) {
        for(let j=1;j<=n;j++) {
            if(j <= i) str+='#'
        }
        str +='\n'
    }
    if(str!=='') console.log(str)
}