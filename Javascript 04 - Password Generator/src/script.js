const slider = document.getElementById("slider");
const options = document.querySelectorAll("input[type=checkbox]");
const passwordInput = document.querySelector("input[type=text]");
const copyIcon = document.getElementById("copyIcon");

const characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+~`|}{[]:;?><,./-="
}

const generatePassword = () => {
    let passwords = "",
        randomPasswords = "",
        excludeDuplicate = false,
        passLength = slider.value;

    options.forEach(option => {
        if (option.checked) {
            if (option.id !== "excludeDuplicate" && option.id !== "includeSpaces") {
                passwords += characters[option.id];
            } else if (option.id === "includeSpaces") {
                passwords += ` ${passwords} `;
            } else {
                excludeDuplicate = true;
            }
        }
    });

    for (let i = 0; i < passLength; i++) {
        let randomChar = passwords[Math.floor(Math.random() * passwords.length)];
        if (excludeDuplicate) {
            !randomPasswords.includes(randomChar) || randomChar === " " ? randomPasswords += randomChar : i--;
        } else {
            randomPasswords += randomChar;
        }
    }
    passwordInput.value = randomPasswords;
}


const updateSlider = () => {
    document.querySelector("#length").innerText = slider.value;
    generatePassword();
}

const copyPassword = () => {
    navigator.clipboard.writeText(passwordInput.value);
    copyIcon.innerText = "check";
    copyIcon.style.color = "#4285f4";
    setTimeout(() => {
        copyIcon.innerText = "content_copy";
        copyIcon.style.color = "#707070";
    }, 1500);
}

copyIcon.addEventListener("click", copyPassword);
slider.addEventListener("input", updateSlider);
document.querySelector("button").addEventListener("click", generatePassword);
