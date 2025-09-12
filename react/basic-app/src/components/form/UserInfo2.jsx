import { useState } from 'react';
import { TextInput } from './TextInput.jsx';

export function UserInfo2() {
    const forms = [
        { "lable": "이름", "type": "text", "name": "name", "msg": "이름을 입력해주세요." },
        { "lable": "나이", "type": "text", "name": "age", "msg": "나이를 입력해주세요." },
        { "lable": "주소", "type": "text", "name": "address", "msg": "주소를 입력해주세요." },
        { "lable": "이메일", "type": "text", "name": "email", "msg": "이메일을 입력해주세요." },
        { "lable": "취미", "type": "text", "name": "hobby", "msg": "취미를 입력해주세요." }
    ];
    const [formData, setFormData] = useState({name:"", age:"", address:"", email: "", hobby: ""});
    const handleChangeForm = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setFormData({...formData, [name]: value})
    }


    return (
        <>
            <h1>UserInfo2</h1>
            <form>
                <ul>
                    {!forms || forms.map(item => 
                        <li>
                            <label>{item.lable}</label>
                            <TextInput  item={item} 
                                        value={formData[item.name]}
                                        handleChange={handleChangeForm}/>
                        </li>
                    )}
                </ul>
            </form>
        </>
    );
}