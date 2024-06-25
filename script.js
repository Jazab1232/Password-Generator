let passwordBox = document.getElementById('password');

function createPassword() {
    let length = 12;
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerCase = "abcdefghijklmnopqrstuvwxyz";
    let number = "0123456789";
    let symbols = "!@#$%^&*_+-={}[]|:;<>,.?/";

    let possibleString = upperCase + lowerCase + number + symbols;
    let generatedPassword = '';

    for (let i = 0; i < length; i++) {
        let randomCharacter = possibleString.charAt(Math.floor(Math.random() * possibleString.length));
        generatedPassword += randomCharacter;
    }

    passwordBox.value = generatedPassword;
    console.log(generatedPassword);
}

function  copyPassword(){
    passwordBox.select()
    document.execCommand('copy')

}