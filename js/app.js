let burgers = [
  {
    id: "B1001",
    name: "Classic Burger (Large)",
    price: 750.0,
    expireDate: "2024-12-01",
    discount: 0,
  },
  {
    id: "B1002",
    name: "Classic Burger (Regular)",
    price: 1500,
    expireDate: "2024-12-01",
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
    expireDate: "2024-12-01",
    discount: 0,
  },
  {
    id: "B1017",
    name: "Classic Burger (Regular)",
    price: 1500,
    expireDate: "2024-12-01",
    discount: 15,
  },
  {
    id: "B1018",
    name: "Classic Burger (Regular)",
    price: 1500,
    expireDate: "2024-12-01",
    discount: 15,
  },
];

let fries = [
  {
    id: "B1025",
    name: "Classic Burger (Large)",
    price: 750.0,
    expireDate: "2024-12-01",
    discount: 0,
  },
  {
    id: "B1026",
    name: "Classic Burger (Regular)",
    price: 1500,
    expireDate: "2024-12-01",
    discount: 15,
  },
  {
    id: "B1027",
    name: "Classic Burger (Regular)",
    price: 1500,
    expireDate: "2024-12-01",
    discount: 15,
  },
];

let pasta = [
  {
    id: "B1025",
    name: "Classic Burger (Large)",
    price: 750.0,
    expireDate: "2024-12-01",
    discount: 0,
  },
  {
    id: "B1026",
    name: "Classic Burger (Regular)",
    price: 1500,
    expireDate: "2024-12-01",
    discount: 15,
  },
  {
    id: "B1027",
    name: "Classic Burger (Regular)",
    price: 1500,
    expireDate: "2024-12-01",
    discount: 15,
  },
];

let chicken = [
  {
    id: "B1025",
    name: "Classic Burger (Large)",
    price: 750.0,
    expireDate: "2024-12-01",
    discount: 0,
  },
  {
    id: "B1026",
    name: "Classic Burger (Regular)",
    price: 1500,
    expireDate: "2024-12-01",
    discount: 15,
  },
  {
    id: "B1027",
    name: "Classic Burger (Regular)",
    price: 1500,
    expireDate: "2024-12-01",
    discount: 15,
  },
];

let beverages = [
  {
    id: "B1025",
    name: "Classic Burger (Large)",
    price: 750.0,
    expireDate: "2024-12-01",
    discount: 0,
  },
  {
    id: "B1026",
    name: "Classic Burger (Regular)",
    price: 1500,
    expireDate: "2024-12-01",
    discount: 15,
  },
  {
    id: "B1026",
    name: "Classic Burger (Regular)",
    price: 1500,
    expireDate: "2024-12-01",
    discount: 15,
  }
];

let loardItems = () => {
  let bur = document.getElementById("burgers");
  let sub = document.getElementById("submarines");
  let frie = document.getElementById("fries");
  let pas = document.getElementById("pasta");
  let chick = document.getElementById("chicken");
  let beve = document.getElementById("beverages");

  let burgersBody = "";
  let submarineBody = "";
  let firesBody = "";
  let pastaBody = "";
  let chickenBody = "";
  let beveragesBody = "";

  burgers.forEach((item, index) => {
    burgersBody += `<div class="food">
         <p id="name-detail">${item.name}</p>
         <img id="imgItem" src="./img/burger.jpg" alt="" srcset="">
         <p id="detail">LKR ${item.price}</p>
         <p id="detail">Expire date : <br> ${item.expireDate} <p id="expired"></p></p>
         <p id="detail">${item.discount}% off</p>
        <span>
            <button class="btn-item" onclick="editItem('burger' , ${index})">Edit</button>
            <button class="btn-item" id="delete" onclick=deleteBurgers(${index})>Delete</button>
        </span>
      </div>`;
      checkExpireDate(item.name, item.expireDate);
  });

  submarines.forEach((item, index) => {
    submarineBody += `<div class="food">
         <p id="name-detail">${item.name}</p>
         <img id="imgItem" src="./img/submarine.jpg" alt="" srcset="">
         <p id="detail">LKR ${item.price}</p>
         <p id="detail">Expire date : <br> ${item.expireDate} <p id="expired"></p></p>
         <p id="detail">${item.discount}% off</p>
        <span>
            <button class="btn-item" onclick="editItem('submarine',${index})">Edit</button>
            <button class="btn-item" id="delete" onclick=deleteSubmarines(${index})>Delete</button>
        </span>
      </div>`;
      checkExpireDate(item.name, item.expireDate);
  });

  fries.forEach((item, index) => {
    firesBody += `<div class="food">
         <p id="name-detail">${item.name}</p>
         <img id="imgItem" src="./img/fries.jpg" alt="" srcset="">
         <p id="detail">LKR ${item.price}</p>
         <p id="detail">Expire date : <br> ${item.expireDate} <p id="expired"></p></p>
         <p id="detail">${item.discount}% off</p>
        <span>
            <button class="btn-item" onclick="editItem('fires',${index})">Edit</button>
            <button class="btn-item" id="delete" onclick=deleteFries(${index})>Delete</button>
        </span>
      </div>`;
      checkExpireDate(item.name, item.expireDate);
  });

  pasta.forEach((item, index) => {
    pastaBody += `<div class="food">
         <p id="name-detail">${item.name}</p>
         <img id="imgItem" src="./img/pasta.jpg" alt="" srcset="">
         <p id="detail">LKR ${item.price}</p>
         <p id="detail">Expire date : <br> ${item.expireDate} <p id="expired"></p></p>
         <p id="detail">${item.discount}% off</p>
        <span>
            <button class="btn-item" onclick="editItem('pasta',${index})">Edit</button>
            <button class="btn-item" id="delete" onclick=deletePasta(${index})>Delete</button>
        </span>
      </div>`;
      checkExpireDate(item.name, item.expireDate);
  });

  chicken.forEach((item, index) => {
    chickenBody += `<div class="food">
         <p id="name-detail">${item.name}</p>
         <img id="imgItem" src="./img/chicken.jpg" alt="" srcset="">
         <p id="detail">LKR ${item.price}</p>
         <p id="detail">Expire date : <br> ${item.expireDate} <p id="expired"></p></p>
         <p id="detail">${item.discount}% off</p>
        <span>
            <button class="btn-item" onclick="editItem('chicken',${index})">Edit</button>
            <button class="btn-item" id="delete" onclick=deleteChicken(${index})>Delete</button>
        </span>
      </div>`;
      checkExpireDate(item.name, item.expireDate);
  });

  beverages.forEach((item, index) => {
    beveragesBody += `<div class="food">
         <p id="name-detail">${item.name}</p>
         <img id="imgItem" src="./img/beverages.jpg" alt="" srcset="">
         <p id="detail">LKR ${item.price}</p>
         <p id="detail">Expire date : <br> ${item.expireDate} <p id="expired"></p></p>
         <p id="detail">${item.discount}% off</p>
        <span>
            <button class="btn-item" onclick="editItem('beverages',${index})">Edit</button>
            <button class="btn-item" id="delete" onclick=deleteBeverages(${index})>Delete</button>
        </span>
      </div>`;
      checkExpireDate(item.name, item.expireDate);
  });

  bur.innerHTML = burgersBody;
  sub.innerHTML = submarineBody;
  frie.innerHTML = firesBody;
  pas.innerHTML = pastaBody;
  chick.innerHTML = chickenBody;
  beve.innerHTML = beveragesBody;

};

let = checkExpireDate=(product , date)=>{
  let today = new Date();
  let currentYear = today.getFullYear();
  let currentMonth = today.getMonth() + 1;
  let currentDate = today.getDate();

  if (currentMonth < 10) {
    currentMonth = "0" + currentMonth;
  }
  if (currentDate < 10) {
    currentDate = "0" + currentDate;
  }
  let fullDate = `${currentYear}-${currentMonth}-${currentDate}`;
  if(date < fullDate){
     alert(`${product} is expired`);
  }
}
loardItems();

const deleteBurgers = (index) => {
  burgers.splice(index, 1);
  loardItems();
};
const deleteSubmarines = (index) => {
  submarines.splice(index, 1);
  loardItems();
};
const deleteFries = (index) => {
  fries.splice(index, 1);
  loardItems();
};
const deletePasta = (index) => {
  pasta.splice(index, 1);
  loardItems();
};
const deleteChicken = (index) => {
  chicken.splice(index, 1);
  loardItems();
};
const deleteBeverages = (index) => {
  beverages.splice(index, 1);
  loardItems();
};

let itemCode = document.getElementById("item-code");
let itemName = document.getElementById("item-name");
let price = document.getElementById("price");
let expireDate = document.getElementById("expire-date");
let discount = document.getElementById("discount");
const itemType = document.getElementById("food-type");

let addItem = () => {
  const foodItem = {
    id: itemCode.value,
    name: itemName.value,
    price: price.value,
    expireDate: expireDate.value,
    discount: discount.value,
  };

  switch (itemType.value) {
    case "burger":
      burgers.push(foodItem);
      break;
    case "submarine":
      submarines.push(foodItem);
      break;
    case "fries":
      fries.push(foodItem);
      break;
    case "pasta":
      pasta.push(foodItem);
      break;
    case "chicken":
      chicken.push(foodItem);
      break;
    case "beverages":
      beverages.push(foodItem);
      break;
    default:
      alert("Please select food item type...");
      break;
  }

  loardItems();
  clearValues();
};

let updateItem = (type, index) => {
  type = itemType.value;
  let updatedId = itemCode.value;
  let updatedName = itemName.value;
  let updatedPrice = price.value;
  let updatedDate = expireDate.value;
  let updatedDiscount = discount.value;

  const updatedItem = {
    id: updatedId,
    name: updatedName,
    price: updatedPrice,
    expireDate: updatedDate,
    discount: updatedDiscount,
  };

  switch (type) {
    case "burger":
      burgers[index] = updatedItem;
      break;
    case "submarine":
      submarines[index] = updatedItem;
      break;
    case "fries":
      fries[index] = updatedItem;
      break;
    case "pasta":
      pasta[index] = updatedItem;
      break;
    case "chicken":
      chicken[index] = updatedItem;
      break;
    case "beverages":
      beverages[index] = updatedItem;
      break;
    default:
      alert("Invalid item Type...");
      break;
  }
  loardItems();
  clearValues();
};

let editItem = (type, index) => {
  let item;

  console.log(234);

  switch (type) {
    case "burger":
      item = burgers[index];
      break;
    case "submarine":
      item = submarines[index];
      break;
    case "fries":
      item = fries[index];
      break;
    case "pasta":
      item = pasta[index];
      break;
    case "chicken":
      item = chicken[index];
      break;
    case "beverages":
      item = beverages[index];
      break;
    default:
      alert("Please select food item type...");
      break;
  }

  itemType.value = type;
  itemCode.value = item.id;
  itemName.value = item.name;
  price.value = item.price;
  expireDate.value = item.expireDate;
  discount.value = item.discount;

  let updateBtn = `<button type="button" id="update-btn" onclick="updateItem('${itemType.value}' , ${index})">Update</button>`;
  document.getElementById("itemBtn").innerHTML = updateBtn;
};

let clearValues = () => {
  itemType.value = "";
  itemCode.value = "";
  itemName.value = "";
  price.value = "";
  expireDate.value = "";
  discount.value = "";
};

