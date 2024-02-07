import axios from "axios";

const API_URL = "http://localhost:8080/api/v1";

class AuthService {
    authentication(email,password) {
        return axios
            .post(API_URL + "/auth/authenticate",{email, password})
            .then((response) => {
                if(response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data;
            });
    };

    register(firstname,lastname,email,password) {
        return axios.post(API_URL + "/auth/register",{firstname,lastname,email,password});
    };
}

export default new AuthService();