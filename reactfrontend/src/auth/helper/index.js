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