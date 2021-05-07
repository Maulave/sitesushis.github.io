var btnTop = document.getElementById('btnTop');

window.onscroll = function() {
    scrollFunction()
};
function scrollFunction() {
    if(document.body.scroll > 500 || document.documentElement.scrollTop > 500) {
        btnTop.style.opacity = "1";
    } else {
        btnTop.style.opacity = "0";
    }
}

btnTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0, 
        left: 0,
        behavior: "smooth"
    })
})

