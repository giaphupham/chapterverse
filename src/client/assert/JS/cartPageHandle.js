
const products = document.querySelectorAll('tbody tr')


const agree = document.querySelector('.agree')
const subtotal = document.querySelector('.subtotal')
const checkout = document.querySelector('.checkout-btn')

var subT = 0

products.forEach(product =>{
    const plus = product.querySelector('.plus')
    const minus = product.querySelector('.minus')
    const num = product.querySelector('.num')
    const total = product.querySelector('.total')
    const price = product.querySelector('.price')
    const deletetion = product.querySelector('.delete')
    const choose = product.querySelector('.choose')

    var counter = 1
    var totalPrice = 0
    
    plus.addEventListener("click", ()=>{
        counter++;
        counter = (counter < 10) ? "0" + counter : counter ;
        num.innerText = counter;
        var totalProduct = num.innerText;
        totalPrice = Math.round(((totalProduct * price.innerText)+ Number.EPSILON) * 100)  / 100;
        total.innerText = totalPrice
        if(choose.checked == true){
            subT += parseFloat(price.innerText)
            subtotal.innerText = '$' + Math.round((subT+ Number.EPSILON) * 100)  / 100;
        }
    });
    
    minus.addEventListener("click", ()=>{
        if(counter > 1){
            counter--;
            counter = (counter < 10) ? "0" + counter : counter ;
            num.innerText = counter;
            var totalProduct = num.innerText;
            totalPrice = Math.round(((totalProduct * price.innerText)+ Number.EPSILON) * 100)  / 100;
            total.innerText = totalPrice
            if(choose.checked == true){
                subT -= parseFloat(price.innerText)
                subtotal.innerText = '$' + Math.round((subT+ Number.EPSILON) * 100)  / 100;
            }
        }
    });

    deletetion.addEventListener('click',()=>{
        deletetion.parentElement.parentElement.remove()
        if(subT > 0){
            subT -= parseFloat(total.innerText)
            subtotal.innerText = '$' + subT
        }
    });

    choose.addEventListener('click',()=>{
        if(choose.checked == true){
             subT += parseFloat(total.innerText)
             subtotal.innerText = '$' + Math.round((subT+ Number.EPSILON) * 100)  / 100;
        }
        else{
            subT -= parseFloat(total.innerText)
            subtotal.innerText = '$' + Math.round((subT+ Number.EPSILON) * 100)  / 100;
        }
    });
});

checkout.addEventListener('click',()=>{
    console.log(agree)
    if(agree.checked == true && subT > 0){
        checkout.setAttribute("href", "/src/client/pages/checkoutPage.html");
    }
    else if(agree.checked == false){
        checkout.removeAttribute("href")
        alert('Please agree to terms and condition!')
    }
    else if(subT <= 0){
        checkout.removeAttribute("href")
        alert('Please choose product!')
    }
});







