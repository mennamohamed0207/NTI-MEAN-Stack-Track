
document.addEventListener('DOMContentLoaded', () => {

const mainProducts=document.getElementById('product-list');
const category=document.getElementById('categories');
const form=document.getElementById('search-form');
const sorting=document.getElementById('sortBy');

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
    products.forEach(product => {
       
        // productItem.classList.add('product-item');
        mainProducts.innerHTML+=`<div class="product-card">
        <img src="${product.image}" alt="${product.title}">
        <h2 class="product-title">${product.title}</h2>
        <p class="product-price"><br/><br/><br/>$${product.price}</p>
        </div>
` 
    })}

});
