/*
 *palindrome number fine function start
*/
const isPalindrom = (p)=> {
    return p<0 ? false : p === +p.toString().split('').reverse().join('')
}

const res = isPalindrom(101);

// console.log(res);

/*
 *  -----palindrome number fine function end-----
*/

/*
 * fibonacchi number find function start
*/

const findFibonacchi = (n)=> {
    let arr = [0,1]
    for (let i = 2; i < n; i++) {
      arr.push(arr[i-1]+arr[i-2])  
    }
    return arr
}

console.log(findFibonacchi(7))

/*
 * -------fibonacchi number find function end----------
*/