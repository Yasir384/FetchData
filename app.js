let div = document.querySelector(".container")
// fetch("https://fakestoreapi.com/products")
// .then((data) => data.json())
// .then(data => 
// console.log(data)
// )

async function get_data(){
    try {
        const data= await fetch("https://fakestoreapi.com/products")
        const res= await data.json();
        
        res.map((item)=>{
            div.innerHTML+=`<div class="product-card">
                <div class="product-card__image">
                    <img src="${item.image}" alt="Red Nike Shoes">
                </div>
                <div class="product-card__info">
                    <h2 class="product-card__title">${item.category}</h2>
                    <p class="product-card__description">${item.description}</p>
                    <div class="product-card__price-row">
                        <span class="product-card__price"> ${item.price}</span>
                        <button class="product-card__btn">Add to Cart</button>
                    </div>
                </div>
            </div>`
        });
        console.log(res);
        
    } catch (error) {
        console.log(error);
        
        
    }
}
get_data()





