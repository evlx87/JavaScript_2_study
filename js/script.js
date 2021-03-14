const API = 'https://raw.githubusercontent.com/evlx87/JavaScript_2_study/hw_less_3/json';

class GoodsList {
    constructor(container = '.goods-list') {
        this.container = container;
        this.goods = [];
        this.allGoods = [];
        this._getGoods()
            .then(data => {
                this.goods = [...data];
                this.render()
            });
    }

    _getGoods() {
        return fetch(`${API}/catalogData.json`)
        .then(result => result.json())
        .catch(error => {
            console.log(error);
        })  
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
        return this.allProducts.reduce((accum, item) => accum += item.price, 0);
    }
}

class GoodsItem {
    constructor(good, img = 'img/200x150.png') {
        this.title = good.product_name;
        this.id = good.id_product;
        this.price = good.price;
        this.img = img;
    }

    render() {
        return `<div class="goods-item" data-id="${this.id}">
                    <img src="${this.img}" alt="Изображение товара">
                    <h3>${this.title}</h3>
                    <p>${this.price} руб.</p>
                    <button class="btn-buy">Купить</button>
                </div>`
    }
}

class CartList {
    constructor() {
        this.countGoods = 0; //Общая стоимость товаров
        this.amount = 0; //Общая стоимость товаров
        this.basketItems = []; //Массив для хранения товаров
        this.container = '.cart-content'; // контейнер для корзины
        this.allGoods = [];
        this._getBasket()
            .then(() => {
                this.render();
            });
    }

    //метод получения товаров в корзине
    _getBasket() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .then(data => {
                this.basketItems = data;
                this.countGoods = data.countGoods;
                this.totalPrice = data.totalPrice;
                this.amount = data.amount;
            })
            .catch(error => {
                console.log(error);
            })
    }

    //отрисовка корзины
    render() {
        document.querySelector(this.container).innerHTML = '';
        const block = document.querySelector(this.container);
        for (let good of this.basketItems.contents) {
            const prod = new CartItem(good);
            this.allGoods.push(prod);
            block.insertAdjacentHTML('beforeend', prod.render());
        }
        let out = `<div class="out">Всего товаров в корзине: ${this.countGoods }<br> На сумму: ${this.amount} рублей</div> `;
        block.insertAdjacentHTML('beforeend', out);
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

    //изменить товары в корзине
    changeGoods() {

    }
}

class CartItem {
    constructor(product) {
        this.title = product.product_name;
        this.id = product.id_product;
        this.amount = product.amount;
        this.price = product.price;
        this.quantity = product.quantity;
    }
    
    render() {
        return `<div class="cart-item">
                    <div class="cart-desc">
                        <h3 class="cart-name">${ this.title }</h3>
                        <p>Количество: ${this.quantity} шт.</p>
                        <p class="cart-price">Цена: ${this.price } руб.</><br>
                        <p class="cart-price">Итого: ${this.price} руб.</p><br>
                  </div>
              </div>`
    }
    //удаляет один элемент из корзины
    deleteItem() {

    }
}

let list = new GoodsList();
list.totalAmount();
list.render();
let cart = new CartList();