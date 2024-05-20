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
   $logo.style.backdropFilter = stop > 100 ? "blur(50px)!important;":"blur(50px)";
};