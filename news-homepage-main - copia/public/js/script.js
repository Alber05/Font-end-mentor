
const hamMenu = document.getElementById('ham-menu');
const mobileNav = document.getElementById('mobile-nav');
const closeIcon = document.getElementById('close-icon');
/* ABRIR MENU */
hamMenu.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden')
})

/* CERRAR MENU */

closeIcon.addEventListener('click', () => {
    mobileNav.classList.add('hidden')
})

/* CIERRA EL MENU CUANDO LA PANTALLA SUPERA LOS 768PX*/
addEventListener('resize', () => {
    
    if (window.innerWidth >= 768) {
        mobileNav.classList.add('hidden')}
    });
