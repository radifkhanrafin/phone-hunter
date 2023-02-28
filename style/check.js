const {brand,phone_name,slug,image} = phone
const phonecard=document.createElement('div')
phonecard.classList.add('col')
phoneContainer.innerHTML = `
<div class="card">
<img src="${image}" class="card-img-top" alt="...">
<div class="card-body">
<h3 class="card-title"> Model: ${phone_name}</h3>
<h5 class="">Brand: ${brand}</h5>
<p class="card-text"> ${slug}</p>
</div>
</div>
`
phoneContainer.appendChild(phonecard)












