const express = require('express')
const axios = require('axios')
const app = express()

// 解决跨域问题
app.all("*",function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

// 获取首页API接口
app.get('/xhr/index/index.json', (req, succeed) => {
    axios.get('https://miniapp.you.163.com/xhr/index/index.json').then(res => {
        succeed.send(res.data)
        succeed.end()
    })
})

// 获取为你推荐商品
app.get('/xhr/rcmd/index.json', (req, succeed) => {
    let { lastItemId, size } = req.query
    axios.get(`https://miniapp.you.163.com/xhr/rcmd/index.json?lastItemId=${lastItemId}&size=${size}`).then(res => {
        succeed.send(res.data)
        succeed.end()
    })
})

// 获取一级分类
app.get('/xhr/list/categorySimple', (req, succeed) => {
    axios.get(`https://miniapp.you.163.com/xhr/list/categorySimple.json`).then(res => {
        succeed.send(res.data)
        succeed.end()
    })
})

// 获取二级分类
app.get('/xhr/list/subCate.json', (req, succeed) => {
    let { categoryId } = req.query
    axios.get(`https://miniapp.you.163.com/xhr/list/subCate.json?categoryId=${categoryId}`).then(res => {
        succeed.send(res.data)
        succeed.end()
    })
})

// 获取二级分类下的商品
app.get('/xhr/list/l2Items2.json', (req, succeed) => {
    let { categoryL1Id, categoryL2Id } = req.query
    axios.get(`https://miniapp.you.163.com/xhr/list/l2Items2.json?categoryL1Id=${categoryL1Id}&categoryL2Id=${categoryL2Id}`).then(res => {
        succeed.send(res.data)
        succeed.end()
    })
})

// 获取今日必拼数据
app.get('/pin/min/item/recommendV2.json', (req, succeed) => {
    let { orderType, size } = req.query
    axios.get(`https://m.you.163.com/pin/min/item/recommendV2.json?orderType=${orderType}&size=${size}`).then(res => {
        succeed.send(res.data)
        succeed.end()
    })
})

// 获取商品详情API
// https://miniapp.you.163.com/xhr/item/detail.json?itemId=3439006
app.get('/xhr/item/detail.json', (req, succeed) => {
    let { itemId } = req.query
    axios.get(`https://miniapp.you.163.com/xhr/item/detail.json?itemId=${itemId}`).then(res => {
        succeed.send(res.data)
        succeed.end()
    })
})

app.listen(3000, () => {
    console.log('Server is Running... @ http://localhost:3000')
})
