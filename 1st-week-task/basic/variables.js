// var 은 재할당과 재선언 모두 가능
var myName = "박서원";
console.log(myName);

myName = "cesw";
console.log(myName);

// let 재할당은 가능하지만 재선언은 불가능
let myName = "박서원";
console.log(myName);
// let myName ="cesw"; -> error

// const 재할당과 재선언 모두 불가능 (상수 선언)
const myName = "박서원";
console.log(myName);
// myName = "cesw"; -> error

// array : 배열 / 요소끼리 타입 같을 필요 X
const arr1 = ['박서원', '떡볶이', 22, true]
const arr2 = Array(1, 2, 3, "a", "b", "c")

// arr1 의 요소를 item으로 가져와 출력
arr1.map((item) => console.log(`${item} 야호`))