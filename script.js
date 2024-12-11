1task
function validateName(){
    let input = document.getElementById('nameInput').value;
    let error = document.getElementById('error');

    for (let i = 0; i < input.length; i++) {
        debugger
        if (/[0-9\\.,:]/).test(input[i]) {   //Check if input contains a digit          //Проверить, содержит ли ввод цифру
            error.innerText = 'Name cannot contain digits.';   //В имени присутствуют недопустимые символы
            document.getElementById('nameInpuy').value = input.replace(/[0-9\\.,:]/);
             //Remove digits from input    Удалить цифры из ввода
        return
        }
    }
    error.innerText = '';
}

