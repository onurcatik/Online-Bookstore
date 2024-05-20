document.addEventListener('DOMContentLoaded', () => {
    const cartCount = document.getElementById('cart-count');
    let cart = [];

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const product = button.parentElement;
            const productId = product.getAttribute('data-id');
            const productName = product.querySelector('h3').textContent;
            const productPrice = product.querySelector('p').textContent;

            addToCart(productId, productName, productPrice);
        });
    });

    function addToCart(id, name, price) {
        const existingProductIndex = cart.findIndex(item => item.id === id);
        if (existingProductIndex !== -1) {
            cart[existingProductIndex].quantity += 1;
        } else {
            cart.push({ id, name, price, quantity: 1 });
        }
        updateCartCount();
        console.log(cart); // For debugging
    }

    function updateCartCount() {
        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    }
});
