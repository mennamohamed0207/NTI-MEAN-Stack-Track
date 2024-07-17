
const mainProducts=document.getElementById('product-list');
const category=document.getElementById('categories');
const form=document.getElementById('search-form');
const sorting=document.getElementById('sortBy');
const minPrice=document.getElementById('minPrice');
const maxPrice=document.getElementById('maxPrice');
const cart=document.getElementById('cart');
const cartTotal=document.getElementById('cartTotal');
const cartTotalPrice=document.getElementById('cartTotalPrice');
document.addEventListener('DOMContentLoaded', () => {

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

async function fetchData(filter){
    if(filter=="all")
    {
        cartTotal.innerHTML=`<Font class="cart-font">Total Items: 0</Font>`;

        const url=`https://fakestoreapi.com/products`;
        try{
            const response=await fetch(url);
            if(!response.ok){
                throw Error(response.statusText);
            }else{
                 data=await response.json();
                displayProducts(data);
                return data;
            }
        }catch(e){
            throw Error(e.message);
        }
    }else {
        const url=`https://fakestoreapi.com/products/category/${filter}`;
        try{
            const response=await fetch(url);
            if(!response.ok){
                throw Error(response.statusText);
            }else{
                 data=await response.json();
                displayProducts(data);
                return data;
            }
        }catch(e){
            throw Error(e.message);
        }
    }
  
}
fetchData("all");

function displayProducts(products){
    mainProducts.innerHTML='';
    const sortingWay=sorting.value.trim();
    console.log(sortingWay);
    if(sortingWay=="sortByPrice"){
        products.sort((a,b) => a.price - b.price);
    }else if (sortingWay=="sortByAlpha")
    {
        //sort alphabetically according to title
        products.sort((a,b) => {
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
    console.log(minPrice_val, maxPrice_val);
    products.forEach(product => {
       if((product.price > minPrice_val&&product.price < maxPrice_val)||isNaN(minPrice_val)  ||isNaN(maxPrice_val)) 
        {
        // productItem.classList.add('product-item');
        mainProducts.innerHTML+=`<div class="product-card">
        <img src="${product.image}" alt="${product.title}">
        <h2 class="product-title">${product.title}</h2>
        <p class="product-price"><br/><br/><br/>$${product.price}</p>
        <input value="Add to Cart" type="button" class="btn" onclick='addToCart("${product.title}","${product.price}","${product.id}")' />
        </div>`
    }
    })}
    
});
var cart_arr=new Array();
var total_price=0;
function addToCart(product_title, product_price,id){
    cart.innerHTML +=`<li value="${id}" class="cart-font">${product_title} - $${product_price}
    <input type="button" name="remove" onclick="removeItem(${id},${product_price})" value="Remove" />
    </li>`;
   console.log(product_title, product_price);
   cart_arr.push(id);
   total_price+=parseFloat(product_price);
   cartTotal.innerHTML=`<Font class="cart-font">Total Items: ${cart_arr.length}</Font>`;
   cartTotalPrice.innerHTML=`<Font class="cart-font">Total Price: ${total_price}</Font>`;
   console.log(cart_arr);
 
}
function removeItem(id,price)
 {
    cart_arr = cart_arr.filter(item => item == id);
    document.querySelector(`#cart li[value="${id}"]`).remove();
    cartTotal.innerHTML=`<Font class="cart-font">Total Items: ${cart_arr.length}</Font>`;
    total_price-=parseFloat(price);
    cartTotalPrice.innerHTML=`<Font class="cart-font">Total Price: ${(total_price)}</Font>`;
 }
