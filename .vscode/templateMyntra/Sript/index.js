
let bagItems;

onLoad();

function onLoad(){
   let bagItemsStr=localStorage.getItem('bagItems');
   bagItems=bagItemsStr?JSON.parse(bagItemsStr) :[];
displayItemsOnHomePage();
displayBagIcon();
}


function addToBag(itemId){
bagItems.push(itemId)
localStorage.setItem('bagItems',JSON.stringify(bagItems));
displayBagIcon();
}

function displayBagIcon(){
    let bagItemsCountElement=document.querySelector('.bag-item-count');
 
    if(bagItems.length>0){
        bagItemsCountElement.style.visibility='visible';
        bagItemsCountElement.innerText=bagItems.length;
    }
    else{
        bagItemsCountElement.style.visibility='hidden';
    }
}

function displayItemsOnHomePage(){
    let itemsContainerElement=document.querySelector('.items-container');
    if(!itemsContainerElement){
        return;
    }
    let innerHtml='';
    items.forEach(item =>{
    innerHtml +=`
    <div class="item-container">
        <img src="${item.image}" alt="Item image" class="item-image">
        <div class="rating">${item.rating.stars} &#9733; | ${item.rating.count}</div>
        <div class="company-name">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
            <span class="current-price">${item.current_price}</span>
            <span class="original-price">${item.original_price}</span>
            <span class="discount">(${item.discount_percentage}%)</span>
        </div>
        <button class="btn-add-bag" onClick="addToBag(${item.id})">Add to Bag</button>
    </div>`
    });
    
    itemsContainerElement.innerHTML=innerHtml;
    
    }






