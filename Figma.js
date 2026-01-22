document.addEventListener('DOMContentLoaded',function(){
    const toggleButton=document.querySelector('.humberg');
    const mobileMenu=document.querySelector('.navbar__mobile-menu-items');
    toggleButton.addEventListener('click',function(){
        mobileMenu.classList.toggle('active')
    });
});