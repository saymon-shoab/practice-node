


// // =============Test Case: 01===========
// function test(){
//   console.log(output);
//   const output = "This is Test";

//   return;
//   function test2(){
//     console.log('This  Sync Test');
//   }
// }

// test();

// // =============Test Case: 02===========

// function test() {
//   console.log('This is Test Function');
// }

// test.name = 'true';
// console.log(test['name'])

// // =============Test Case: 03===========

// (function(){
//   var a = b = 3;
// })();

// console.log("a defined? " + (typeof a !== 'undefined'));
// console.log("b defined? " + (typeof b !== 'undefined'));

// // =============Test Case: 04===========
// function promiseTest() {
//   return new Promise((resolve, reject) => {
//       if(false){
//         resolve("I am resolve");
//       } else{
//         reject("I am reject");
//       }
//     });
// }

// promiseTest()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   }).then(() => {
//     console.log("I am then");
//   })

// // =============Test Case: 05===========
const num = 2;
console.log(num.toString(2))

// // =============Test Case: 06===========
// console.log(false == '0')
// console.log(false === '0')

// // =============Test Case: 07===========
// console.log(1 + +"2" + "2");
// console.log(1 + -"1" + "2");
// console.log("A" - "B" + "2");
// console.log("A" - "B" + 2);

// // =============Test Case: 08===========
// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 == 0.3);

// // =============Test Case: 09===========
// console.log("This is first")

// setTimeout(() => {
//   console.log('This is second')
// });

// Promise.resolve().then(() => {
//   console.log('This is third')
// });

// console.log("This is fourth")

// // =============Test Case: 10===========
// const obj = {
//   name: 'test',
//   age: 10,
//   subject: ['English', 'Math', 'Science'],
// }

// //output:
// const ouput = {
//   name: 'test5',
//   age: 10,
//   subject: ['English', 'Bangla', 'Science'],
// }

// // =============Test Case: 11===========
// const x = (1, 2, 3, 4);
// console.log(x);

// // =============Test Case: 12===========
// const { x, x: y } = { x: 100 };
// console.log("x=", x, "y=", y);

// // =============Test Case: 13===========
// if([]){
//   console.log('This is first console')
// }

// if([] == false){
//   console.log('This is second console')
// } else{
//   console.log('This is third console')
// }

// // =============Test Case: 14===========
// console.log(2..value)

// // =============Test Case: 15===========
// const obj = {
//   name: null,
//   age: undefined,
//   country: 0,
//   isActive: false
// }

// const { name = 'test', age= 50, country = 'Bangladesh', isActive = true } = obj;

// console.log(name, age, country, isActive);

// // =============Test Case: 16===========
// const obj = {
//   age: 40,
//   calculate: function(num) {
//     return this.age + num;
//   }
// }

// console.log(obj.calculate(10));

// const { calculate } = obj;
// console.log(calculate(10));

// // =============Test Case: 17===========
// function test(item, array) {
//   return array.push(item);
// }

// const res = test('c', ['a', 'b']);
// console.log(res)