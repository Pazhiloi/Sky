$(function () {
   $(".menu__link , .footer__link").on("click", function (e) {
        e.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
   $('.menu__btn').on('click', function () {
  $('.menu__list').toggleClass('menu__list--active')
});

   $('.footer__btn').on('click', function () {
  $('.footer__list').toggleClass('footer__list--active')
});


  var helpers = {
	addZeros: function (n) {
		return (n < 10) ? '0' + n : '' + n;
	}
};

function sliderInit() {
  var $slider = $('.header__slider')
  $slider.each(function() {
    var $sliderParent = $(this).parent();
    $(this).slick({
      fade: true,
      dots: false,
    prevArrow: '<button class="prev-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14pt" height="22pt" viewBox="0 0 14 22" version="1.1"<g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 1.511719 10.269531 L 10.011719 1.921875 C 10.421875 1.519531 11.089844 1.519531 11.496094 1.921875 L 12.488281 2.894531 C 12.898438 3.296875 12.898438 3.949219 12.492188 4.351562 L 5.753906 11 L 12.492188 17.648438 C 12.898438 18.050781 12.898438 18.703125 12.488281 19.105469 L 11.496094 20.082031 C 11.085938 20.484375 10.421875 20.484375 10.011719 20.082031 L 1.511719 11.730469 C 1.101562 11.328125 1.101562 10.671875 1.511719 10.269531 Z M 1.511719 10.269531 "/></g><svg></button>',
    nextArrow: '<button class="next-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14pt" height="22pt" viewBox="0 0 14 22" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 12.488281 11.730469 L 3.988281 20.078125 C 3.578125 20.484375 2.914062 20.484375 2.503906 20.078125 L 1.511719 19.105469 C 1.101562 18.703125 1.101562 18.050781 1.507812 17.648438 L 8.246094 11 L 1.507812 4.351562 C 1.101562 3.949219 1.101562 3.296875 1.511719 2.894531 L 2.503906 1.921875 C 2.914062 1.515625 3.578125 1.515625 3.988281 1.921875 L 12.488281 10.269531 C 12.898438 10.671875 12.898438 11.328125 12.488281 11.730469 Z M 12.488281 11.730469 "/></g><svg><button>'
    });

    if ($(this).find('.item').length > 1) {
      $(this).siblings('.slides-numbers').show();
    }
    $(this).on('afterChange', function(event, slick, currentSlide){
      $sliderParent.find('.slides-numbers .active').html(helpers.addZeros(currentSlide + 1));
    });

    var sliderItemsNum = $(this).find('.slick-slide').not('.slick-cloned').length;
    $sliderParent.find('.slides-numbers .total').html(helpers.addZeros(sliderItemsNum));
  });  
};
sliderInit();
$('.preferences__slider').slick({
  dots: true,
  arrows:true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<button class="left-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14pt" height="22pt" viewBox="0 0 14 22" version="1.1"<g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 1.511719 10.269531 L 10.011719 1.921875 C 10.421875 1.519531 11.089844 1.519531 11.496094 1.921875 L 12.488281 2.894531 C 12.898438 3.296875 12.898438 3.949219 12.492188 4.351562 L 5.753906 11 L 12.492188 17.648438 C 12.898438 18.050781 12.898438 18.703125 12.488281 19.105469 L 11.496094 20.082031 C 11.085938 20.484375 10.421875 20.484375 10.011719 20.082031 L 1.511719 11.730469 C 1.101562 11.328125 1.101562 10.671875 1.511719 10.269531 Z M 1.511719 10.269531 "/></g><svg></button>',
  nextArrow: '<button class="right-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14pt" height="22pt" viewBox="0 0 14 22" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 12.488281 11.730469 L 3.988281 20.078125 C 3.578125 20.484375 2.914062 20.484375 2.503906 20.078125 L 1.511719 19.105469 C 1.101562 18.703125 1.101562 18.050781 1.507812 17.648438 L 8.246094 11 L 1.507812 4.351562 C 1.101562 3.949219 1.101562 3.296875 1.511719 2.894531 L 2.503906 1.921875 C 2.914062 1.515625 3.578125 1.515625 3.988281 1.921875 L 12.488281 10.269531 C 12.898438 10.671875 12.898438 11.328125 12.488281 11.730469 Z M 12.488281 11.730469 "/></g><svg><button>',
   responsive:[
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      }
    },
    {
       breakpoint: 820,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
 });
 });
