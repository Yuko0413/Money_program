
const products = {
  1: {name: "オリジナルブレンド200g", price:500},
  2: {name: "オリジナルブレンド500g", price:900},
  3: {name: "スペシャルブレンド200g", price:700},
  4: {name: "スペシャルブレンド500g", price:1200},
};
let purchases = [];

const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");


function add(){
  const productID=priceElement.value;
  const number=parseInt(numberElement.value);
  const product =products[productID];

  if(!product || number <= 0){
    alert("商品が選択されていないか、数量が正しくありません。");
    return;
  }

  let purchase = purchases.find(p => p.id === productID);
  if(purchase) {
    purchase.number += number;
  }  else {
    purchases.push({...product, id: productID, number:number});
  }

  alert(`${display()}\n小計${subtotal()}円`)
  priceElement.value="";
  numberElement.value="";
}

function display(){
  return purchases.map(purchase => `${purchase.name}${purchase.price}円:${purchase.number}点`).join("\n");
}


function subtotal(){
  return purchases.reduce((prev, purchase) => prev + purchase.price * purchase.number, 0);
}

function calcPostageFromPurchase(sum){
  if (sum ==0 || sum >= 3000){
     return 0;
    } else  if(sum<2000){
     return 500;
    } else {
      return 250;
    }
  }

  function calc(){
    let sum = subtotal();
    let postage = calcPostageFromPurchase(sum);
    alert(`小計は${sum}円、送料は${postage}円です。合計は${sum+postage}円です。`);
    purchases = [];
    priceElement.value = "";
    numberElement.value = "";
  }
  


/*

    price: parseInt(price),
    number:parseInt(number),
 };

let newPurchase = true;

purchases.forEach((item) => {
  if(item.price === purchase.price){
    newPurchase = false;
  }
})

if(purchases.length < 1 || newPurchase){
  purchases.push(purchase);
} else {
  for(let i=0;i<purchases.length;i++){
    if(purchases[i].price === purchase.price){
    purchases[i].number += purchase.number;
  }
 }
}
 
 window.alert(`${display()}\n小計${subtotal()}円`);
 priceElement.value ="";
 numberElement.value ="";
}


function display(){
  return purchases.map(purchase => {
    return`${purchase.price}円が${purchase.number}点`
  }).join("\n");
};

function subtotal(){
  return purchases.reduce((prev, purchase) => {
    return prev + purchase.price*purchase.number
  }, 0);
}

function calc(){
let sum=subtotal();
let postage=calcPostageFromPurchase(sum);
window.alert(`小計は${sum}円、送料は${postage}円です。合計は${sum+postage}円です。`)
purchases =[];
priceElement.value="";
numberElement.value="";
}






  let sum=0;
  for(let i=0;i<purchases.length;i++){
    sum += purchases[i].price*purchases[i].number;
  }

  return sum;
  let string = "";
  for(let i=0;i<purchases.length;i++){
    string += `${purchases[i].price}円が${purchases[i].number}点\n`;
  }
  return string;  
  
  sum += purchases[i].price*purchases[i].number;
}

for(let i=0;i<purchases.length;i++){

window.alert(`送料は${postage}円です。合計は${postage+sum}円です。`)
purchases =[];
priceElement.value="";
numberElement.value="";
}



    const price = priceElement.value;
    const number = numberElement.value;
    let purchase = {
      price: parseInt(price),
      number: parseInt(number),
    };
  
    let newPurchase = true; //--1
  
    purchases.forEach((item) => {  //--2
      if(item.price === purchase.price) {
        newPurchase = false;
      }
    })
  
    if(purchases.length < 1 || newPurchase) { //--3
      purchases.push(purchase);
    } else {
      for(let i = 0; i < purchases.length; i++) {
        if(purchases[i].price === purchase.price) {
          purchases[i].number += purchase.number;
        }
      }
    }
  
    window.alert(`${display()}\n小計${subtotal()}円`);
    priceElement.value = "";
    numberElement.value = "";
  }

*/
