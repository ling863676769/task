
var totalQty=document.getElementsByName('totalQty')[0];


var btnList=document.querySelectorAll('.btn-group .btn');
//
// for (const key in btnList) {
//     if (btnList.hasOwnProperty(key)) {
//         const element = btnList[key];
//         switch(element.name){
//             case 'increase':element.addEventListener('click',increaseValue);break;
//             case 'decrease':element.addEventListener('click',decreaseValue);break;
//             case 'addToCart':element.addEventListener('click',addToCart);break;
//         }        
//     }
// }

var increaseBtn=document.getElementsByName('increase');
var decreaseBtn=document.getElementsByName('decrease');
var addToCartBtn=document.getElementsByName('addToCart');

for(let i=0;i<increaseBtn.length;i++){
    increaseBtn[i].addEventListener('click',increaseValue);
}
// console.log(increaseBtn);


for(let i=0;i<decreaseBtn.length;i++){
    decreaseBtn[i].addEventListener('click',decreaseValue);
}
// console.log(decreaseValue);

for(let i=0;i<addToCartBtn.length;i++){
    addToCartBtn[i].addEventListener('click',addToCart);
}
// console.log(addToCart);



function increaseValue(e){
      var qtyObj=  e.target.nextElementSibling;
      var qty=parseInt(qtyObj.innerText);
      qty++;
      qtyObj.innerText=qty;
      console.log(qty);        
}
function decreaseValue(e){
    var qtyObj=  e.target.previousElementSibling;
    var qty=parseInt(qtyObj.innerText);
   if(qty>1) qty--;
   else qty=0;
    qtyObj.innerText=qty;
    console.log(qty);        
}

function addToCart(e){
    var qtyObj=  e.target.previousElementSibling.previousElementSibling;
    var qty=parseInt(qtyObj.innerText);
    var total=parseInt(totalQty.innerText);
    total+=qty;
    totalQty.innerText=total;  
}

