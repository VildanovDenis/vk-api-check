export class VkService {
    static inited = false;
    static version = '5.78';
    static authError = {
        not_authorized: 'пожалуйста разрешите доступ',
        unknown: 'пожалуйста войдите через вконтакте, и разрешите доступ'
    }

    /**
     * Инициализирует вк апи
     * @param {number} apiId айди приложения
     */
    static subscribeVkInit(apiId) {
        if (window.VK) {
            window.VK.init({
                apiId
            });
            VkService.inited = true;
            return
        }

        let attempts = 0;
        const CHECK_TIMEOUT = 500;
        const MAX_ATTEMPTS = 10;

        const checkCallback = () => {
            if (attempts >= MAX_ATTEMPTS) {
                return;
            }

            attempts++;

            if (window.VK) {
                window.VK.init({
                    apiId
                });
                VkService.inited = true;
                return
            }

            setTimeout(checkCallback, CHECK_TIMEOUT);
        }

        checkCallback();
    }

    /**
     * Провереяет доступность VK Api
     * @returns {Promise}
     */
    static isAvailable() {
        if (VkService.inited) {
            return Promise.resolve(true);
        }

        const CHECK_TIMEOUT = 1500;
        const MAX_ATTEMPTS = 10;

        return new Promise((resolve, reject) => {
            let attempts = 0;

            const checkCallback = () => {
                attempts++;
                console.warn(`Trying to get access to VK: ATTEMP #${attempts}`)
    
                if (VkService.inited) {    
                    return resolve(true);
                }

                if (attempts >= MAX_ATTEMPTS) {
                    return reject(false);
                }

                setTimeout(checkCallback, CHECK_TIMEOUT);
            };

            checkCallback();
        });
    }

    static getLoginStatus = () => {
        return new Promise((resolve, _) => {
            window.VK.Auth.getLoginStatus(res => resolve(res));
        });
    };

    static getSession = () => {
        return window.VK.Auth.getSession(resp => resp)
    }

    static initAuth() {
        return new Promise((resolve, reject) => {
            const successAuth = 'connected';
            window.VK.Auth.login(response => {
                if (response.status === successAuth) {
                    resolve(response.session);
                } else {
                    const { status } = response;
                    const err = new Error(`Ошибка авторизации: ${VkService.authError[status]}`);
                    reject(err);
                }
            });
        })
    }

    static killAuth() {
        return new Promise((resolve, _) => {
            window.VK.Auth.logout(res => resolve(res))
        })
    }

    static callApi(method, params) {
        const expandedParams = {...params, v: VkService.version}
        return new Promise((resolve, _) => {
            window.VK.api(method, expandedParams, response => resolve(response));
        })
    }
}