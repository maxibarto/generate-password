let pwCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()+<>?'
let generatePw = document.getElementById("generate-pw")
let pwLength = document.getElementById("pw-length")
let pwBoxes = document.querySelectorAll(".pw-box")
let randomCharacter = ""


function generatePassword(){
    if(pwLength.value !== ""){
        for(let c = 0; c < pwBoxes.length; c++){
            for(let i = 0; i < pwLength.value; i++){
                let getRandomCharacter = Math.floor(Math.random()* pwCharacters.length)
                randomCharacter += pwCharacters[getRandomCharacter]
            }
            pwBoxes[c].value = randomCharacter
            randomCharacter = ""
        }
        pwLength.value = ""
        document.getElementById("alert-length").classList.remove('alert-message')
    } else{
        document.getElementById("alert-length").className = 'alert-message'
    }
}

//Copy password
for(let i = 0; i < pwBoxes.length; i++ ){
    pwBoxes[i].addEventListener("click", function(){ 
        navigator.clipboard.writeText(this.value).then(function() {
            alert('Password copied to the clipboard!')
        }, function(err) {
            alert('Could not copy text: ', err)
        });
    });
}
