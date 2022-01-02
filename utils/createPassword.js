const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJFLMNOPQRSTUVWXYZ';
const num = '1234567890';
const symbol = '!@#$%^&*_+=-';

const createPassword = (length, hasNumber, hasSymbol) => {
    let charlist = alpha;
    hasNumber? charlist+=num : '';
    hasSymbol? charlist+=symbol : '';

    let password= '';
    for(let i=0; i<length; i++){
        password += charlist.charAt(Math.floor(Math.random()*charlist.length));
    }
    return password;
}

module.exports = createPassword;