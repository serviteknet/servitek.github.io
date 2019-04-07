$(document).ready(function(){
  console.log('ready!');
  $('.has-sub-menu').on('mouseover', function() {
    $(this).find('.sub-menu').show();
  })

  $('.has-sub-menu').on('mouseout', function() {
    $(this).find('.sub-menu').hide();
  })

  function initMobileMenu(toggle, menu) {
    menu.classList.add('mobile-menu-closed');
    ['click', 'touchstart'].forEach(function(eventName) {
      toggle.addEventListener(eventName, function(evt) {
        evt.preventDefault();
        menu.classList.toggle('mobile-menu-open');
        menu.classList.toggle('mobile-menu-closed');
      });
    });
  }

  var toggle = document.getElementById('mobile-menu-toggle');
  var menu = document.getElementById('main-menu-mobile');
  initMobileMenu(toggle, menu);

});



