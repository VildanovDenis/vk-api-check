const logout = () => {
    return new Promise((resolve, reject) => {
        window.VK.Auth.logout()
    })
}