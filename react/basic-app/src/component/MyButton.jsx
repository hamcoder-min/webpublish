
export function MyButton({name, type, style, handleProps}) {  //props = {name:"회원가입"}
    const handleClick = () => {
        console.log(`(자식)버튼클릭! --------> ${name}`);
        handleProps(`버튼클릭! --------> ${name}`);
    }

    return (
        <button type={type} 
                class={style}
                onClick={handleClick}
                >{name}</button>
    );
}