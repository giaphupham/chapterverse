const change = document.querySelector('#change');
const modal = document.querySelector('#modal');

change.addEventListener('click',()=>{
    modal.classList.remove('hidden')
});

/*modal handle*/
const submit = document.querySelector('.Submit');
submit.addEventListener('click',()=>{

    const fullName = document.querySelector('.FullName').value;
    const PhoneNum = document.querySelector('.PhoneNum').value;
    const City = document.querySelector('.City').value;
    const District = document.querySelector('.District').value;
    const Ward = document.querySelector('.Ward').value;
    const House = document.querySelector('.houseNo').value;


    if(fullName === '' || PhoneNum === '' || City === '' || District === '' || Ward === '' || House === ''){
        alert('ngu qua')
    }
    else{
        var address = House + ", " + Ward + ", " + District + ", " + City
        var info = fullName + " " + PhoneNum

        document.querySelector('.info').innerText = info
        document.querySelector('.address').innerText = address
        modal.classList.add('hidden')  
    }

});

const cancel = document.querySelector('.Cancel');
cancel.addEventListener('click',()=>{
    modal.classList.add('hidden')
})


/*map handle*/
function showLocationOnMap() {
    const City = document.querySelector('.City').value;
    const District = document.querySelector('.District').value;
    const Ward = document.querySelector('.Ward').value;
    const House = document.querySelector('.houseNo').value;

    var addressInput = House + "," + Ward + "," + District + "," + City + "," + "Việt Nam"
    var geocodeUrl = 'https://nominatim.openstreetmap.org/search?q=' + addressInput + '&format=json&polygon=1&addressdetails=1';
    
    fetch(geocodeUrl)
    .then(response => response.json())
    .then(data => {
        var lat = parseFloat(data[0].lat);
        var lon = parseFloat(data[0].lon);
        
        var map = L.map('map').setView([lat, lon], 18);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        maxZoom: 30
        }).addTo(map);
        
        L.marker([lat, lon]).addTo(map)
        .bindPopup(addressInput)
        .openPopup();
    })
    .catch(error => console.log(error));

}

document.querySelector('.houseNo').addEventListener('change', showLocationOnMap);


/* */
const products = document.querySelectorAll('tbody tr')
var orderTotal = document.querySelector('.orderTotal')
var plus = 0

products.forEach(product =>{
    const total = product.querySelector('.total');
    const price = product.querySelector('.price');
    const quantity = product.querySelector('.quantity');

    total.innerText = parseFloat(price.innerText * quantity.innerText)
    plus += parseFloat(total.innerText)
});

orderTotal.innerText = plus



