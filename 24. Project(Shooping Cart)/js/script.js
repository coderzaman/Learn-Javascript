/////////////////////Class/////////////////////

class UI {
    static addItem(Item) {
        let listItem = document.createElement('li');
        listItem.classList = 'list-group-item';
        listItem.innerHTML = `
                <p hidden>Product id:<span id="productId">${Item.id}</span></p>
                <h6 style="display: inline-block;">${Item.name}</h6>
                <a href="#" class="btn btn-danger del_btn">Delete</a>
                <hr>
                <p style="font-size: 14px;">Price: ${Item.price}</p>
            `
        cart_list.appendChild(listItem);
    }

    static showAlert(message, className) {
        errorMessage.classList = `${className} mt-5`;
        errorMessage.textContent = message;

        setTimeout(() => {
            errorMessage.textContent = "";
            errorMessage.classList = `mt-5`;
        }, 1000)
    }

}

class LocalStorage {
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
        UI.showAlert("Added Successfully", 'success');
    }

    static getCartList() {
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

    static removeItemFromStorage(id) {
        let cartList = JSON.parse(localStorage.getItem('cartList'));

        for (let i = cartList.length - 1; i >= 0; i--) {
            if (cartList[i].id == id) {
                cartList.splice(i, 1);
                break; 
            }
        }

        cartItems.innerText = `${cartList.length}`;
        localStorage.setItem('cartList', JSON.stringify(cartList));
        UI.showAlert("Removed Successfully", 'error');
    }

    static productIsAlreadyAdded(productId) {
        let cartList = JSON.parse(localStorage.getItem('cartList'));

        if (cartList !== null) {
            for (let item of cartList) {
                if (item.id == productId) {
                    return true;
                }
            }
        }

        return false;
    }
}

////////////// Get Field, Button and Content ///////////////////

const cart_btn = document.getElementById('cart-btn');
const cart = document.getElementById('cart');
const close_cart = document.getElementById('cart_close');
const all_carts = document.getElementById('all_carts');
const cart_list = document.getElementById('cart_list');
const cartItems = document.getElementById('number_of_item');
const errorMessage = document.getElementById('error_message');
all_carts.addEventListener('click', addToCart);
cart_list.addEventListener('click', delete_cart);
document.addEventListener('DOMContentLoaded', LocalStorage.getCartList);

////////////////Event Listner With Function/////////////////////////
cart_btn.addEventListener('click', function (e) {
    cart.style.display = 'block';
});

close_cart.addEventListener('click', function (e) {
    cart.style.display = 'none';
})

/////////////////Function//////////////////

function addToCart(e) {
    if (e.target.hasAttribute('href')) {
        let id = e.target.parentElement.querySelector('#productId').textContent;
        let name = e.target.parentElement.querySelector('#product_name').textContent;
        let price = e.target.parentElement.querySelector('#productPrice').textContent;

        if (LocalStorage.productIsAlreadyAdded(id)) {
            UI.showAlert("Already Added", 'error');
        } else {
            UI.addItem({ id, name, price }); 
            LocalStorage.addItemToStorage(id, name, price);
        }
    }
}

function delete_cart(e) {
    if (e.target.classList.contains('del_btn')) {
        let id = e.target.parentElement.querySelector('#productId').textContent;
        LocalStorage.removeItemFromStorage(id);
        e.target.parentElement.remove();
    }
}
