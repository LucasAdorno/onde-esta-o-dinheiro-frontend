import axios from "axios";

const app = axios.create({ baseURL: "http://albaapi.herokuapp.com" });

export default app;
