if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

// var stripeHandler = StripeCheckout.configure({
//   //  key: stripePublicKey,
//     key: 'pk_test_51KEIxsKyIJghRqcQtP6TEYCPEIWUgiRDwXoSz8qQiBR0PXSUZLsWihHZn22eU44s8oPve7V1Lqp9MiL2ieY2hGwp00WbZPnpCJ',
//     locale: 'en',
//     token: function(token) {
//         var items = []
//         var cartItemContainer = document.getElementsByClassName('cart-items')[0]
//         var cartRows = cartItemContainer.getElementsByClassName('cart-row')
//         for (var i = 0; i < cartRows.length; i++) {
//             var cartRow = cartRows[i]
//             var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
//             var quantity = quantityElement.value
//             var id = cartRow.dataset.itemId
//             items.push({
//                 id: id,
//                 quantity: quantity
//             })
//         }

//         fetch('/create-checkout-session', {
//             method: 'POST', 
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 stripeTokenId: token.id,
//                 items: items
//             })
//         }).then(function(res) {
//             if(res.ok) return res.json()
//             return res.json().then(json => Promise.reject(json))
//         // }).then(function(data) {
//         //     alert(data.message)
//         //     var cartItems = document.getElementsByClassName('cart-items')[0]
//         //     while (cartItems.hasChildNodes()) {
//         //         cartItems.removeChild(cartItems.firstChild)
//         //     }
//         //     updateCartTotal()
//         }).then(({ url }) => {
//             window.location = url
//         }).catch(function(error) {
//             console.error(error)
//         })
//     }
// })

// var stripe = Stripe("pk_test_51KEIxsKyIJghRqcQtP6TEYCPEIWUgiRDwXoSz8qQiBR0PXSUZLsWihHZn22eU44s8oPve7V1Lqp9MiL2ieY2hGwp00WbZPnpCJ");
var checkoutButton = document.getElementsByClassName("btn-purchase");

checkoutButton.addEventListener("click", function () {
  fetch("/payment", {
    headers: {'Content-Type': 'application/json'},
    method: "POST",
    body: JSON.stringify({
        "product": {
            "name": "iPhone 12", 
            "image": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-purple-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1617130317000", 
            "amount": 100,
            "quantity": 1
        }})
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (session) {
      return stripe.redirectToCheckout({ sessionId: session.id });
    })
    .then(function (result) {
      // If redirectToCheckout fails due to a browser or network
      // error, you should display the localized error message to your
      // customer using error.message.
      if (result.error) {
        alert(result.error.message);
      }
    })
    .catch(function (error) {
      console.error("Error:", error);
    });
});

function purchaseClicked() {
    var priceElement = document.getElementsByClassName('cart-total-price')[0]
    var price = parseFloat(priceElement.innerText.replace('$', '')) * 100
    // stripeHandler.open({
    //     amount: price
    // })
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    var id = shopItem.dataset.itemId
    addItemToCart(title, price, imageSrc, id)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc, id) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    cartRow.dataset.itemId = id
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}