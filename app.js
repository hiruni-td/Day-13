// alert("hii");

// localStorage.clear()

// localStorage.setItem("name", "nimal");

// let cname = localStorage.getItem("name");

// console.log(cname);

const customerList = [
    {
        Name: "Hiruni",
        Age: 20,
        Address: "Balangoda"
    },
    {
        Name: "Hiruni",
        Age: 20,
        Address: "Balangoda"
    },
    {
        Name: "Hiruni",
        Age: 20,
        Address: "Balangoda"
    },
    {
        Name: "Hiruni",
        Age: 20,
        Address: "Balangoda"
    },
]

let arCustomer = JSON.stringify(customerList);
localStorage.setItem("customerList", arCustomer);
let listCustomer = localStorage.getItem("customerList");
console.log(JSON.parse(listCustomer));
