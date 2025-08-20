/**
 * 함수 호출 --> 파라미터 --> 함수의 매개변수에 매핑
 * Rest Parameter(래스트 파라미터) : 여러 개의 파라미터를 전송시 사용
 * Spread operator(스프레드 연산자 : ...)
 */

add(1, 2);
add(1, 2, 3, 6, 2, 5, 9);
add(1, 2, 3, 6, 2, 5, 9, 10, 45, 11, 23);

function add(... numbers) {
    return a + b;
}