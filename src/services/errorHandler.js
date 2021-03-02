export const loginError = (message) => {
    let finalMessage = "";

    if (message.includes("User not found")) {
        finalMessage = "E-mail não está cadastrado";
    } 

    if (message.includes("Incorrect password")) {
        finalMessage = "Senha incorreta";
    };

    return finalMessage;
};

export const signupError = (message) => {
    let finalMessage = "";

    if (message.includes("Email or nickname already registered")) {
        finalMessage = "E-mail ou nickname já cadastrados";
    };

    return finalMessage;
};