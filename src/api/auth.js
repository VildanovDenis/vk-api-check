export const auth = () => {
    return new Promise((resolve, reject) => {
        const successAuth = 'connected';
        window.VK.Auth.login(response => {
            if (response.status === successAuth) {
                resolve(response.session);
            } else {
                const err = new Error('Ошибка авторизации');
                reject(err);
            }
        });
    })
}