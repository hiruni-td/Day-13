// alert("hii");

// localStorage.clear()

// localStorage.setItem("name", "nimal");

// let cname = localStorage.getItem("name");

// console.log(cname);

const customerList = []

let arCustomer = JSON.stringify(customerList);
localStorage.setItem("customerList", arCustomer);
let listCustomer = localStorage.getItem("customerList");
console.log(JSON.parse(listCustomer));


function addCustomer() {

    let customerId = document.getElementById("cutomerId").value;
    let customerName = document.getElementById("cutomerName").value;
    let customerAge = document.getElementById("cutomerAge").value;
    let customerAddress = document.getElementById("cutomerAddress").value;

    const customer = {
        custId: customerId,
        custName: customerName,
        custAge: customerAge,
        custAddress: customerAddress,
    }

    // saveCustomerArray.push(customer);
    // console.log(saveCustomerArray);
    saveCustomerLocalDB(customer);

}

// function saveCustomerLocalDB(){

// }


