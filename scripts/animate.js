const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

var win = window,
    docEl = document.documentElement,
    $logo = document.getElementById('logo-scroll');

win.onscroll = function(){
   var stop = (this.scrollY || docEl.scrollTop)  - (docEl.clientTop || 0);
   $logo.style.backgroundColor =  stop > 100 ? "rgba(41, 39, 39, 0.5)!important;":"rgba(41, 39, 39, 0.9)" ;
};