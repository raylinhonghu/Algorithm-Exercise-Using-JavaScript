/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var tostring = x.toString();
    if(tostring[0] != '-'){
        // convert to array, reverse,convert to string, remove comma, convert to number
        return Number(Array.from(tostring).reverse().toString().replace(/,/g, ''));
    }else{
         var array = Array.from(tostring).reverse();
         // remove negative sign
         delete array[tostring.length-1];
         var num = Number(array.toString().replace(/,/g, ''));
         num = -num;
         // greater than 32 bit return 0
         if (num >  Math.pow(2,31) - 1){
             return 0;
         }else{
             return num;
         }
    }
};
