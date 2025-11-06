import axios from "axios";
 
let appIdStore = null; // Global variable to hold appId temporarily
 
const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_PATH,
});
 
// Axios request interceptor to add dynamic headers
axiosClient.interceptors.request.use(async (req) => {
    // const jwt = typeof window !== "undefined" ? localStorage.getItem('jwt') : "";
    // console.log(jwt)
    // const studioId = typeof window !== "undefined" ? localStorage.getItem('studioId') : "";
 
    const headers = {
        // 'Jwt': jwt ? jwt : "jwt",
        // 'studioId': studioId ? studioId : '',
        // 'Devicetype': 4,
        // 'Version': 1,
        // 'Lang': 1,
        // 'Content-Type': 'application/json',
        // "Authorization": jwt ? `Bearer ${jwt}` : "",
        // "Appid": app_id || '', // Use the fetched or stored appId
        // // "User-Agent": 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36'
    };
    // console.log("headers",headers)
 
    if (typeof window === "undefined") {
        headers["User-Agent"] = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36';
    }
 
    req.headers = { ...req.headers, ...headers };  // Merge headers with existing headers
 
    return req;
}, (error) => Promise.reject(error));
 
export default axiosClient;