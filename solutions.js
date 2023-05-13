console.log("************* setAlarm **************")
// Write a function named setAlarm that has two arguments.

// The first argument: employed (the boolean true would be passed in as a parameter whenever you are employed)
// The second argument: vacationing (the boolean true would be passed in as a parameter whenever you are on vacation)
// The function should only return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm, of course!). It should return false otherwise.

// function setAlarm(employed, vacationing) {
//     if (employed === true && vacationing === false){
//         console.log(true)
//     } else if (employed === true && vacationing === false){
//         console.log(false)
//     } else if (employed ===false && vacationing === false){
//         console.log(false)
//     } else if (employed === false && vacationing === true){
//         console.log(false)
//     } else {
//         console.log(false)
//     }
// }
function setAlarm(employed, vacationing) {
    if (employed === true && vacationing === false){
        console.log(true)
    }else {
        console.log(false)
    }
   
}

setAlarm(true, true) // => returns false
setAlarm(false, false) // => returns false
setAlarm(false, true) // => returns false
setAlarm(true, false) // => returns true

console.log("************* Count Odd Numbers **************")

//Write a function named oddNumberCount which receives one argument that should be a number. The function should return how many positive odd numbers there are below the number passed into the argument.


function oddNumbersCount(x) {
    const numArr = []
    for (let i = 0; i < x; i++){
        if (i % 2 !== 0){
            numArr.push(i)
        }
    }
    return numArr.length
}

console.log(oddNumbersCount(20))

console.log("************* Disemvoweling Trolls **************")

// Write a function named trollsBeGone which receives one argument that should be a sentence (a string). The function should return a new string with all the vowels removed from the original string.

function trollsBeGone(meanComment) {

}