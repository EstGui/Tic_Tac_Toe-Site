import axios from "axios";

export const api = axios.create({
    baseURL: 'https://tic-tac-toe-api-azure.vercel.app',
    headers: {
        'Content-Type': 'application/json',
    },
});
