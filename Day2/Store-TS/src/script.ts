
document.addEventListener('DOMContentLoaded', () => {
    const mainProducts = document.getElementById('product-list') as HTMLElement;
    const category = document.getElementById('categories') as HTMLSelectElement;
    const form = document.getElementById('search-form') as HTMLElement;
    const sorting = document.getElementById('sortBy') as HTMLSelectElement;
    const minPrice = document.getElementById('minPrice') as HTMLInputElement;
    const maxPrice = document.getElementById('maxPrice') as HTMLInputElement;
    const cart = document.getElementById('cart') as HTMLElement;
    const cartTotal = document.getElementById('cartTotal') as HTMLElement;
    const cartTotalPrice = document.getElementById('cartTotalPrice') as HTMLElement;
    const pagination = document.querySelector('.pagination') as HTMLElement;



    let currentPage = 1;
    const itemsPerPage = 4;
    let filteredProducts = [];

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const title = category.value.trim();
        if (title) {
            try {
                await fetchData(title);
            } catch (error) {
                console.error('Error fetching recipe data:', error);
                alert('Failed to fetch recipe data. Please try again.');
            }
        }
    });
    async function fetchData(filter: string) {
        if (filter == "all") {
            cartTotal.innerHTML = `<Font class="cart-font">Total Items: 0</Font>`;
            const url = `https://fakestoreapi.com/products`;
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw Error(response.statusText);
                } else {
                   let data:any = await response.json();
                    filteredProducts = data;
                    displayProducts(data);
                    return data;
                }
            } catch (e: any) {
                throw Error(e.message);
            }
        } else {
            const url = `https://fakestoreapi.com/products/category/${filter}`;
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw Error(response.statusText);
                } else {
                   let  data = await response.json();
                    filteredProducts = data;
                    displayProducts(data);
                    return data;
                }
            } catch (e: any) {
                alert('Failed to fetch recipe data. Please try again.');
                throw Error(e.message);
            }
        }
    }

    fetchData("all");
    function displayProducts(products: any) {
        mainProducts.innerHTML = '';
        const sortingWay = sorting.value.trim();
        if (sortingWay == "sortByPrice") {
            products.sort((a: any, b: any) => a.price - b.price);
        } else if (sortingWay == "sortByAlpha") {
            products.sort((a: any, b: any) => {
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

        const filtered = products.filter((product: { price: number; }) =>
            (product.price > minPrice_val && product.price < maxPrice_val) ||
            isNaN(minPrice_val) || isNaN(maxPrice_val)
        );

        displayPage(filtered, currentPage);
        setupPagination(filtered);
    }
    function displayPage(products: any, page: number) {
        mainProducts.innerHTML = '';
        page--;

        const start = page * itemsPerPage;
        const end = start + itemsPerPage;
        const paginatedItems = products.slice(start, end);

        paginatedItems.forEach((product: { image: any; title: any; price: any; id: any; }) => {
            mainProducts.innerHTML += `<div class="product-card">
                                                <img src="${product.image}" alt="${product.title}">
                                                <h2 class="product-title">${product.title}</h2>
                                                <p class="product-price"><br/><br/><br/>$${product.price}</p>
                                                <input value="Add to Cart" type="button" class="btn" onclick='addToCart("${product.title}","${product.price}","${product.id}")' />
                                            </div>`;
        });
    }
   

    function setupPagination(products: any) {
        pagination.innerHTML = '';

        const pageCount = Math.ceil(products.length / itemsPerPage);
        for (let i = 1; i <= pageCount; i++) {
            const btn = paginationButton(i, products);
            pagination.appendChild(btn);
        }
    }
    function paginationButton(page: number, products: any) {
        const button = document.createElement('button') as HTMLButtonElement;
        button.innerText = String(page);
        if (currentPage == page) button.classList.add('active');

        button.addEventListener('click', () => {
            currentPage = page;
            displayPage(products, currentPage);

            let currentBtn = document.querySelector('.pagination button.active') as HTMLButtonElement;
            currentBtn.classList.remove('active');

            button.classList.add('active');
        });

        return button;
    }
    var cart_arr = new Array();
    var total_price = 0;
   
    window.addToCart = function (product_title:string, product_price:string, id:number) {
        cart.innerHTML += `<li value="${id}" class="cart-font">${product_title} - $${product_price}
                    <input type="button" name="remove" onclick="removeItem(${id},${product_price})" value="Remove" />
                    </li>`;
        cart_arr.push(id);
        total_price += parseFloat(product_price);
        cartTotal.innerHTML = `<Font class="cart-font">Total Items: ${cart_arr.length}</Font>`;
        cartTotalPrice.innerHTML = `<Font class="cart-font">Total Price: ${total_price}</Font>`;
    }

    window.removeItem = function (id: number, price:string) {
        cart_arr = cart_arr.filter(item => item == id);
        (document.querySelector(`#cart li[value="${id}"]`) as HTMLElement).remove();
        cartTotal.innerHTML = `<Font class="cart-font">Total Items: ${cart_arr.length}</Font>`;
        total_price -= parseFloat(price);
        cartTotalPrice.innerHTML = `<Font class="cart-font">Total Price: ${total_price}</Font>`;
    }
});
                               