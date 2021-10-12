// const val4 = {
//   name: "aaa",
//   age: "28"
// };

// console.log(val4);
// val4.addres = "add";

// const val5 = ["dog", "cat"];

// console.log(val5);

// val5[0] = "bbb";

// val5.push("monky");

// console.log(val5);

// /**
//  * tennpure-tomojitretu
//  */
// const name = "noda";
// const age = "28";

// const msg2 = `私の名前は${name}です。${age}です。`;

// console.log(msg2);

// /**
//  * アロー関数
//  */

// function func1(str) {
//   return str;
// }

// console.log(func1("func1です。"));

// const func2 = (str) => {
//   return str;
// };

// console.log(func2("func2です。"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

// const myp = {
//   name: "noda",
//   age: 28
// };

// const msg3 = `${myp.name}${myp.age}`;

// console.log(msg3);

// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(...arr1);

// const arr2 = [1,2,3,4,5];
// const [num1,num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// const arr4  = [10,20];
// const arr5  = [30,40];
// const arr6  = [...arr4];
// console.log(arr6);

// const arr7= [...arr4,...arr5];
// console.log(arr7);

// const nameArr = ["AA","AB","BB"];
// // for(let index  = 0; index < nameArr.length; index++){
// //   console.log(nameArr[index])
// // }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })

//   console.log(nameArr2)

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num)=>{
//   return num % 2 === 0;
// });

// console.log(newNumArr);

// const nameArr = ["AA", "AB", "BB"];

// const newnameArr = nameArr.filter((name) => {
//   return (name = "AA");
// });

// console.log(newnameArr);

// const nameArr = ["AA", "AB", "BB"];
// const nernamearr = nameArr.map((name) => {
//   if(name === "AA"){
//     return name
//     }else{
//       return `${name}san`
//     }
// });

// console.log(nernamearr);

// const val1 = 1>0?'BIG':'SMALL'
// console.log(val1);
const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100Orver" : "OK";
};

console.log(checkSum(50, 60));
