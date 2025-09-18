import axios from 'axios';

/**
 * axios 함수를 이용하여 데이터 가져오기
 */
export const axiosData = async (url) => {   //파싱 작업 필요 X
    const response = await axios.get(url);
    return response.data;
}

/**
 * fetch 함수를 이용하여 데이터 가져오기
 */
export const fetchData = async (url) => {
    const response = await fetch(url);
    const jsonData = await response.json(); //JSON 타입으로 파싱 진행(스트링타입에서 json 타입으로 바꿔줌)
    return jsonData;
}