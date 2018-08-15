$(document).ready(function () {
  $('.modal-btn').fancybox();

  if ($(window).width() > 1200) {


    $('.up').addClass("hidden_animation").viewportChecker({
      classToAdd: 'visible animated fadeInUp', // Class to add to the elements when they are visible
      offset: '0%'
    });

    $('.show').viewportChecker({
      classToAdd: 'is-show', // Class to add to the elements when they are visible
      offset: '0%'
    });
    $('.about.show').viewportChecker({
      classToAdd: 'is-show', // Class to add to the elements when they are visible
      offset: '0%'
    });

    $("#calculate_one").ionRangeSlider({
      grid: true,
      hide_min_max: true,
      grid_num: 6,
      keyboard: true,
      min: 0,
      max: 600000,
      from: 300000,
      step: 1000,
      prettify_enabled: true,
      prefix: "$"
    });

    $("#calculate_two").ionRangeSlider({
      grid: true,
      hide_min_max: true,
      grid_num: 5,
      keyboard: true,
      min: 0,
      max: 100000,
      from: 50000,
      step: 1000,
      prettify_enabled: true,
      prefix: "$"
    });


  } else if ($(window).width() < 736) {
    $("#calculate_one").ionRangeSlider({
      grid: true,
      hide_min_max: true,
      grid_num: 2,
      min: 0,
      max: 600000,
      from: 300000,
      step: 1000,
      prettify_enabled: true,
      prefix: "$"
    });

    $("#calculate_two").ionRangeSlider({
      grid: true,
      hide_min_max: true,
      grid_num: 2,
      min: 0,
      max: 100000,
      from: 50000,
      step: 1000,
      prettify_enabled: true,
      prefix: "$"
    });
  } else {
    $("#calculate_one").ionRangeSlider({
      grid: true,
      hide_min_max: true,
      grid_num: 6,
      keyboard: true,
      min: 0,
      max: 600000,
      from: 300000,
      step: 1000,
      prettify_enabled: true,
      prefix: "$"
    });

    $("#calculate_two").ionRangeSlider({
      grid: true,
      hide_min_max: true,
      grid_num: 6,
      keyboard: true,
      min: 0,
      max: 100000,
      from: 50000,
      step: 1000,
      prettify_enabled: true,
      prefix: "$"
    });
  }



  $('.callme-btn, .order-btn').hover(function () {
      $(this).addClass('animation-right');
    },
    function () {
      $(this).removeClass('animation-right');
    });

  $('.menu-btn').click(function () {
    $('.menu').addClass('active');
  })
  $('.menu-close, .menu-list li a').click(function () {
    $('.menu').removeClass('active');
  })

  $('.more-btn').click(function () {
    $(this).parent().find('.more').slideToggle(200);
    $(this).toggleClass('active');
  })

  $(window).scroll(function () {
    return $('nav').toggleClass("fixed", $(window).scrollTop() > 0);
  });

  $('.menu-list a').click(function (e) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top - 60
    }, 1500);

  });

  $('.invest-content .item').click(function () {
    $('.invest-content .item').removeClass('active');
    $(this).addClass('active');
    $('.invest-captcha').text($(this).find('.title').text());
    $('.invest-img img').attr('src', $(this).data('src'));
  });

  $("#calculate_one").ionRangeSlider({
    grid: true,
    hide_min_max: true,
    grid_num: 6,
    keyboard: true,
    min: 0,
    max: 600000,
    from: 300000,
    step: 1000,
    prettify_enabled: true,
    prefix: "$"
  });

  $("#calculate_two").ionRangeSlider({
    grid: true,
    hide_min_max: true,
    grid_num: 5,
    keyboard: true,
    min: 0,
    max: 100000,
    from: 50000,
    step: 1000,
    prettify_enabled: true,
    prefix: "$"
  });

  // calculate

  function numberFormat(num) {
    if (!isFinite(num)) {
      return num;
    }

    var parts = num.toString().split('.');

    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

    return parts.join('.');
  }


  var calculateOne = Number($('#calculate_one').val());
  var calculateTwo = Number($('#calculate_two').val());

  /*Прибыль от аренды Квартира*/
  var apartment_pessimist = (calculateOne + calculateTwo) * 0.05;
  var apartment_moderate = (calculateOne + calculateTwo) * 0.1;
  var apartment_optimist = (calculateOne + calculateTwo) * 0.15;
  $('.apartment_pessimist').text('$ ' + numberFormat(apartment_pessimist));
  $('.apartment_moderate').text('$ ' + numberFormat(apartment_moderate));
  $('.apartment_optimist').text('$ ' + numberFormat(apartment_optimist));
  /*end Прибыль от аренды*/

  /*Прибыль от стоимости м2 Квартира*/
  var apartment_pessimist1 = (calculateOne) * 0.01;
  var apartment_moderate1 = (calculateOne) * 0.03;
  var apartment_optimist1 = (calculateOne) * 0.05;
  $('.apartment_pessimist1').text('$ ' + numberFormat(apartment_pessimist1));
  $('.apartment_moderate1').text('$ ' + numberFormat(apartment_moderate1));
  $('.apartment_optimist1').text('$ ' + numberFormat(apartment_optimist1));
  /*end Прибыль от стоимости м2*/

  $('.apartment_pessimist2').each(function () {
    var power = Number($(this).parent().find('.year').text());
    $(this).text('$ ' + numberFormat(Math.floor((calculateOne + calculateTwo) * (Math.pow((1 + 0.05), power)) - (calculateOne + calculateTwo) + calculateOne * (Math.pow((1 + 0.01), power)) - calculateOne)));
  });

  $('.apartment_moderate2').each(function () {
    var power = Number($(this).parent().find('.year').text());
    $(this).text('$ ' + numberFormat(Math.floor((calculateOne + calculateTwo) * (Math.pow((1 + 0.1), power)) - (calculateOne + calculateTwo) + calculateOne * (Math.pow((1 + 0.03), power)) - calculateOne)));
  })

  $('.apartment_optimist2').each(function () {
    var power = Number($(this).parent().find('.year').text());
    $(this).text('$ ' + numberFormat(Math.floor((calculateOne + calculateTwo) * (Math.pow((1 + 0.15), power)) - (calculateOne + calculateTwo) + calculateOne * (Math.pow((1 + 0.05), power)) - calculateOne)));
  })



  $("#calculate_one").change(function () {
    var $from = $(this);
    calculateOne = Number($from.val());
    console.log(calculateOne);
    console.log(calculateTwo);
    /*
    Квартира
    Прибыль от аренды*/
    apartment_pessimist = (calculateOne + calculateTwo) * 0.05;
    apartment_moderate = (calculateOne + calculateTwo) * 0.1;
    apartment_optimist = (calculateOne + calculateTwo) * 0.15;

    $('.apartment_pessimist').text('$ ' + numberFormat(apartment_pessimist));
    $('.apartment_moderate').text('$ ' + numberFormat(apartment_moderate));
    $('.apartment_optimist').text('$ ' + numberFormat(apartment_optimist));
    /*end Прибыль от аренды*/
    /*
    Квартира
    Прибыль от стоимости м2*/
    apartment_pessimist1 = (calculateOne) * 0.01;
    apartment_moderate1 = (calculateOne) * 0.03;
    apartment_optimist1 = (calculateOne) * 0.05;

    $('.apartment_pessimist1').text('$ ' + numberFormat(apartment_pessimist1));
    $('.apartment_moderate1').text('$ ' + numberFormat(apartment_moderate1));
    $('.apartment_optimist1').text('$ ' + numberFormat(apartment_optimist1));
    /*end Прибыль от стоимости м2*/



    $('.apartment_pessimist2').each(function () {
      var $this = $(this);
      var power = Number($this.parent().find('.year').text());
      $this.text('$ ' + numberFormat(Math.floor((calculateOne + calculateTwo) * (Math.pow((1 + 0.15), power)) - (calculateOne + calculateTwo) + calculateOne * (Math.pow((1 + 0.05), power)) - calculateOne)));
    });

    $('.apartment_moderate2').each(function () {
      var $this = $(this);
      var power = Number($this.parent().find('.year').text());

      $this.text('$ ' + numberFormat(Math.floor((calculateOne + calculateTwo) * (Math.pow((1 + 0.1), power)) - (calculateOne + calculateTwo) + calculateOne * (Math.pow((1 + 0.03), power)) - calculateOne)));
    })

    $('.apartment_optimist2').each(function () {
      var $this = $(this);
      var power = Number($this.parent().find('.year').text());

      $this.text('$ ' + numberFormat(Math.floor((calculateOne + calculateTwo) * (Math.pow((1 + 0.15), power)) - (calculateOne + calculateTwo) + calculateOne * (Math.pow((1 + 0.05), power)) - calculateOne)));
    })



  });
  $("#calculate_two").change(function () {
    var $from = $(this);
    calculateTwo = Number($from.val());
    /*
      Квартира
      Прибыль от аренды*/
    apartment_pessimist = (calculateTwo + calculateOne) * 0.05;
    apartment_moderate = (calculateTwo + calculateOne) * 0.1;
    apartment_optimist = (calculateTwo + calculateOne) * 0.15;

    $('.apartment_pessimist').text('$ ' + numberFormat(apartment_pessimist));
    $('.apartment_moderate').text('$ ' + numberFormat(apartment_moderate));
    $('.apartment_optimist').text('$ ' + numberFormat(apartment_optimist));
    /*end Прибыль от аренды*/

    $('.apartment_pessimist2').each(function () {
      var $this = $(this);
      var power = Number($this.parent().find('.year').text());
      $this.text('$ ' + numberFormat(Math.floor((calculateOne + calculateTwo) * (Math.pow((1 + 0.15), power)) - (calculateOne + calculateTwo) + calculateOne * (Math.pow((1 + 0.05), power)) - calculateOne)));
    });

    $('.apartment_moderate2').each(function () {
      var $this = $(this);
      var power = Number($this.parent().find('.year').text());

      $this.text('$ ' + numberFormat(Math.floor((calculateOne + calculateTwo) * (Math.pow((1 + 0.1), power)) - (calculateOne + calculateTwo) + calculateOne * (Math.pow((1 + 0.03), power)) - calculateOne)));
    })

    $('.apartment_optimist2').each(function () {
      var $this = $(this);
      var power = Number($this.parent().find('.year').text());

      $this.text('$ ' + numberFormat(Math.floor((calculateOne + calculateTwo) * (Math.pow((1 + 0.15), power)) - (calculateOne + calculateTwo) + calculateOne * (Math.pow((1 + 0.05), power)) - calculateOne)));
    })


  });

  $('.calculate-tab_link li').click(function () {
    $('.calculate-tab_link li').removeClass('active');
    $(this).addClass('active');
    //    $('.calculate_tab-content .active').removeClass('active');
    //    $('#' + $(this).data('link')).addClass('active');
  })

  $('.calculate-tab_link li[data-link="apartment"]').click(function () {
    var sliderOne = $("#calculate_one").data("ionRangeSlider");
    var sliderTwo = $("#calculate_two").data("ionRangeSlider");

    sliderOne.update({
      from: 300000
    });
    sliderTwo.update({
      from: 250000
    });

  });

/*var slider_grid;
  $('.irs-grid-text').on("click", function () {
    var $this = $(this);
    var text = $this.text();
    text = Number(text.replace(/\s/g, ''));
    console.log(text);
    var slider_grid = $this.parents('.calculate-input').find('input').data("ionRangeSlider");
    slider_grid.update({
      from: text
    });
  })*/

  $('.calculate-tab_link li[data-link="office"]').click(function () {
    var sliderOne = $("#calculate_one").data("ionRangeSlider");
    var sliderTwo = $("#calculate_two").data("ionRangeSlider");

    sliderOne.update({
      from: 100000
    });
    sliderTwo.update({
      from: 20000
    });

  });

  $('.calculate-tab_link li[data-link="hotel"]').click(function () {
    var sliderOne = $("#calculate_one").data("ionRangeSlider");
    var sliderTwo = $("#calculate_two").data("ionRangeSlider");

    sliderOne.update({
      from: 150000
    });
    sliderTwo.update({
      from: 30000
    });

  });


  var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ')

  $('.about').viewportChecker({
    callbackFunction: function (elem, action) {
      $('.about-item .title span').each(function () {
        $(this).animateNumber({
            number: $(this).attr('id'),
            numberStep: comma_separator_number_step
          },
          2000
        );
      })
    },
    scrollHorizontal: false // Set to true if your website scrolls horizontal instead of vertical.
  });


  sale_projectsSlider = $('.sale_projects-carousel');

  sale_projectsSlider.owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    navText: false,
    margin: 20,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1900: {
        items: 2,
      }
    }
  });


  sale_projectsSlider.on('changed.owl.carousel', function (event) {
    var index = event.item.index;
    if (index == 1) {
      index = event.item.count + 1;
    }
    $('.sale_projects-all').text('0' + event.item.count);
    $('.sale_projects-cur').text('0' + (index - 1));
  });

  $('.sale_projects-next').click(function () {
    sale_projectsSlider.trigger('next.owl.carousel');

  });
  $('.sale_projects-prev').click(function () {
    sale_projectsSlider.trigger('prev.owl.carousel');
  });

  propertySlider = $('.property-carousel');

  propertySlider.owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    navText: false,
    margin: 20,
    animateOut: 'fadeOut',
    responsive: {
      0: {
        items: 1,
      }
    }
  });


  propertySlider.on('changed.owl.carousel', function (event) {
    var index = event.item.index;
    if (index == 1) {
      index = event.item.count + 1;
    }
    $('.sale_projects-all').text('0' + event.item.count);
    $('.sale_projects-cur').text('0' + (index - 1));
  });

  $('.property-next').click(function () {
    propertySlider.trigger('next.owl.carousel');

  });
  $('.property-prev').click(function () {
    propertySlider.trigger('prev.owl.carousel');
  });
});

$(document).ready(function () {

  function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
      vars[key] = value;
    });
    return vars;
  }
  $('input[name="utm_source"]').val(getUrlVars()["utm_source"]);
  $('input[name="utm_campaign"]').val(getUrlVars()["utm_campaign"]);
  $('input[name="utm_medium"]').val(getUrlVars()["utm_medium"]);
  $('input[name="utm_term"]').val(getUrlVars()["utm_term"]);
  $('input[name="utm_content"]').val(getUrlVars()["utm_content"]);
  $('input[name="click_id"]').val(getUrlVars()["aff_sub"]);
  $('input[name="affiliate_id"]').val(getUrlVars()["aff_id"]);
  $('input[name="user_agent"]').val(navigator.userAgent);
  $('input[name="ref"]').val(document.referrer);

  $.get("https://ipinfo.io", function (response) {
    $('input[name="ip_address"]').val(response.ip);
    $('input[name="city"]').val(response.city);
  }, "jsonp");

  function readCookie(name) {
    var n = name + "=";
    var cookie = document.cookie.split(';');
    for (var i = 0; i < cookie.length; i++) {
      var c = cookie[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(n) == 0) {
        return c.substring(n.length, c.length);
      }
    }
    return null;
  }
  setTimeout(function () {
    $('.gclid_field').val(readCookie('gclid'));
    if ($('.gclid_field').val() == '') {
      $('.gclid_field').val(readCookie('_gid'));
    }
  }, 2000);

  /*db/registration.php*/

  /* form valid*/
  var alertImage = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286.1 286.1"><path d="M143 0C64 0 0 64 0 143c0 79 64 143 143 143 79 0 143-64 143-143C286.1 64 222 0 143 0zM143 259.2c-64.2 0-116.2-52-116.2-116.2S78.8 26.8 143 26.8s116.2 52 116.2 116.2S207.2 259.2 143 259.2zM143 62.7c-10.2 0-18 5.3-18 14v79.2c0 8.6 7.8 14 18 14 10 0 18-5.6 18-14V76.7C161 68.3 153 62.7 143 62.7zM143 187.7c-9.8 0-17.9 8-17.9 17.9 0 9.8 8 17.8 17.9 17.8s17.8-8 17.8-17.8C160.9 195.7 152.9 187.7 143 187.7z" fill="#E2574C"/></svg>';
  var error;
  $('.submit').click(function (e) {
    e.preventDefault();
    var ref = $(this).closest('form').find('[required]');
    $(ref).each(function () {
      if ($(this).val() == '') {
        var errorfield = $(this);
        if ($(this).attr("type") == 'email') {
          var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
          if (!pattern.test($(this).val())) {
            $("input[name=email]").val('');
            $(this).addClass('error').parent('.field').append('<div class="allert"><p>Укажите коректный e-mail</p>' + alertImage + '</div>');
            error = 1;
            $(":input.error:first").focus();
          }
        }  else {
          $(this).addClass('error').parent('.field').append('<div class="allert"><p>Заполните это поле</p>' + alertImage + '</div>');
          error = 1;
          $(":input.error:first").focus();
        }

        // return;
      } else {
        // error = 0;
        $(this).removeClass('error').parent('.field').find('.allert').remove();
      }

      var val_phone = $(this).parents('form').find("input[name=phone]").val();
      console.log(val_phone);

      if($(this).attr("type") == 'tel') {
          var patterntel = /^()[- +()0-9]{9,18}/i;
          if (!patterntel.test($(this).val()) && val_phone == "" || val_phone == " " || val_phone.length < 7) {
            $("input[name=phone]").val('');
            $(this).addClass('error').parent('.field').append('<div class="allert"><p>Укажите номер телефона в формате +3809999999</p>' + alertImage + '</div>');
            error = 1;
            $(":input.error:first").focus();
          // return;

          }else {
             error = 0;
            $(this).addClass('error').parent('.field').find('.allert').remove();

        }

      }

    });

    if (error == 0) {
      $(this).unbind('submit').submit();
    }
  });

  /*end form valid*/

  $('form').on('submit', function (e) {
    e.preventDefault();
    $('.submit').addClass('inactive');
    $('.submit').prop('disabled', true);
    var $form = $(this);
    var $data = $form.find('input');



    $.ajax({
      type: 'POST',
      url: 'db/registration.php',
      dataType: 'json',
      data: $form.serialize(),
      success: function (response) {}
    });

    setTimeout(function () {
      window.location.href = "success.html";
    }, 800);

  });

});