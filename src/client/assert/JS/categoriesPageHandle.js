/*dropdown menu*/
const dropdown = document.querySelector('.dropdown')

const selected = dropdown.querySelector('.selected')
const menu = dropdown.querySelector('.menu-dropdown')
const options = dropdown.querySelectorAll('.menu-dropdown li')

selected.addEventListener('click', ()=>{
    if(selected.classList.contains('clicked')){
        menu.classList.remove('open')
        selected.classList.remove('clicked')
    }
    else{
        selected.classList.add('clicked');
        menu.classList.add('open');
    }
});

options.forEach(option =>{
    option.addEventListener('click', ()=>{
        selected.querySelector('div span').innerText = option.innerText;
        selected.classList.remove('clicked');
        menu.classList.remove('open');

        options.forEach(option=>{
            option.classList.remove('active')
        });

        option.classList.add('active');

        /*sort elem */
        if(selected.querySelector('div span').innerText === 'Default sorting'){
            while(field.firstChild){
                field.removeChild(field.firstChild);
            }
            field.append(...ar);
        }
        if(selected.querySelector('div span').innerText === 'Sort by price: low to high'){
            sortElem(field,li,true);
        }
        if(selected.querySelector('div span').innerText === 'Sort by price: high to low'){
            sortElem(field,li,false);
        }
    })
});


/*side bar*/
const cates = document.querySelectorAll('.cate');

cates.forEach(cate=>{
    const expand_btn = cate.querySelector('.expand-btn');
    const list = cate.querySelector('.expand-lst');

    expand_btn.addEventListener('click', ()=>{
        if(expand_btn.classList.contains('plus')){
            expand_btn.classList.remove('plus');
            expand_btn.classList.add('minus');
            list.classList.remove('open')
            list.classList.add('hide');

        }else{
            expand_btn.classList.remove('minus');
            expand_btn.classList.add('plus');
            list.classList.remove('hide');
            list.classList.add('open');
        }
    });
});


/*intersection observer*/
function load(el){
    el.classList.remove('opacity-0')
}

function ready(){
    if('IntersectionObserver' in window){
        var lazyContents = document.querySelectorAll('.products .list .card');

        let observer = new IntersectionObserver((entries)=>{
            entries.forEach(entry=>{
                if (entry.isIntersecting){
                    load(entry.target)
                }
            })
        });

        lazyContents.forEach(content =>{
            observer.observe(content)
        });

    }
}

document.addEventListener('DOMContentLoaded', ready);

/*product filter*/

const price = document.querySelectorAll('.priceValue');
const cards = document.querySelectorAll('.list .card');

let field = document.querySelector('.items');
let li = Array.from(field.children);
let ar = [];

for(let i of li){
    const last = i.lastElementChild;
    const x = last.children[0].children[1].children[2].children[0].innerText
    const y = Number(x)
    i.setAttribute('data-price',y);
    ar.push(i)
}

function sortElem(field,li,asc){
    let dm, sortLi;
    dm = asc ? 1:-1;
    sortLi = li.sort((a,b)=>{
        const ax = a.getAttribute('data-price');
        const bx = b.getAttribute('data-price');

        return ax > bx ? (1*dm) : (-1*dm);
    });

    while(field.firstChild){
        field.removeChild(field.firstChild);
    }
    field.append(...sortLi);
}



