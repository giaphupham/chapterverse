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


