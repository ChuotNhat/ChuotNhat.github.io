$(document).ready(function() {
  var btnMenu = $('[data-btn-menu]'),
      menuContent = $('[data-menu]');

  btnMenu.on('click', function() {
    menuContent.slideToggle();
  });
});