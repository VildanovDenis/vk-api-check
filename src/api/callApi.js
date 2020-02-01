const statusConnected = 'connected';
const notAuthorized = 'not_authorized';
const statusUnknown = 'unknown';
/**
 * 
 * @param {string} method name of the VkApi.
 * @param {object} params without version.
 * @returns {promise}
 */
export const callApi = (method, params) => {
    const version = '5.78';
    const expandedParams = {...params, v: version};

    return new Promise((resolve, reject) => {
        window.VK.api(method, expandedParams, response => {
            console.log(response);
            resolve(response);
            const error = new Error('Что-то пошло не так');
            reject(error);
        })
    })
}