import axios from "axios"
axios.defaults.baseURL = "http://127.0.0.1:3000/"
let APIgoods = {
    getCategories(){
        return axios.get("xhr/list/categorySimple").then(res => res.data)
    },
    getSecondCategories(id){
        return axios.get("xhr/list/subCate.json?categoryId="+id).then(res => res.data)
    }
}
export default APIgoods