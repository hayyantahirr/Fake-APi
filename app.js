let card =document.querySelector(`.card`)
let h1 =document.querySelector('h1')


axios('https://api.escuelajs.co/api/v1/products')
.then((res)=>{
console.log(res.data);
res.data.map((item)=>{
card.innerHTML+=`<img src="./Assets/Mobile Phones/Ipad_Pro_12.9_inch.png" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${item.title}</h5>
  <h5 class="card-title">${item.price}</h5>
  <p class="card-text">${item.description}</p>
  <a href="#" class="btn btn-primary">Add to cart</a>
</div>`
})
})
.catch((err)=>{

})
