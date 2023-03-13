(function ($) {
  "use strict";


    

$(window).on('load', function () {

  /*---------------------
  preloader
  --------------------- */
  $('#preloader').fadeOut('slow', function() { $(this).remove(); });


  /*---------------------
   Header
  --------------------- */
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 20) {
      $('.header-section').addClass('header-bg');
    } else {
      if (!$('.navbar-collapse').hasClass('show')) {
        $('.header-section').removeClass("header-bg");
      }
    }
  });

  /*---------------------
   Magnific popup
  --------------------- */
  $('.photo-click').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });

  /*---------------------
    Video Play
  --------------------- */
  $('.play-btn').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
    iframe: {
      markup: '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
        '</div>',

    srcAction: 'iframe_src',
    }
  });


    /*---------------------
    Scroll to top
  ---------------------*/
  $('body').materialScrollTop();



  /*---------------------
    Testimonial
  --------------------- */
  setInterval(function () {
    if ($(".st-main-1").hasClass('slick-active')) {
      $(".ts-img-box-1").addClass('st-active');
    } else {
      $(".ts-img-box-1").removeClass('st-active');
    }
    if ($(".st-main-2").hasClass('slick-active')) {
      $(".ts-img-box-2").addClass('st-active');
    } else {
      $(".ts-img-box-2").removeClass('st-active');
    }
    if ($(".st-main-3").hasClass('slick-active')) {
      $(".ts-img-box-3").addClass('st-active');
    } else {
      $(".ts-img-box-3").removeClass('st-active');
    }
    if ($(".st-main-4").hasClass('slick-active')) {
      $(".ts-img-box-4").addClass('st-active');
    } else {
      $(".ts-img-box-4").removeClass('st-active');
    }
    if ($(".st-main-5").hasClass('slick-active')) {
      $(".ts-img-box-5").addClass('st-active');
    } else {
      $(".ts-img-box-5").removeClass('st-active');
    }
  }, );

  /*---------------------
   Testimonial Silder
  --------------------- */
  $('.testimonial-slider').slick({
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [{
      breakpoint: 1199,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }]
  });
});


$('.testimonial-2-slider').slick({
  dots: true,
  autoplay: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  responsive: [{
    breakpoint: 1199,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  }]
});

/*---------------------
   Isotop
--------------------- */
$(window).on('load', function () {
  var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
  });
  var filterFns = {
    numberGreaterThan50: function () {
      var number = $(this).find('.number').text();
      return parseInt(number, 10) > 50;
    },
    ium: function () {
      var name = $(this).find('.name').text();
      return name.match(/ium$/);
    }
  };
  $('.filters-button-group').on('click', '.isotope-btn', function () {
    var filterValue = $(this).attr('data-filter');
    filterValue = filterFns[filterValue] || filterValue;
    $grid.isotope({
      filter: filterValue
    });
  });
  $('.button-group').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', '.isotope-btn', function () {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $(this).addClass('is-checked');
    });
  });

});


/*---------------------
   Navbar
--------------------- */
$(window).on('resize load', function () {
  if ($(window).width() < 991) {
    $(".header-section .navbar-dark .navbar-toggler").on('click', function () {
      if ($(window).scrollTop() == 0) {
        $('.header-section').toggleClass('header-bg', {
          duration: 250
        });
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.dropdown-menu').forEach(function (element) {
    element.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  });

  if (window.innerWidth < 992) {
    document.querySelectorAll('.navbar .dropdown').forEach(function (everydropdown) {
      everydropdown.addEventListener('hidden.bs.dropdown', function () {
        this.querySelectorAll('.submenu').forEach(function (everysubmenu) {
          everysubmenu.style.display = 'none';
        });
      })
    });

    document.querySelectorAll('.dropdown-menu a').forEach(function (element) {
      element.addEventListener('click', function (e) {

        let nextEl = this.nextElementSibling;
        if (nextEl && nextEl.classList.contains('submenu')) {
          e.preventDefault();
          console.log(nextEl);
          if (nextEl.style.display == 'block') {
            nextEl.style.display = 'none';
          } else {
            nextEl.style.display = 'block';
          }

        }
      });
    })
  }
});

/*---------------------
    Contact Form
  --------------------- */
  if ($('body').find('.contact-form').length !== 0) {
    // Form 1
    $('.cf-msg').hide();
    $('form#cf button#submit').on('click', function () {

      var firstName = $('#firstName').val();
      var email = $('#email').val();
      var subjectName = $('#subjectName').val();
      var msg = $('#msg').val();
      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

      if (!regex.test(email)) {
        alert('Please enter valid email');
        return false;
      }

      firstName = $.trim(firstName);
      subjectName = $.trim(subjectName);
      email = $.trim(email);
      msg = $.trim(msg);

      if (firstName != '' && email != '' && msg != '') {
        var values = "firstName=" + firstName + "&subjectName=" + subjectName + "&email=" + email + " &msg=" + msg;
        $.ajax({
          type: "POST",
          url: "assets/php/mail.php",
          data: values,
          success: function () {
            $('#firstName').val('');
            $('#subjectName').val('');
            $('#email').val('');
            $('#msg').val('');

            $('.cf-msg').fadeIn().html('<div class="alert alert-success"><strong>Success!</strong> Email has been sent successfully.</div>');
            setTimeout(function () {
              $('.cf-msg').fadeOut('slow');
            }, 4000);
          }
        });
      } else {
        $('.cf-msg').fadeIn().html('<div class="alert alert-danger"><strong>Warning!</strong> Please fillup the informations correctly.</div>')
      }
      return false;
    });

  }



}(jQuery));