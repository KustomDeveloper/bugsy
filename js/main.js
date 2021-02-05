(() => {
  console.log('ready!');

    // Set variables
    const mobMenu = $('.mobile-menu');
    const closeBtn = $('.close-btn');

    // Reduce header size on scroll
    $(window).on('scroll', () => {
       console.log('alt scroll')
    })
    $(window).scroll(function() {
        if ($(document).scrollTop() > 100) {
          $('.topbar .logo').css({
            'width': '85px'
          });
          $('.topbar').css({
            'height': '80px'
          });
          
        }
        else {
          $('.logo').css({
            'width': '140px'
          });
          $('.topbar').css({
            'height': '120px'
          });
        }
    })

    // Show menu on mobile
    mobMenu.on('click', () => {
      mobMenu.hide();
      closeBtn.show();
      $('nav').show();
    })

    closeBtn.on('click', () => {
      mobMenu.show();
      closeBtn.hide();
      $('nav').hide();
    })
})();