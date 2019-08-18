import axios from "axios"
let APIgoods = {
    getCategories(){
        return axios.get("http://127.0.0.1:3000/xhr/list/categorySimple").then(res => res.data)
    },
    getSecondCategories(id){
        return axios.get("http://127.0.0.1:3000/xhr/list/subCate.json?categoryId="+id).then(res => res.data)
    },
}
export default APIgoods