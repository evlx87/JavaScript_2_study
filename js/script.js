class GoodsList {
    constructor(container = '.goods-list') {
        this.container = container;
        this.goods = [];
        this.allGoods = []; //массив товаров с версткой
        this.fetchGoods();
        this.render(); //вывод товаров на страницу
    }

    fetchGoods() {
        this.goods = [
            { title: 'Shirt', price: 150 },
            { title: 'Socks', price: 50 },
            { title: 'Jacket', price: 350 },
            { title: 'Shoes', price: 250 },
        ];
    }

    render() {
        const block = document.querySelector(this.container);
        for (let good of this.goods) {
            const item = new GoodsItem(good);
            this.allGoods.push(item);
            block.insertAdjacentHTML("beforeend", item.render());
        }
    }

    totalAmount() {
        let sum = 0;
        this.goods.forEach((good) => {
            sum += good.price;
        });
        document.querySelector('.total-amount').innerHTML = `Суммарная стоимость всех товаров: ${sum}`;
    }
}


class GoodsItem {
    constructor(good, img = 'img/200x150.png') {
        this.title = good.title;
        this.price = good.price;
        this.img = img;
    }
    render() {
        return `<div class="goods-item">
                <img src="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="btn-buy">Купить</button>
            </div>`
    }
}

class CartList {
    constructor() {

    }
    // метод для очистки корзины
    clearAll() {

    }
    //метод подсчета суммы купленных товаров
    totalSum() {

    }
    //метод оплаты товаров
    pay() {

    }
}

class CartItem {
    constructor() {

    }
    //удаляет один элемент из корзины
    deleteItem() {

    }
}

let list = new GoodsList();
list.totalAmount();
