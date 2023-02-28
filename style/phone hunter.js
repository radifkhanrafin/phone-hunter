const loadAllData = (searchValue, dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.data, dataLimit))
}
const displayData = (phones, dataLimit) => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.innerHTML = '';
    const ShowAllBnt = document.getElementById('Show-all')
    if (dataLimit && phones.length > 10) {
        phones = phones.slice(0, 10)
        ShowAllBnt.classList.remove('d-none')

    }
    else {
        ShowAllBnt.classList.add('d-none')
    }

    const noPhone = document.getElementById('noPhone');
    if (phones.length === 0) {
        noPhone.classList.remove('d-none')
    }
    else {
        noPhone.classList.add('d-none')
    }

    phones.forEach(phone => {
        console.log(phone)
        const { brand, phone_name, slug, image } = phone
        const phoneDiv = document.createElement('div')
        phoneDiv.classList.add('col')
        phoneDiv.innerHTML = `
        <div class="card">
          <div class=h-50> 
          <img src="${image}" class="card-img-top image-fluid p-5 w-75 text-center" alt="...">
           </div>
        <div class="card-body h-25">
         <h5 class="card-title"> Model : ${phone_name}</h5>
         <h6 class="card-title"> Brand : ${brand}</h6>
         <p class="card-text"> ${slug}</p>
        </div>
        </div>
        `
        phoneContainer.appendChild(phoneDiv);
    });
    troglerSpinner(false)
}



const searchProssess = (dataLimit) =>{
    troglerSpinner(true)
    const searchFild = document.getElementById('input-Fild');
    const searchValue = searchFild.value;
    searchFild.value = ''
    loadAllData(searchValue, dataLimit)
}
document.getElementById('search-btn').addEventListener('click', function () {
    searchProssess(10)
})


const troglerSpinner = isLoading => {
    const spinner = document.getElementById('spinner')
    if (isLoading) {
        spinner.classList.remove('d-none')
    }
    else {
        spinner.classList.add('d-none')
    }
}

document.getElementById('Show-all-aLL').addEventListener('click' , function () {
    searchProssess()
    console.log('ijj')
})
// loadAllData('')