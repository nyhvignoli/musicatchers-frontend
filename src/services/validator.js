export const checkPassword = (password) => {
    if (password.length < 6) {
        window.alert('A senha deve conter no mínimo 6 caracteres');
    };
};