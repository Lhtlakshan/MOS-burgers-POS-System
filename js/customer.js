//Customer

let customers = [
  {
    telNo: "0776767666",
    name: "Kamal",
  },
  {
    telNo: "0776767666",
    name: "Saman",
  },
  {
    telNo: "0776767666",
    name: "Nimal",
  },
];

let cusTelNo = document.getElementById("tel-no");
let cusName = document.getElementById("customer-name");

let loadCustomers = () => {
  let customer = `
          <tr>
              <th>Customer name</th>
              <th>Telephone number</th>
              <th>Actions</th>
          </tr>`;

  let cusDetails = document.getElementById("customerDetails");
  customers.forEach((cus, index) => {
    customer += `<div class="">
         <tr>
              <td>${cus.name}</td>
              <td>${cus.telNo}</td>
              <td><button class="btn-item" onclick="editCustomer(${index})">Edit</button>
            <button class="btn-item" id="delete" onclick="deleteCustomer(${index})">Delete</button></td>
          </tr>
        <span>
            
        </span>
      </div>`;
     
  });

  cusDetails.innerHTML = customer;
};

loadCustomers();

let addCustomer = () => {
  const customer = {
    telNo: cusTelNo.value,
    name: cusName.value,
  };

  if (cusTelNo.value != "" && cusName.value != "") {
    customers.push(customer);
    loadCustomers();
  } else {
    alert("Telephone number and name should not be empty...!!!");
  }

  //   clearValues();
};

let updateCustomer = (index) => {
  let updatedName = cusName.value;
  let updatedTelNo = cusTelNo.value;

  const updatedCustomer = {
    telNo: updatedTelNo,
    name: updatedName,
  };

  if (updatedTelNo != "" && updatedName != "") {
    customers[index] = updatedCustomer;
    loadCustomers();
  } else {
    alert("Telephone number and name should not be empty...!!!");
  }

  clearValues();
};

let editCustomer = (index) => {
  let cus;

  cus = customers[index];

  cusName.value = cus.name;
  cusTelNo.value = cus.telNo;

  let updateBtn = `<button type="button" id="update-btn" onclick="updateCustomer(${index})">Update</button>`;
  document.getElementById("itemBtn").innerHTML = updateBtn;
};

let clearValues = () => {
  cusName.value = "";
  cusTelNo.value = "";
};

const deleteCustomer = (index) => {
  customers.splice(index, 1);
  loadCustomers();
};
