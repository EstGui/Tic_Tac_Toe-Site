import axios from "axios";

export const api = axios.create({
    baseURL: 'https://jogo-da-velha-api-58hq.onrender.com',
    headers: {
        'Content-Type': 'application/json',
    },
});
