class User {
    #id
    #pwd
    constructor(id, pwd) {
        this.#id = id;
        this.#pwd = pwd;
    }
    getId = () => this.#id;
    setId = (id) => this.#id = id;

    getPwd = () => this.#pwd;
    setPwd = (pwd) => this.#pwd = pwd;
}

function loginCheck() {
    const id = document.querySelector('#id');
    const pwd = document.querySelector('#pwd');

    if (id.value === '') {
        alert('아이디를 입력해주세요.');
        id.focus();
    } else if (pwd.value === '') {
        alert('패스워드를 입력해주세요.');
        pwd.focus();
    } else {
        let user = new User(id.value, pwd.value);

        const did = 'test';
        const dpwd = '1234';
    
        if(did === user.getId() && dpwd === user.getPwd()) {
            alert('로그인 성공!');
        } else {
            alert('로그인 실패!');
            id.value = '';
            pwd.value = '';
            id.focus();
        }
    }

}