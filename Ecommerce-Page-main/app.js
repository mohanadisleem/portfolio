let bigImg =document.querySelector(".big .bigImg");
let smallImg =document.querySelectorAll(".image-list .cover img");
smallImg.forEach(element => {
element.onclick = _=> {
    bigImg.src = element.src;
    
}
});
let icon =document.querySelector("#Cart");
let prodect=document.querySelector(".Product-List");
icon.onclick= _=>{
    prodect.classList.toggle("show");
};

let minusButton = document.querySelector("#Less");
let plusButton = document.querySelector("#Add");
let totalCount = document.querySelector("#Quantity");
let price = document.querySelector("#amount");

var count = 0;
totalCount.innerHTML = count;

const handleIncrement = _=> {
    count++;
    totalCount.innerHTML = count;
    price.innerHTML = 125*count;
  };
  
  const handleDecrement = _=> {
      if (count>0) {
        count--;
        totalCount.innerHTML = count;
        price.innerHTML = 125*count;
      } else {
        totalCount.innerHTML = 0;
      }
  };
  
plusButton.addEventListener("click", handleIncrement);
minusButton.addEventListener("click", handleDecrement);