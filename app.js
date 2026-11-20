// alert("hii");

// localStorage.clear()

// localStorage.setItem("name", "nimal");

// let cname = localStorage.getItem("name");

// console.log(cname);

/*const customerList = []

let arCustomer = JSON.stringify(customerList);
localStorage.setItem("customerList", arCustomer);
let listCustomer = localStorage.getItem("customerList");
console.log(JSON.parse(listCustomer));*/


// function addCustomer() {

//     let customerId = document.getElementById("CustomerId").value;
//     let customerName = document.getElementById("CustomerName").value;
//     let customerAge = document.getElementById("CustomerAge").value;
//     let customerAddress = document.getElementById("CustomerAddress").value;

//     const customer = {
//         custId: customerId,
//         custName: customerName,
//         custAge: customerAge,
//         custAddress: customerAddress,
//     }

//     // saveCustomerArray.push(customer);
//     // console.log(saveCustomerArray);
//     saveCustomerLocalDB(customer);

// }

// function saveCustomerLocalDB(customer){
//     if(localStorage.getItem("customerList")){

//         console.log(true);
//         let arOfCustomers = JSON.parse(localStorage.getItem("customerList"));
//         arOfCustomers.push(customer);

//         localStorage.setItem("customerList", JSON.stringify(arOfCustomers));
//     }else{
//         console.log(false);
//         const customerList = []
//         customerList.push(customer);
//         let arCustomer = JSON.stringify(customerList);

//     }

// }

// // create view customer

import Customer from "./model/Customer.js";
import Item from "./model/Item.js";

let customer = new Customer("001", "Hiruni", "20", "Balangoda");
console.log(customer);

let item = new Item();
console.log(item);


import { customerList } from "./Example.js";
console.log(customerList);

import { getSum } from "./Example.js";
let sum = getSum(10, 20);
console.log(sum);

import { customerList, getSum } from "./Example.js";
console.log(customerList);
let sum = getSum(10, 20);
console.log(sum);






