const nave = document.querySelector('.navigation_aside');
const toggle = document.querySelector('.navigation_aside_toggle');
const closes = document.querySelector('.navigation_aside_close');
toggle.addEventListener('click', ()=>{
    const visibility = nave.getAttribute('data-visible');
    if(visibility==="false"){
        nave.setAttribute("data-visible", true);
        toggle.setAttribute('aria-expanded', true);
    }
});
closes.addEventListener('click', ()=>{
    const visibility = nave.getAttribute('data-visible');
    if(visibility==="true"){
        nave.setAttribute("data-visible", false);
        close.setAttribute('aria-expanded', false);
    }
});
