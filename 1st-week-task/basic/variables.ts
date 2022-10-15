const isLiked: boolean = true;
console.log(`${typeof isLiked}, ${isLiked}`)

const str: string= 'hello!'
console.log(`${typeof str}, ${str}`)

let num: number = 31
console.log(`${typeof num}, ${num}`)

// let a: number[] = [1,1,'hello'] -> number가 아닌 값이 있어 error

// 위가 더 효율적임 (type[])
const arr3: Array<string> = ['hello', 'world']

// javascript 객체와 완전히 동일
const foo1 = (a: Object) => {
    console.log(a)
}

// js에서 추가된 객체 타입으로, 원시 타입은 들어올 수 없음
// 대문자보다 좀 더 엄격함
const foo2 = (a: object) => {
    console.log(a)
}

const hello = (name: string) => {
    console.log(`Hello ${name}`)
}

const sum = (a: number,b: number): number => {
    return a + b;
}

// * as

const a: any ='psw'
// any 로 해두면 원래 str일 때 보여줘야하는 추천 함수들을 띄워주지 않음
// 그 때 as를 사용하여 다음과 같이 타입을 단언해줄 수 있다.
const len = (a as string).length

// * angle bracket

const b: any='sw'
const len2 = (<string>b).length