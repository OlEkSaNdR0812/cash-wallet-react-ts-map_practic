(function ($) {
    'use strict';
  
    // Spinner
    var spinner = function () {
      setTimeout(function () {
        if ($('#spinner').length > 0) {
          $('#spinner').removeClass('show');
        }
      }, 1);
    };
    spinner();
  
    $("a[href*='#']:not([href='#'])").click(function () {
      if (
        location.pathname.replace(/^\//, '') ==
          this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate(
            {
              scrollTop: target.offset().top,
            },
            500,
          );
          return false;
        }
      }
    });
  
    // Initiate the wowjs
    new WOW().init();
  
    // Sticky Navbar
    $(window).scroll(function () {
      if ($(this).scrollTop() > 45) {
        $('.navbar').addClass('sticky-top shadow-sm');
        $('.navbar').removeClass('custom-navbar-dark');
      } else {
        $('.navbar').removeClass('sticky-top shadow-sm');
        $('.navbar').addClass('custom-navbar-dark');
      }
    });
  
    // Dropdown on mouse hover
    const $dropdown = $('.dropdown');
    const $dropdownToggle = $('.dropdown-toggle');
    const $dropdownMenu = $('.dropdown-menu');
    const showClass = 'show';
  
    $(window).on('load resize', function () {
      if (this.matchMedia('(min-width: 992px)').matches) {
        $dropdown.hover(
          function () {
            const $this = $(this);
            $this.addClass(showClass);
            $this.find($dropdownToggle).attr('aria-expanded', 'true');
            $this.find($dropdownMenu).addClass(showClass);
          },
          function () {
            const $this = $(this);
            $this.removeClass(showClass);
            $this.find($dropdownToggle).attr('aria-expanded', 'false');
            $this.find($dropdownMenu).removeClass(showClass);
          },
        );
      } else {
        $dropdown.off('mouseenter mouseleave');
      }
      // checkCookies('Window');
      showTournaments();
    });
  
    function showTournaments() {
      console.log('');
    }
  
    //   $(document).ready(function () {
    //     console.log('ready!');
    //     checkCookies('doc');
    //   });
  
    //   document.cookie = 'reader=2; SameSite=None; Secure';
    //   function checkCookies(mode) {
    //     debugger;
    //   }
  
    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
      delay: 5,
      time: 2000,
    });
  
    // Back to top button
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
      } else {
        $('.back-to-top').fadeOut('slow');
      }
    });
    $('.back-to-top').click(function () {
      $('html, body').animate({ scrollTop: 0 }, 300, 'easeInOutExpo');
      return false;
    });
  
    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
      autoplay: true,
      smartSpeed: 1500,
      dots: true,
      loop: true,
      center: true,
      responsive: {
        0: {
          items: 1,
        },
        576: {
          items: 1,
        },
        768: {
          items: 2,
        },
        992: {
          items: 3,
        },
      },
    });
  
    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
      loop: true,
      margin: 45,
      dots: false,
      loop: true,
      autoplay: true,
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 2,
        },
        576: {
          items: 4,
        },
        768: {
          items: 6,
        },
        992: {
          items: 8,
        },
      },
    });
  })(jQuery);
  