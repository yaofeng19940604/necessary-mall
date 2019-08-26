import axios from "axios"
axios.defaults.baseURL = "http://127.0.0.1:3000/"
let APIgoods = {
    getCategories(){
        return axios.get("xhr/list/categorySimple").then(res => res.data)
    },
    getSecondCategories(id){
        return axios.get("xhr/list/subCate.json?categoryId="+id).then(res => res.data)
    },
    getCategoryGoods(id1,id2){
        return axios.get(`/xhr/list/l2Items2.json?categoryL1Id=${id1}&categoryL2Id=${id2}`).then(res => res.data)
    },
    getGoodsDetails(goodsId){
        return axios.get("/xhr/item/detail.json?itemId="+goodsId).then(res => res.data)
    }
}
export default APIgoods