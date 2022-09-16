
// detecter lorsqu'on scroll
window.onscroll = function() { sticky() };
// recuperer les elements 
let header = document.getElementById('sticky-header');
let stickycompenent = header.offsetTop;

// faire la fonction
function sticky() {
    if (window.pageYOffset > stickycompenent) {
        header.classList.add("sticky")
    }
    else{ header.classList.remove("sticky")
}
}