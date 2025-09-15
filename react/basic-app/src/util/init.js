
export function initForm (initArray) {
    return initForm = initArray.reduce((acc, cur) => {
        acc[cur] = "";
        return acc;
    }, {});

}