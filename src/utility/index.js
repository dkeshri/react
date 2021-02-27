import cookie from 'react-cookies'

export const setCookie = (argCookies = {}) => {
    let expires, path;
    if (argCookies.expires === undefined || argCookies.expires === null) {
        expires = new Date()
        expires.setDate(Date.now() + 1000 * 60 * 60 * 24 * 14)
    } else {
        expires = argCookies.expires;
    }
    if (argCookies.path === undefined || argCookies.path === null) {
        path = '/';
    } else {
        path = argCookies.path;
    }
    if (argCookies.key !== undefined && argCookies.value !== undefined) {
        cookie.save(
            argCookies.key,
            argCookies.value,
            {
                path: path,
                expires,
                //maxAge: 1000,
                //domain: 'https://play.bukinoshita.io',
                secure: true,
                httpOnly: true
            }
        );
    } else {
        console.log('key and value can not be undefined');
    }
}

export const getCookie = (key) => {
    if (key !== undefined && key !== null) {
        return cookie.load(key);
    }
    else {
        console.log(`key can not be ${key}`);
    }

}
export const Year = (new Date()).getFullYear();