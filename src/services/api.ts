import axios from "axios";

const api = axios.create({
	baseURL:" https://api.github.com",
	timeout: 2000
});

export default api;
