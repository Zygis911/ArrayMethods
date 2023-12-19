function generateInvoice(customerName, customerAdress, invoiceDate, items) {

    const invoice = {
        customer: {
            name: customerName,
            address: customerAdress,
        },
        date: invoiceDate,
        items: items
    }

    return invoice;

}

const customerName = "Vardenis pavardenis";
const customeAdress = 'Vilnius g. etc. 33';
const invoiceDate = "2023-12-14";
const items =  [
    {name: 'Product A', price: 10, quantity: 2},
    {name: 'Product B', price: 20, quantity: 1}
]

const invoice = generateInvoice(customerName, customeAdress, invoiceDate, items)
console.log(invoice)