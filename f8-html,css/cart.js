function total() {

}

function add() {
    let value = document.getElementById("quantity_6333e22b50564").value;
    document.getElementById("quantity_6333e22b50564").value = parseInt(value) + 1;
}

function sub() {
    let value = document.getElementById("quantity_6333e22b50564").value;
    if (value <= 1) return;
    document.getElementById("quantity_6333e22b50564").value = parseInt(value) - 1;
}

const allcartitem = document.getElementById("all-cart-item");
console.log(allcartitem);
const cartitem = window.localStorage.getItem("1");
let strCart = "";
for (let i = 1; i < 100; i++) {

    const item = window.localStorage.getItem(i.toString()) || "";
    if (item != "") {   

        const obj = JSON.parse(item);
        const subtotal = parseInt(obj.price) * parseInt(obj.num);
        strCart += `
            <tr class="woocommerce-cart-form__cart-item cart_item">
            
                <td class="product-remove">
                    <a href="`+ obj.link + `"class="remove"
                        aria-label="Xóa sản phẩm này" data-product_id="29461"
                        data-product_sku="" onclick="">×</a>
                </td>
            
                <td class="product-thumbnail">
                    <a href="`+ obj.link + `"><img
                        src= "`+ obj.img + `"
                        class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                        alt="`+ obj.name + `"
                         width="300"
                        height="300"></a>
                </td>
            
                <td class="product-name" data-title="Sản phẩm">
                    <a href="`+ obj.link + `"><p>` + obj.name + `</p></a>
                </td>
            
                <td class="product-price" data-title="Giá">
                    <span class="woocommerce-Price-amount amount">`+ obj.price + `,000
            <span class="woocommerce-Price-currencySymbol">VND</span></bdi ></span >
                </td>
            
                <td class="product-quantity" data-title="Số lượng">
                    <div class="quantity buttons_added form-minimal">
                        <input type="button" value="-"
                            class="minus button is-form" onclick="sub()">
                            <input type="number" id="quantity_6333e22b50564"
                                class="input-text qty text" step="1" min="1" max=""
                                name="quantity" value="`+ obj.num + `" title="SL" size="4"
                                placeholder="" inputmode="numeric">
                                <input type="button" value="+"
                                    class="plus button is-form" onclick="add()">
                                </div>
                            </td>
            
                            <td class="product-subtotal" data-title="Tạm tính">
                                <span class="woocommerce-Price-amount amount"><bdi>`+ subtotal + `,000<span
                                    class="woocommerce-Price-currencySymbol">VND</span></bdi></span>
                            </td>
                        </tr>`;
    }
}

allcartitem.innerHTML = strCart;