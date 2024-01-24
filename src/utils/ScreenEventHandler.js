class ScreenEventHandler {
  // this function is not working fine as desired and not even well structured lol, imma just keep it here and find a solution later
  static makeScrollSmooth() {
    var lastScrollTop = 0;
    var viewportHeight = window.innerHeight;
    window.addEventListener('scroll', function () {
      var currentScrollTop = window.scrollY || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        // L'utilisateur fait défiler vers le bas
        if (window.scrollY.valueOf() > 72 && window.scrollY.valueOf() < viewportHeight) {
          window.scrollTo({
            top: viewportHeight,
            behavior: 'smooth',
          });
        }
      } else if (currentScrollTop < lastScrollTop) {
        if (window.scrollY.valueOf() < 80) {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }
      }
      // Update screen scroll position
      lastScrollTop = currentScrollTop;
    });
  }
}

export { ScreenEventHandler };
