class UI {
    static addItem(Item) {
        let listItem = document.createElement('li');
        listItem.classList = 'list-group-item';
        listItem.innerHTML = `
                <p hidden>Product id:<span id="productId">${Item.id}</span></p>
                <h6 style="display: inline-block;">${Item.name}</h6>
                <button class="btn btn-danger del_btn">Delete</button>
                <hr>
                <p style="font-size: 14px;">Price: ${Item.price}</p>
            `
        cart_list.appendChild(listItem);
    }

    static showAlert(message, className) {
        let div = document.createElement('div');
        div.classList = className;
        div.appendChild(document.createTextNode(message));
        let parenElement = document.querySelector('.alertMessage');
        parenElement.insertBefore(div, parenElement.firstChild);

        setTimeout(() => {
            document.querySelector(`.${className}`).remove();
        }, 1000)
    }

}

class LocalStorage{
    static addItemToStorage(id, name, price) {

        let cartList;
        let Item = {
            id: id,
            name: name,
            price: price
        }

        if (localStorage.getItem('cartList') === null) {
            cartList = [];
        } else {
            cartList = JSON.parse(localStorage.getItem('cartList'));
        }
        
        cartList.push(Item);
        cartItems.innerText = `${cartList.length}`;
        localStorage.setItem('cartList', JSON.stringify(cartList));
        UI.showAlert("Added Successfully", 'sucess');

    }

    static getCartList(){
        let cartList;
        if (localStorage.getItem('cartList') === null) {
            cartList = [];
        } else {
            cartList = JSON.parse(localStorage.getItem('cartList'));
        }
        cartItems.innerText = `${cartList.length}`;
       
        cartList.forEach(element => {
            UI.addItem(element);
        });
    }

    static removeItemFromStorage(id){
        let cartList = JSON.parse(localStorage.getItem('cartList'));
  
        cartList.forEach((item, index)=>{
             if(item.id == id){
                cartList.splice(index,1);
             }
        })

        cartItems.innerText = `${cartList.length}`;
        localStorage.setItem('cartList', JSON.stringify(cartList));
        UI.showAlert("Remove Successfully", 'error');

    }

    static productIsAlreadyAdded(productId){
        console.log("Receive Parameter: ", productId);
        let cartList = JSON.parse(localStorage.getItem('cartList'));

        if(cartList !==  null){
           for(let item of cartList){
             if(item.id == productId){
                return true;
             }
           }
        }

        return false;

      
        
    }
}

const cart_btn = document.getElementById('cart-btn');
const cart = document.getElementById('cart');
const close_cart = document.getElementById('cart_close');
const all_carts = document.getElementById('all_carts');
const cart_list = document.getElementById('cart_list');
const del_cart = document.getElementById('cart_list');
const cartItems = document.getElementById('number_of_item');
 cart_btn.addEventListener('click', function (e) {
    cart.style.display = 'block';
});

close_cart.addEventListener('click', function (e) {
    cart.style.display = 'none';
})

all_carts.addEventListener('click', addToCart);
cart_list.addEventListener('click', delete_cart);
document.addEventListener('DOMContentLoaded',LocalStorage.getCartList);





function addToCart(e) {
    if (e.target.hasAttribute('href')) {
        let id = e.target.parentElement.querySelector('#productId').textContent;
        let name = e.target.parentElement.querySelector('#product_name').textContent;
        let price = e.target.parentElement.querySelector('#productPrice').textContent;
    
 
        if(LocalStorage.productIsAlreadyAdded(id)){
            UI.showAlert("Already Added", 'error');
        }else{
            UI.addItem({name, price});
            LocalStorage.addItemToStorage(id, name, price);
        }

     
    }
}


function delete_cart(e){
    if(e.target.classList.contains('btn-danger')){
        let id = e.target.parentElement.querySelector('#productId').textContent;
        LocalStorage.removeItemFromStorage(id);
        e.target.parentElement.remove();
    };
}
