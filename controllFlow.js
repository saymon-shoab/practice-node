// // // for of loop..

// // let arr = [1,2,3,4,5,6,7]
// // let s = "saymon shoab"
// // for (const n of s) {
// //     if(n===" ") break
// //     console.log(`Each char is ${n}`);
// // }


// // map in javascript..

// // const map = new Map({name:"saymon"})

// // console.log(map.entries)


// // const myObj = {
// //     name:"saymon",
// //     name1:"Shoab"
// // }
// // loops not working like this...
// // for (const [key,value] of myObj) {
// //     console.log(key,value)
// // }

// const myObj = {
//     js: "javascript",
//     py: "python",
//     cpp: "c++",
//     rb: "ruby"
// }

// // for (const [key , value, index] in myObj) {
// //     console.log(`${key} - ${value} - ${index}`)
// // }

// // for (const key in myObj) {
// //     console.log(myObj[key])
// // }


// // const programming = ["java","rb","python","cpp"]

// // for (const key in programming) {
// //     console.log(programming[key])
// // }

// const map = new Map()

// map.set("in","india")
// map.set("bd","bangladesh")
// map.set("ld","London")
// map.set("us","America")

// // for (const key in map) {
// //     console.log(map[key])
// // }

// map.forEach((item,index,array)=>console.log(array))


// destracting in object....


const course = {
    courseNmae: "js in bangla",
    price:"999",
    coursInstructure:"Shoab",
}

// course.coursInstructure 

const {coursInstructure: instructure} = course

console.log(instructure)


const variant = ['color ', 'pancil']


const  mapOperation = variant.map((index, value)=> value.valueOf )
console.log(mapOperation);

function c(a,b) {
    console.log(a+b)
    return a+b
}

const result = c(2,4)

console.log(result)