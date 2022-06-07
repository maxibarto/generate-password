let pwCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()+<>?'
let generatePw = document.getElementById("generate-pw")
let pwLength = document.getElementById("pw-length")
let pwBoxes = document.querySelectorAll(".pw-box")
let randomCharacter = ""



function generatePassword(){
    for(let c = 0; c < pwBoxes.length; c++){
        for(let i = 0; i < pwLength.value; i++){
            let getRandomCharacter = Math.floor(Math.random()* pwCharacters.length)
            randomCharacter += pwCharacters[getRandomCharacter]
        }
        pwBoxes[c].value = randomCharacter
        randomCharacter = ""
    }
}