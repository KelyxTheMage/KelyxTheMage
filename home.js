$(document).ready(function() {

  var slideIndex = 1
  var slideshowTime = 5000
  var slideFadeTime = 300

  var intervalId = setInterval(slideshow, slideshowTime)

  $('.slideshow-image').click(function() {
    clearInterval(intervalId)
    $('.slideshow-overlay').fadeIn(slideFadeTime)
    $('.slideshow-image').addClass('slideshow-zoom')
  })

  $('.slideshow-overlay').click(function() {
    $('.slideshow-overlay').fadeOut(slideFadeTime)
    $('.slideshow-image').removeClass('slideshow-zoom')
    intervalId = setInterval(slideshow, slideshowTime)
  })

  function slideshow() {
    $('.slideshow-image').fadeOut(slideFadeTime)
    $('.slideshow-image').eq(slideIndex).delay(slideFadeTime).fadeIn(slideFadeTime)
    slideIndex = slideIndex + 1
    if ( slideIndex == $('.slideshow-image').length ) {
      slideIndex = 0
    }
  }

})
