document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header');
    header.classList.add("header-pinned");
	
	let lastScroll = 0;
    window.addEventListener('scroll', function () {
      let currentScroll = window.scrollY;
  
      if (currentScroll > 100 && lastScroll <= 100 ) {
        lastScroll = currentScroll;
        header.classList.remove("header-pinned");
        header.classList.add("header-unpinned");
      } else if (currentScroll <= 100 && lastScroll > 100) {
        lastScroll = currentScroll;
        header.classList.add("header-pinned");
        header.classList.remove("header-not-top");
        header.classList.remove("header-unpinned");
      }else if(lastScroll > 100 && currentScroll > lastScroll) {
        lastScroll = currentScroll;
        header.classList.remove("header-not-top");
      }else if (lastScroll > 100 && currentScroll < lastScroll) {
        lastScroll = currentScroll;
        header.classList.add("header-not-top");
      }
    }, false);
});