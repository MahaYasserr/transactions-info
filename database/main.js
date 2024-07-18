

async function getData() {
    try {
        // Fetch customer data
        let customerResponse = await fetch("http://localhost:3000/customers");
        let customerData = await customerResponse.json();
        console.log("Customer Data:", customerData);

        // Fetch transaction data
        let transactionResponse = await fetch("http://localhost:3000/transactions");
        let transactionData = await transactionResponse.json();
        console.log("Transaction Data:", transactionData);

        // Combine customer and transaction data
        let data = customerData.map(customer => {
            // Find the transaction for the current customer
            let transaction = transactionData.find(t => {
                console.log(`Comparing customer.id (${customer.id}) with transaction.customer_id (${t.customer_id})`);
                return t.customer_id === Number(customer.id);
            });
            console.log(`Transaction for customer ${customer.id}:`, transaction);
            return {
                ...customer,
                amount: transaction ? transaction.amount : "No transaction"
            };
        });

        console.log("Combined Data:", data);

        displayData(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function displayData(data) {
    let cartona = ``;
    for (let i = 0; i < data.length; i++) {
        cartona += `
        <div class="col-md-6">
            <p>${data[i].name}</p>
        </div>
        <div class="col-md-6">
            <p>${data[i].amount}</p>
        </div>
        `;
    }
    document.getElementById("information").innerHTML = cartona;
    
}

getData();



let search= document.getElementById("search")
function searchName(){
    let item= search.value
    console.log(item);
    for (let i = 0; i < data.length; i++) {
        if (data[i].name.includes(item)==true){
            `
            <div class="col-md-6">
            <p>${data[i].name}</p>
        </div>
        <div class="col-md-6">
            <p>${data[i].amount}</p>
        </div>
            `
        }
        
    }
    document.getElementById("information").innerHTML = cartona;
}
searchName()


