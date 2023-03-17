let API_URL = "https://restcountries.com/v3.1/all";
let toggle = document.querySelector(".toggle");
let moon = document.querySelector(".fa-moon");
let row = document.querySelector(".row");
let search = document.querySelector(".search");
fetch(API_URL)
.then((Response)=> Response.json())
.then((data) =>{
    for (let i = 0; i < data.length; i++) {
        row.innerHTML +=
        `<div class="col-lg-3 col-md-6 col-sm-12">
            <div class="card my-4">
                <img class="card-img-top" src="${data[i].flags.svg}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title"><a href="detail.html? id="${data[i].name.common}" target="_blank">${data[i].name.common}</a></h5>
                    <p class="card-text"><b>Population:</b> ${data[i].population}</p>
                    <p class="card-text"><b>Region:</b> ${data[i].region}</p>
                    <p class="card-text"><b>Capital:</b> ${data[i].capital}</p>
                </div>
            </div>
        </div>`
        
    }
})


toggle.addEventListener("click", function(e){
    document.body.classList.toggle("dark-mode");
    toggle.classList.toggle("dark-mode");
    moon.classList.toggle("fa-solid");
})

let cardTitle = document.getElementsByClassName(`card-title`);
search.addEventListener(`input`, function(e){
    Array.from(cardTitle).forEach(row =>{
        if (row.innerText.toLowerCase().includes(search.value.toLowerCase())) {
            row.parentElement.parentElement.style.display = "grid";
        }else {
            row.parentElement.parentElement.style.display = "none";
        }
    })
})