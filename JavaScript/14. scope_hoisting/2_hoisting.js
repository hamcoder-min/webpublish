/**
 * 호이스팅(Hoisting) : 파일이 호출되면 실행 전 객체를 메모리에 생성하고 로드하는 작업
 * - function 키워드로 정의된 함수
 */
test1();

function test1() {  //호이스팅 작업이 선행 됨!!
    console.log('-----> test1');
}

//변수형 함수 
const test2 = () => {
    console.log('-----> test2');
    
}