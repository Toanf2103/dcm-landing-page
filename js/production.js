!function(){window;const e=document.documentElement;if(e.classList.remove("no-js"),e.classList.add("js"),document.body.classList.contains("has-animations")){(window.sr=ScrollReveal()).reveal(".reveal-on-scroll",{duration:600,distance:"20px",easing:"cubic-bezier(0.5, -0.01, 0, 1.005)",origin:"bottom",interval:100})}}();

function showContent(section) {
    const packageProduct = document.getElementById('package-product');
    const moreService = document.getElementById('more-service');

    packageProduct.style.display = (section === 'product-package') ? 'flex' : 'none';
    moreService.style.display = (section === 'more-service') ? 'flex' : 'none';

    // Gọi lại ScrollReveal sau khi thay đổi display
    if (window.sr) {
        window.sr.reveal('.reveal-on-scroll');
    }
}

window.onload = function() {
    showContent('product-package');
}