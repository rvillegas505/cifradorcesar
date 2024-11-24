// Función para cifrar (Cifrado César)
function encryptPassword() {
    const password = document.getElementById('password').value;
    const shift = parseInt(document.getElementById('shift').value);
    const encryptedPassword = cipher(password, shift);
    document.getElementById('result').innerText = "Contraseña cifrada: " + encryptedPassword;
}

// Función para descifrar
function decryptPassword() {
    const encryptedPassword = document.getElementById('password').value;
    const shift = parseInt(document.getElementById('shift').value);
    const decryptedPassword = cipher(encryptedPassword, -shift);
    document.getElementById('result').innerText = "Contraseña descifrada: " + decryptedPassword;
}

// Función para realizar el cifrado y descifrado
function cipher(str, shift) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const index = alphabet.indexOf(char);
        if (index === -1) {
            result += char; // Si el caracter no está en el alfabeto (ej. espacios, símbolos), no se cambia
        } else {
            let newIndex = (index + shift) % alphabet.length;
            if (newIndex < 0) newIndex = alphabet.length + newIndex; // Ajusta para índices negativos
            result += alphabet[newIndex];
        }
    }
    return result;
}