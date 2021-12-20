const nave_home = document.querySelector('.nav_aside');
const home = document.querySelector('.aside_toggle--home');
const closes_home = document.querySelector('.aside_close--home');
home.addEventListener('click', ()=>{
    const visibility = nave_home.getAttribute('data-visible');
    console.log(visibility);
    if(visibility==="false"){
        nave_home.setAttribute("data-visible", true);
        home.setAttribute('aria-expanded', true);
    }
});
closes_home.addEventListener('click', ()=>{
    const visibility = nave_home.getAttribute('data-visible');
    if(visibility==="true"){
        nave_home.setAttribute("data-visible", false);
        closes_home.setAttribute('aria-expanded', false);
    }
});