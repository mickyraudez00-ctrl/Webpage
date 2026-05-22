const serviceSelect =
document.getElementById('serviceSelect');

const priceDisplay =
document.getElementById('priceDisplay');

if(serviceSelect){

serviceSelect.addEventListener('change',()=>{

const selected =
serviceSelect.options[
serviceSelect.selectedIndex
];

const price =
selected.dataset.price;

if(price){

const half = price / 2;

priceDisplay.innerHTML =

`Total Price:
UGX ${Number(price).toLocaleString()}
<br><br>

Half Payment:
UGX ${Number(half).toLocaleString()}`;

}

});

}

const form =
document.getElementById('orderForm');

if(form){

form.addEventListener('submit',

function(e){

e.preventDefault();

const customerName =
document.getElementById(
'customerName').value;

const selected =
serviceSelect.options[
serviceSelect.selectedIndex
];

const service =
selected.value;

const price =
Number(selected.dataset.price);

const half = price / 2;

const transaction =
document.getElementById(
'transactionID').value;

document.getElementById(
'receiptName').innerText =
customerName;

document.getElementById(
'receiptService').innerText =
service;

document.getElementById(
'receiptPrice').innerText =
'UGX ' +
price.toLocaleString();

document.getElementById(
'receiptHalf').innerText =
'UGX ' +
half.toLocaleString();

document.getElementById(
'receiptTransaction').innerText =
transaction;

document.getElementById(
'orderStatus').innerText =
'CONFIRMED';

let whatsappMessage =

`Hello DJ MICKY PRO,

NEW ORDER

Customer:
${customerName}

Service:
${service}

Total:
UGX ${price}

Half Paid:
UGX ${half}

Transaction ID:
${transaction}`;

window.open(

`https://wa.me/256751012463?text=
${encodeURIComponent(
whatsappMessage)}`,

'_blank'

);

});

}