"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.addEventListener('DOMContentLoaded', () => {
    const mainProducts = document.getElementById('product-list');
    const category = document.getElementById('categories');
    const form = document.getElementById('search-form');
    const sorting = document.getElementById('sortBy');
    const minPrice = document.getElementById('minPrice');
    const maxPrice = document.getElementById('maxPrice');
    const cart = document.getElementById('cart');
    const cartTotal = document.getElementById('cartTotal');
    const cartTotalPrice = document.getElementById('cartTotalPrice');
    const pagination = document.querySelector('.pagination');
    let currentPage = 1;
    const itemsPerPage = 4;
    let filteredProducts = [];
    form.addEventListener('submit', (event) => __awaiter(void 0, void 0, void 0, function* () {
        event.preventDefault();
        const title = category.value.trim();
        if (title) {
            try {
                yield fetchData(title);
            }
            catch (error) {
                console.error('Error fetching recipe data:', error);
                alert('Failed to fetch recipe data. Please try again.');
            }
        }
    }));
    function fetchData(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            if (filter == "all") {
                cartTotal.innerHTML = `<Font class="cart-font">Total Items: 0</Font>`;
                const url = `https://fakestoreapi.com/products`;
                try {
                    const response = yield fetch(url);
                    if (!response.ok) {
                        throw Error(response.statusText);
                    }
                    else {
                        let data = yield response.json();
                        filteredProducts = data;
                        displayProducts(data);
                        return data;
                    }
                }
                catch (e) {
                    throw Error(e.message);
                }
            }
            else {
                const url = `https://fakestoreapi.com/products/category/${filter}`;
                try {
                    const response = yield fetch(url);
                    if (!response.ok) {
                        throw Error(response.statusText);
                    }
                    else {
                        let data = yield response.json();
                        filteredProducts = data;
                        displayProducts(data);
                        return data;
                    }
                }
                catch (e) {
                    alert('Failed to fetch recipe data. Please try again.');
                    throw Error(e.message);
                }
            }
        });
    }
    fetchData("all");
    function displayProducts(products) {
        mainProducts.innerHTML = '';
        const sortingWay = sorting.value.trim();
        if (sortingWay == "sortByPrice") {
            products.sort((a, b) => a.price - b.price);
        }
        else if (sortingWay == "sortByAlpha") {
            products.sort((a, b) => {
                if (a.title < b.title) {
                    return -1;
                }
                if (a.title > b.title) {
                    return 1;
                }
                return 0;
            });
        }
        const minPrice_val = parseFloat(minPrice.value.trim());
        const maxPrice_val = parseFloat(maxPrice.value.trim());
        const filtered = products.filter((product) => (product.price > minPrice_val && product.price < maxPrice_val) ||
            isNaN(minPrice_val) || isNaN(maxPrice_val));
        displayPage(filtered, currentPage);
        setupPagination(filtered);
    }
    function displayPage(products, page) {
        mainProducts.innerHTML = '';
        page--;
        const start = page * itemsPerPage;
        const end = start + itemsPerPage;
        const paginatedItems = products.slice(start, end);
        paginatedItems.forEach((product) => {
            mainProducts.innerHTML += `<div class="product-card">
                                                <img src="${product.image}" alt="${product.title}">
                                                <h2 class="product-title">${product.title}</h2>
                                                <p class="product-price"><br/><br/><br/>$${product.price}</p>
                                                <input value="Add to Cart" type="button" class="btn" onclick='addToCart("${product.title}","${product.price}","${product.id}")' />
                                            </div>`;
        });
    }
    function setupPagination(products) {
        pagination.innerHTML = '';
        const pageCount = Math.ceil(products.length / itemsPerPage);
        for (let i = 1; i <= pageCount; i++) {
            const btn = paginationButton(i, products);
            pagination.appendChild(btn);
        }
    }
    function paginationButton(page, products) {
        const button = document.createElement('button');
        button.innerText = String(page);
        if (currentPage == page)
            button.classList.add('active');
        button.addEventListener('click', () => {
            currentPage = page;
            displayPage(products, currentPage);
            let currentBtn = document.querySelector('.pagination button.active');
            currentBtn.classList.remove('active');
            button.classList.add('active');
        });
        return button;
    }
    var cart_arr = new Array();
    var total_price = 0;
    window.addToCart = function (product_title, product_price, id) {
        cart.innerHTML += `<li value="${id}" class="cart-font">${product_title} - $${product_price}
                    <input type="button" name="remove" onclick="removeItem(${id},${product_price})" value="Remove" />
                    </li>`;
        cart_arr.push(id);
        total_price += parseFloat(product_price);
        cartTotal.innerHTML = `<Font class="cart-font">Total Items: ${cart_arr.length}</Font>`;
        cartTotalPrice.innerHTML = `<Font class="cart-font">Total Price: ${total_price}</Font>`;
    };
    window.removeItem = function (id, price) {
        cart_arr = cart_arr.filter(item => item == id);
        document.querySelector(`#cart li[value="${id}"]`).remove();
        cartTotal.innerHTML = `<Font class="cart-font">Total Items: ${cart_arr.length}</Font>`;
        total_price -= parseFloat(price);
        cartTotalPrice.innerHTML = `<Font class="cart-font">Total Price: ${total_price}</Font>`;
    };
});
