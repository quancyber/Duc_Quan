function add() {
    let value = document.getElementById("quantity_6333e22b50564").value;
    document.getElementById("quantity_6333e22b50564").value = parseInt(value) + 1;
}

function sub() {
    let value = document.getElementById("quantity_6333e22b50564").value;
    if (value == 0) return;
    document.getElementById("quantity_6333e22b50564").value = parseInt(value) - 1;
}


function addcart(id, img, name, price) {
    const num = parseInt(document.getElementById("quantity_6333e22b50564")) || 1;
    let numcart = window.localStorage.getItem("numcart");
    let newnumcart = parseInt(numcart) + num;
    window.localStorage.setItem("numcart", newnumcart);

    const cart = window.localStorage.getItem(id) || "";
    if (cart == "") {
        const obj = {
            "img": img,
            "name": name,
            "price": price,
            "num": num
        }
        window.localStorage.setItem(id, JSON.stringify(obj));
    } else {
        let obj = JSON.parse(cart);
        obj.num = parseInt(obj.num) + num;
        window.localStorage.setItem(id, JSON.stringify(obj));
    }
    location.reload();
}