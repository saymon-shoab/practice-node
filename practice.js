// process.stdin.resume()
// process.stdin.setEncoding('utf8')

// let inputData = '4 8';

// (process.stdin.on('data',function(chunk){
//     const input = inputData.trim().split(/\s+/).map(Number)
//     const A = input[0];
//     const B = input[1];

//     const sum = A+B
//     console.log(sum)
// }))()




//..........
// process.stdin.resume()
// process.stdin.setEncoding('utf8')

// let inputData = '2 3';

// process.stdin.on('data',function(chunk){
//     console.log(inputData)
// })


// Patching array....

const nums = [1,5,10];
const n = 20

// var minPatches = function(nums, n) {
//     const currenSum = nums.reduce((prev,curr)=>prev+curr,0)
//     const requiredElement = n - currenSum;
//     let inserted = false
//     let count = 0
//     for (let i = 0; i < nums.length; i++) {
//         if (requiredElement<nums[i]) {
//             nums.splice(i,0,requiredElement)
//             inserted = true
//             break
//         }
//     }
//     if (!inserted) {
//         nums.push(requiredElement)
//     }
//     return nums
// };


// var minPatches = function(nums, n) {
//     let missing = 1;
//     let patches = 0;
//     let i = 0;
//     while (missing <= n){
//         if (i < nums.length & nums[i] <= missing) {
//             missing += nums[i];
//             i++
//         }else{
//             missing += missing;
//             patches++;
//         }
//     }
//     return patches
// };


// console.log(minPatches(nums,n))