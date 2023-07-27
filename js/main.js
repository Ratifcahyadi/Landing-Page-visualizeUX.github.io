const menuOpen = document.querySelector('.menu-toggle');
const linkwrapper = document.querySelector('.link-wrapper')

menuOpen.addEventListener('click',  () => {
    menuOpen.classList.toggle('fa-circle-xmark');
    linkwrapper.classList.toggle('active');
});
