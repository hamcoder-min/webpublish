import { useEffect, useState } from "react";

export function Counter({click, total, init}) {
    const [number, setNumber] = useState(0);

    //useEffect : Counter 컴포넌트 로딩 시 최초에 처음 실행되는 함수
    //값이 변경될 때마다 재호출 -> dependencies 사용
    //useEffect(callback함수() => {}, dependencies[])
    useEffect(() => {
        setNumber(0);
    }, [init]);

    const handleClickIncrement = () => {
        if(number < 10) {
            setNumber(number + 1);  //자식 자신의 상태 변경
            click("+");             //부모에게 "나 + 눌렀어!" 신호
        } else setNumber(number);
        
    }
    const handleClickDecrement = () => {
        if(number > 0) {
            setNumber(number - 1);  //자식 자신의 상태 변경
            click("-");             //부모에게 "나 - 눌렀어!" 신호
        } else setNumber(0);
    }
    const handleClickInit = () => {
        click(0);   //부모의 click 클릭 함수 호출
    }

    return (
        <div className="counter-container">
            <div>
                <span className="number">{number}</span>
                <span>/</span>
                <span className="total-number">{total}</span>
            </div>
            <div>
                <button type="button" 
                        onClick={handleClickDecrement}>-(감소)</button>
                <button type="button" 
                        onClick={handleClickIncrement}>+(증가)</button>
                <button type="button" 
                        onClick={handleClickInit}>초기화</button>
            </div>
        </div>
    );
}