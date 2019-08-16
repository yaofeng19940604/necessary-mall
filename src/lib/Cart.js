let cart = {
    list: [],

    add(goods) {
        if (goods.quantity == 0) {
            this.del(goods);
            return;
        }

        // 查找购物车中有没有这个商品
        for (const item of this.list) {
            if (item.id == goods.id) {
                // 修改数量
                item.quantity = goods.quantity;
                console.log(cart);
                return;
            }
        }

        // 如果没有这个商品就添加
        this.list.push(goods);
        console.log(cart);
    },

    // 删除商品
    del(goods) {
        // goods.id
        for (let i = 0; i < this.list.length; i++) {
            const item = this.list[i];
            if (item.id == goods.id) {
                this.list.splice(i, 1);
                return;
            }
        }
    },

    // 计算总价
    total() {
        let sum = 0;
        for (const item of this.list) {
            if (!item.sku)
                continue;
            sum += item.sku.price * item.quantity;
        }
        return sum;
    },

    // 计算商品的数量
    count() {
        let counter = 0;
        for (const item of this.list) {
            counter += item.quantity;
        }
        return counter;
    },

    find(id) {
        for (const item of this.list) {
            if(item.id == id) 
                return item;
        }

        return null;
    }
};

export default cart