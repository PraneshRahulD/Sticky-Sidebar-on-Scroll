var stickitLeft = $('.stickthis').offset.left;
var stickitWidth = $('.stickthis').width() + 'px';
var stickitHeight = $('.stickthis').height() + 'px';
var stickySidebarToTop = $('.stickthis').offset().top;
$(window).scroll(function() {
  var windowToTop = $(window).scrollTop();
  if (windowToTop + 10 > stickySidebarToTop) {
    $('.stickthis').css({
      'position': 'fixed',
      'top': '10px',
      'left': stickitLeft,
      'width': stickitWidth,
      'height': stickitHeight
    })
  } else {
    $('.stickthis').removeAttr('style');
  }
})