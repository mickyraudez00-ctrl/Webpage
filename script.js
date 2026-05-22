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
document.getElementById(
'loadingPopup'
).style.display = 'flex';
const customerPhone =
document.getElementById(
'customerPhone').value;

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

const message =
document.getElementById(
'orderMessage').value;

/* RECEIPT */

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

/* SEND EMAIL */

emailjs.send(

"service_5b1qgvg",

"template_708jsxg",

{

customer_name:
customerName,

customer_phone:
customerPhone,

service:
service,

transaction_id:
transaction,

message:
message

}

)

.then(function(){

alert(
"Order Submitted Successfully"
);
setTimeout(function(){

document.getElementById(
'loadingPopup'
).style.display = 'none';

alert(
"ORDER CONFIRMED SUCCESSFULLY"
);

},3000);
});

/* WHATSAPP */

let whatsappMessage =

`NEW ORDER

Customer:
${customerName}

Phone:
${customerPhone}

Service:
${service}

Transaction:
${transaction}`;

window.open(

`https://wa.me/256751012463?text=
${encodeURIComponent(
whatsappMessage)}`,

'_blank'

);

});

}
