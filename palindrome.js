/**
 * @param {number} x
 * @return {boolean}
 */


var isPalindrome = function(x) {
    let arr = Array.from(x.toString());
    let arrrev = Number(arr.reverse().toString().replace(/,/g, ''));

    if(arr.length == 1) return true;
    if(x == arrrev){
        return true;
    }else{
        console.log(x);
        console.log(arrrev);
        return false;
    }
};


// my method didnt work when i compare two same arrays

// let arr = Array.from(x.toString());
// let arrrev = arr.reverse();
// arr = Array.from(x.toString());
//
// if(arr.length == 1) return true;
// if(arr === arrrev){
//     return true;
// }else{
//     return false;
// }
// };
