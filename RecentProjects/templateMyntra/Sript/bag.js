const CONVENIENCE_FEES=99;
let bagItemObjects;
onLoad();

function onLoad(){
    loadBagItemObjects();
    displayBagItem();
    displayBagSummery();
}

function displayBagSummery(){
    let bagSummeryElement=document.querySelector('.bag-summary');

  let totalItems=bagItemObjects.length;
  let totalMRP=0;
  let totalDiscount=0;
  let currentMRP=0;

  bagItemObjects.forEach(bagItems=>{
    totalMRP+=bagItems.original_price;
    totalDiscount +=bagItems.current_price-bagItems.original_price;
    currentMRP=bagItems.current_price;
    
  });
      let finalPayment=currentMRP+CONVENIENCE_FEES;
  totalMRP=totalMRP.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
  totalDiscount=totalDiscount.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
  currentMRP=currentMRP.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
  finalPayment=finalPayment.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });

    bagSummeryElement.innerHTML=`<div class="bag-details-container">
    <div class="price-header">PRICE DETAILS (${totalItems} Items) </div>
      <div class="price-item">
      <span class="price-item-tag">Total MRP</span>
      <span class="price-item-value">${totalMRP}</span>
      </div>
      <div class="price-item">
      <span class="price-item-tag">Discount on MRP</span>
      <span class="price-item-value priceDetail-base-discount">${totalDiscount}</span>
      </div>
      <div class="price-item">
      <span class="price-item-tag">Current MRP</span>
      <span class="price-item-value priceDetail-base-discount">₹${currentMRP}</span>
      </div>
      <div class="price-item">
        <span class="price-item-tag">Convenience Fee</span>
        <span class="price-item-value">₹99</span>
      </div>
    <hr>
      <div class="price-footer">
        <span class="price-item-tag">Total Amount</span>
        <span class="price-item-value">₹${finalPayment}</span>
      </div>
  </div>
  <button class="btn-place-order">
    <div class="css-xjhrni">PLACE ORDER</div>
  </button>`;
}


function loadBagItemObjects(){
    bagItemObjects=bagItems.map(itemId =>{
        for(let i=0;i<items.length;i++)
        {
            if(itemId==items[i].id){
                return items[i];
            }
        }
    });
   
}
function displayBagItem(){

    let containerElement=document.querySelector('.bag-items-container');
    let innerHtml='';
    bagItemObjects.forEach(bagItems => {
        innerHtml +=generateItemHtml(bagItems);
        
    });
    containerElement.innerHTML=innerHtml;
}
function removeFromBag(itemId){
    bagItems=bagItems.filter(bagitemId =>bagitemId !=itemId)
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
    loadBagItemObjects();
    displayBagIcon();
    displayBagItem();
    displayBagSummery();
}
    

function generateItemHtml(item){
return `<div class="bag-item-container">
<div class="item-left-part">
  <img class="bag-item-img" src="../${item.image}">
</div>
<div class="item-right-part">
  <div class="company">${item.company}</div>
  <div class="item-name">${item.item_name}">
    <span class="current-price">${item.current_price}</span>
    <span class="original-price">${item.original_price}</span>
    <span class="discount-percentage">(${item.discount_percentage}%)</span>
  </div>
  <div class="return-period">
    <span class="return-period-days">${item.return_period}</span> return available
  </div>
  <div class="delivery-details">
    Delivery by
    <span class="delivery-details-days">${item.delivery_date}</span>
  </div>
  </div>
  <div class="remove-from-cart" onClick="removeFromBag(${item.id})">X</div>
  </div>`
}