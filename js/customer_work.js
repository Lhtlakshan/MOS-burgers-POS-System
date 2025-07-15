
let burgers = [
  {
    id: "B1001",
    name: "Classic Burger (Large)",
    price: 750.0,
    expireDate: "2024-12-30",
    discount: 0,
  },
  {
    id: "B1002",
    name: "Classic Burger (Regular)",
    price: 1500,
    expireDate: "2024-12-30",
    discount: 15,
  },
  {
    id: "B1003",
    name: "Classic Burger (Regular)",
    price: 1500,
    expireDate: "2024-08-01",
    discount: 15,
  },
];


let submarines = [
  {
    id: "B1016",
    name: "Classic Submarin (Large)",
    price: 750.0,
    expireDate: "2024-12-30",
    discount: 0,
  },
  {
    id: "B1017",
    name: "Classic Burger (Regular)",
    price: 1500,
    expireDate: "2024-12-30",
    discount: 15,
  },
  {
    id: "B1018",
    name: "Classic Burger (Regular)",
    price: 1500,
    expireDate: "2024-12-30",
    discount: 15,
  },
];

let fries = [
  {
    id: "B1025",
    name: "Classic Burger (Large)",
    price: 750.0,
    expireDate: "2024-12-30",
    discount: 0,
  },
  {
    id: "B1026",
    name: "Classic Burger (Regular)",
    price: 1500,
    expireDate: "2024-12-30",
    discount: 15,
  },
  {
    id: "B1027",
    name: "Classic Burger (Regular)",
    price: 1500,
    expireDate: "2024-12-30",
    discount: 15,
  },
];

let pasta = [
  {
    id: "B1025",
    name: "Classic Burger (Large)",
    price: 750.0,
    expireDate: "2024-12-30",
    discount: 0,
  },
  {
    id: "B1026",
    name: "Classic Burger (Regular)",
    price: 1500,
    expireDate: "2024-12-30",
    discount: 15,
  },
  {
    id: "B1027",
    name: "Classic Burger (Regular)",
    price: 1500,
    expireDate: "2024-12-30",
    discount: 15,
  },
];

let chicken = [
  {
    id: "B1025",
    name: "Classic Burger (Large)",
    price: 750.0,
    expireDate: "2024-12-30",
    discount: 0,
  },
  {
    id: "B1026",
    name: "Classic Burger (Regular)",
    price: 1500,
    expireDate: "2024-12-30",
    discount: 15,
  },
  {
    id: "B1027",
    name: "Classic Burger (Regular)",
    price: 1500,
    expireDate: "2024-12-30",
    discount: 15,
  },
];

let beverages = [
  {
    id: "B1025",
    name: "Classic Burger (Large)",
    price: 750.0,
    expireDate: "2024-12-30",
    discount: 0,
  },
  {
    id: "B1026",
    name: "Classic Burger (Regular)",
    price: 1500,
    expireDate: "2024-12-30",
    discount: 15,
  },
  {
    id: "B1026",
    name: "Classic Burger (Regular)",
    price: 1500,
    expireDate: "2024-12-30",
    discount: 15,
  },
];

let cart = [];

function updateCart() {
  let shoppingCartItem = document.getElementById("cart-items");
  let totPrice = document.getElementById("total-price");

  let sCart = ``;
  let totalPrice = 0;

  cart.forEach((item) => {
    totalPrice += item.price;
    sCart += `<tr class="cart-item">
    <td>${item.id}</td>
    <td>${item.name}</td>
    <td>${item.qty}</td>
    <td>${item.unitPrice}</td>
  </tr>`;
    
  });
  shoppingCartItem.innerHTML = sCart;
  totPrice.innerHTML = totalPrice;
  console.log(cart);
} 

function addToCart(category, index) {
  let selectedItem;
  
  switch (category) {
    case "burgers":
      selectedItem = burgers[index];
      break;
    case "submarines":
      selectedItem = submarines[index];
      break;
    case "fries":
      selectedItem = fries[index];
      break;
    case "pasta":
      selectedItem = pasta[index];
      break;
    case "chicken":
      selectedItem = chicken[index];
      break;
    case "beverages":
      selectedItem = beverages[index];
      break;
    default:
      alert("Invalid category!");
      return;
  }

  const row = cart.find(item=> item.id === selectedItem.id);
  if(row){
    row.qty +=1;
    row.price += selectedItem.price;
    updateCart();
    return;
  }else{
    cart.push({
      id: selectedItem.id,
      name: selectedItem.name,
      unitPrice : selectedItem.price,
      price: selectedItem.price,
      qty: 1
    });
    updateCart();
    return;
  }
  
  
}

let loardItem = () => {
  let bur = document.getElementById("burgers");
  let sub = document.getElementById("submarines");
  let frie = document.getElementById("fries");
  let pas = document.getElementById("pasta");
  let chick = document.getElementById("chicken");
  let beve = document.getElementById("beverages");

  let burgerBody = "";
  let submarinesBody = "";
  let fireBody = "";
  let pastasBody = "";
  let chickensBody = "";
  let beverageBody = "";

  burgers.forEach((item, index) => {
    burgerBody += `<div class="food">
         <p id="name-detail">${item.name}</p>
         <img id="imgItem" src="./img/burger.jpg" alt="" srcset="">
         <div class="itemDetailsdiv">
            <p id="detail">LKR ${item.price}</p>
            <p id="detail">Expire date : <br> ${item.expireDate} <p id="expired"></p></p>
            <p id="detail">${item.discount}% off</p>
            </div>
        <span>
            <button class="addToCartBtn" onclick="addToCart('burgers', ${index})">add to cart</button>
        </span>
      </div>`;
  });

  submarines.forEach((item, index) => {
    submarinesBody += `<div class="food">
         <p id="name-detail">${item.name}</p>
         <img id="imgItem" src="./img/submarine.jpg" alt="" srcset="">
         <div class="itemDetailsdiv">
            <p id="detail">LKR ${item.price}</p>
            <p id="detail">Expire date : <br> ${item.expireDate} <p id="expired"></p></p>
            <p id="detail">${item.discount}% off</p>
            </div>
        <span>
            <button class="addToCartBtn" onclick="addToCart('submarines', ${index})">add to cart</button>
        </span>
      </div>`;
  });

  fries.forEach((item, index) => {
    fireBody += `<div class="food">
         <p id="name-detail">${item.name}</p>
         <img id="imgItem" src="./img/fries.jpg" alt="" srcset="">
         <div class="itemDetailsdiv">
            <p id="detail">LKR ${item.price}</p>
            <p id="detail">Expire date : <br> ${item.expireDate} <p id="expired"></p></p>
            <p id="detail">${item.discount}% off</p>
            </div>
        <span>
            <button class="addToCartBtn" onclick="addToCart('fries', ${index})">add to cart</button>
        </span>
      </div>`;
  });

  pasta.forEach((item, index) => {
    pastasBody += `<div class="food">
         <p id="name-detail">${item.name}</p>
         <img id="imgItem" src="./img/pasta.jpg" alt="" srcset="">
         <div class="itemDetailsdiv">
            <p id="detail">LKR ${item.price}</p>
            <p id="detail">Expire date : <br> ${item.expireDate} <p id="expired"></p></p>
            <p id="detail">${item.discount}% off</p>
            </div>
        <span>
            <button class="addToCartBtn" onclick="addToCart('pasta', ${index})">add to cart</button>
        </span>
      </div>`;
  });

  chicken.forEach((item, index) => {
    chickensBody += `<div class="food">
         <p id="name-detail">${item.name}</p>
         <img id="imgItem" src="./img/chicken.jpg" alt="" srcset="">
         <div class="itemDetailsdiv">
            <p id="detail">LKR ${item.price}</p>
            <p id="detail">Expire date : <br> ${item.expireDate} <p id="expired"></p></p>
            <p id="detail">${item.discount}% off</p>
            </div>
        <span>
            <button class="addToCartBtn" onclick="addToCart('chicken', ${index})">add to cart</button>
        </span>
      </div>`;
  });

  beverages.forEach((item, index) => {
    beverageBody += `<div class="food">
         <p id="name-detail">${item.name}</p>
         <img id="imgItem" src="./img/beverages.jpg" alt="" srcset="">
         <div class="itemDetailsdiv">
            <p id="detail">LKR ${item.price}</p>
            <p id="detail">Expire date : <br> ${item.expireDate} <p id="expired"></p></p>
            <p id="detail">${item.discount}% off</p>
            </div>
        <span>
            <button class="addToCartBtn" onclick="addToCart('beverages', ${index})">add to cart</button>
        </span>
      </div>`;
  });

  bur.innerHTML = burgerBody;
  sub.innerHTML = submarinesBody;
  frie.innerHTML = fireBody;
  pas.innerHTML = pastasBody;
  chick.innerHTML = chickensBody;
  beve.innerHTML = beverageBody;
};

loardItem();


