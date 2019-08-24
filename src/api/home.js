import axios from "axios"
axios.defaults.baseURL = "http://127.0.0.1:3000/"
let APIhome = {
    getHomeHeader(){
        return axios.get("/xhr/index/index.json").then(res => res.data)
    },
    getRecommend(){
        return axios.get("/xhr/rcmd/index.json?lastItemId=0&size=20").then(res => res.data)
    },
}
export default APIhome