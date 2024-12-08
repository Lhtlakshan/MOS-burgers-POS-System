let email = document.getElementById("email");
let password = document.getElementById("password");

if (email === "admin@gmail.com" && password === "admin123") {
  alert("Welcome, Admin!");
  window.location.href = "../admin.html";
} else {
  window.location.href = "../customer_work.html";
}