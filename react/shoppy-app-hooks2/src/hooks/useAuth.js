import { useContext } from "react"
import { AuthContext } from "../context/AuthContext.js";

export function useAuth() {
    const {isLogin, setIsLogin} = useContext(AuthContext);

    const handleLogin = (id) => {
        setIsLogin(!isLogin);
        const loginInfo = {
            "userId": id,
            "token": "wefsdlfj456465"
        }

        localStorage.setItem('loginInfo', JSON.stringify(loginInfo));   //객체를 문자열로 저장
    }

    const handleLogout = () => {
        alert("로그아웃 되었습니다.");
        setIsLogin(!isLogin);
        localStorage.removeItem("loginInfo");
    }

    return {handleLogin, handleLogout}
}