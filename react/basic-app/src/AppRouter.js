import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/router/Layout.jsx';
import { Login } from './components/form/Login.jsx'
import { Signup } from './components/form/Signup.jsx'

export default function App() {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route path='/login' element={<Login/>} />    //path와 to가 동일해야함(Lyaout 안에 있는)
                        <Route path='/signup' element={<Signup/>} />    //path와 to가 동일해야함(Lyaout 안에 있는)
                        
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}