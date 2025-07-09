let customer = [
  {
    email: "saman@gmail.com",
    password: "saman"
  },
  {
    email: "kamal@gmail.com",
    password: "kamal"
  }
]

let signup = () =>{

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let repeatpassword = document.getElementById("repeatPassword").value;
  if (password === repeatpassword && email != null && password != null && repeatpassword != null) {
    customer.push({
      email: email,
      password: password,
    });
    window.location.href = "../forms/login.html";
    alert("Signup successful");
  } else {
    alert("Password does not match");
  }
}

let log = () =>{
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
    if (email === "admin@gmail.com" && password === "admin123") {
      window.location.href = "../admin.html";
      alert("Welcome, Admin!");
    } else {
      for (let i=0; i<customer.length; i++) {
        if (email === customer[i].email && password === customer[i].password) {
          window.location.href = "../customer.html";
          alert("Login successful");
          break;
        }
      }
    }
}