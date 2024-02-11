jQuery($ => {
    const $navbar = $('#navbarNav');
  
    $navbar.find('.nav-link').on('click', () => {
      setTimeout(() => {
        $navbar.collapse('hide');
      }, 100);
    });
});

// jQuery : JavaScript library. Code found on stackoverflow https://stackoverflow.com/questions/70510645/how-can-i-hide-the-bootstrap-drop-down-menu-after-clicking-a-menu-link?rq=3
