import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/router/Layout.jsx';
import { Login } from './components/form/Login.jsx'
import { Signup } from './components/form/Signup.jsx'
import { Home } from './components/router/Home.jsx'
import { About } from './components/router/About.jsx'
import { Support } from './components/router/Support.jsx'

export default function App() {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route index element={<Home/>} />      {/* path와 to가 동일해야함(Lyaout 안에 있는 Layout)*/}
                        <Route path='/login' element={<Login/>} />    {/* path와 to가 동일해야함(Lyaout 안에 있는 Layout)*/}
                        <Route path='/signup' element={<Signup/>} />    
                        <Route path='/about' element={<About/>} />
                        <Route path='/support' element={<Support/>} />    
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}