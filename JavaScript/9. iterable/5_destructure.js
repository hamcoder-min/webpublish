/**
 * destructure : 구조 분해 할당
 * - 객체의 구조를 분해하여 대입하는 변수에 자동으로 할당
 */

//1. 배열 객체
let numbers = [1, 2, 3, 4, 5];
let aa = numbers;
let bb = numbers[2];
let [a, b, ...nlist] = numbers; //구조 분해 할당

console.log(`aa = ${aa}`);
console.log(`bb = ${bb}`);
console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`nlist = ${nlist}`);    //문자열로 바꿔서 출력
console.log(`nlist = `, nlist);     //배열 자체로 출력

//2. 오브젝트 리터럴
// console.clear();
let hong = {
    name: '홍길동',
    age: 20,
    job: '개발자'
}

// let name = hong.name;
// let age = hong.age;
// let job = hong.job;
let {name, age, job} = hong;    //구조 분해 할당, 프로퍼티 이름을 정확하게 써야함! (name2를 주면 undefined가 뜸)
console.log(`name = ${name}`);
console.log(`age = ${age}`);
console.log(`job = ${job}`);

//오브젝트 리터럴을 반환하는 함수
function createObject() {
    return {
        aname: 'apple',
        emoji: '🍎',
        color: 'red'
    };
}

let { price = 100, color, aname, emoji } = createObject();  //순서는 전혀 상관 없음! 이름을 정확하게 쓰는 것이 중요!
console.log(aname, emoji, color, price);