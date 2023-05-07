const passwordInput = document.getElementById('password')
const passwordCopyIcon = document.getElementById('passwordCopy')
const passwordGenerateBtn = document.getElementById('generateBtn')
const passwordBlur = document.querySelector('.blur')
const passwordCopyInformation = document.querySelector('.password-copy-information-text')

const generatePassword = () => {

    let passwordLength = 14,
          passwordCharacter = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!+-*",
          retValue = ""

    for (let i = 0, n = passwordCharacter.length; i < passwordLength; ++i) {
        retValue += passwordCharacter.charAt(Math.floor(Math.random() * n))
    }

    passwordInput.textContent = retValue

    passwordInput.classList.add("blur")
    passwordInput.classList.remove("password-selection")

    passwordCopyInformation.style.display = "none"

    // console.log("Rastgele sifre uretildi!")
}

const copyPassword = async () => {

    let copyPassword = passwordInput.textContent
    await navigator.clipboard.writeText(copyPassword)
    
    if (!copyPassword == "") {
        passwordCopyInformation.style.display = "block"
    }

    // console.log('Parola kopyalandi!')
}

const deleteBlur = () => {

    passwordInput.classList.remove("blur")
    passwordInput.classList.add("password-selection")

    // console.log('Blur kalkti!')
}

passwordBlur.addEventListener('click', deleteBlur)
passwordCopyIcon.addEventListener('click', copyPassword)
passwordGenerateBtn.addEventListener('click', generatePassword)