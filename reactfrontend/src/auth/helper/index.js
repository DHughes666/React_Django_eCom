import {API} from "../../backend"
import { cartEmpty } from "../../core/helper/cartHelper"

export const signup = async (user) => {
    try {
        const response = await fetch(`${API}/user/`, {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
}


export const sigin = async user => {
    const formData = new FormData()

    for (const name in user) {
        formData.append(name, user[name])
    }

    try {
        const response = await fetch(`${API}/user/login/`, {
            method: 'POST',
            body: formData
        });
        return response.json;
    } catch (err) {
        return console.log(err);
    }
}


export const authenticate = (data, next) => {
    if (typeof window !== undefined) {
        localStorage.setItem("customCookie", JSON.stringify(data));
        next();
    }
};

export const isAuthenticated = () => {
    if (typeof window == undefined) {
        return false;
    }
    if (localStorage.getItem("customCookie")) {
        return JSON.parse(localStorage.getItem("customCookie"));
    } else {
        return false;
    }
}

export const signout = (next) => {
    const userId = isAuthenticated() && isAuthenticated().user.id
    
    if (typeof window !== undefined) {
        localStorage.removeItem("customCookie");
        cartEmpty(() => {})
        // next();

        return fetch(`${API}/user/logout/${userId}`, {
            method: 'GET',
        })
        .then(response => {
            console.log("Signout success")
            next();
        })
        .catch(err => console.log(err));
    }
}