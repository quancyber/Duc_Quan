let str = "";

const checkoutCartItem = document.getElementById("checkout-cart-item");
let subTotalPrice = 0;
for (let i = 1; i < 100; i++) {
    const item = window.localStorage.getItem(i.toString()) || "";
    if (item != "") {
        const obj = JSON.parse(item);
        const subtotal = parseInt(obj.price) * parseInt(obj.num);
        subTotalPrice += subtotal;
        str += `<tr class="cart_item">
        <td class="product-name">
            `+ obj.name + `&nbsp; <strong
                class="product-quantity">×&nbsp;`+ obj.num + `</strong>
        </td>
        <td class="product-total">
            <span
                class="woocommerce-Price-amount amount"><bdi>`+ subtotal + `,000<span
                        class="woocommerce-Price-currencySymbol">VND</span></bdi></span>
        </td>
        </tr>`;
    }
}

checkoutCartItem.innerHTML = str;

document.getElementById("sub-total").innerHTML = subTotalPrice + ",000<span class='woocommerce-Price-currencySymbol'>VND</span>";
document.getElementById("total").innerHTML = (subTotalPrice + 25) + ",000<span class='woocommerce-Price-currencySymbol'>VND</span>";

