$(document).ready(function(){function t(t){if(!isFinite(t))return t;var e=t.toString().split(".");return e[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g," "),e.join(".")}$(".modal-btn").fancybox(),$(window).width()>1200?($(".up").addClass("hidden_animation").viewportChecker({classToAdd:"visible animated fadeInUp",offset:"0%"}),$(".show").viewportChecker({classToAdd:"is-show",offset:"0%"}),$(".about.show").viewportChecker({classToAdd:"is-show",offset:"0%"}),$("#calculate_one").ionRangeSlider({grid:!0,hide_min_max:!0,grid_num:6,keyboard:!0,min:0,max:6e5,from:3e5,step:1e3,prettify_enabled:!0,prefix:"$"}),$("#calculate_two").ionRangeSlider({grid:!0,hide_min_max:!0,grid_num:5,keyboard:!0,min:0,max:1e5,from:5e4,step:1e3,prettify_enabled:!0,prefix:"$"})):$(window).width()<736?($("#calculate_one").ionRangeSlider({grid:!0,hide_min_max:!0,grid_num:2,min:0,max:6e5,from:3e5,step:1e3,prettify_enabled:!0,prefix:"$"}),$("#calculate_two").ionRangeSlider({grid:!0,hide_min_max:!0,grid_num:2,min:0,max:1e5,from:5e4,step:1e3,prettify_enabled:!0,prefix:"$"})):($("#calculate_one").ionRangeSlider({grid:!0,hide_min_max:!0,grid_num:6,keyboard:!0,min:0,max:6e5,from:3e5,step:1e3,prettify_enabled:!0,prefix:"$"}),$("#calculate_two").ionRangeSlider({grid:!0,hide_min_max:!0,grid_num:6,keyboard:!0,min:0,max:1e5,from:5e4,step:1e3,prettify_enabled:!0,prefix:"$"})),$(".callme-btn, .order-btn").hover(function(){$(this).addClass("animation-right")},function(){$(this).removeClass("animation-right")}),$(".menu-btn").click(function(){$(".menu").addClass("active")}),$(".menu-close, .menu-list li a").click(function(){$(".menu").removeClass("active")}),$(".more-btn").click(function(){$(this).parent().find(".more").slideToggle(200),$(this).toggleClass("active")}),$(window).scroll(function(){return $("nav").toggleClass("fixed",$(window).scrollTop()>0)}),$(".menu-list a").click(function(t){event.preventDefault();var e=$(this).attr("href"),a=$(e).offset().top;$("body,html").animate({scrollTop:a-60},1500)}),$(".invest-content .item").click(function(){$(".invest-content .item").removeClass("active"),$(this).addClass("active"),$(".invest-captcha").text($(this).find(".title").text()),$(".invest-img img").attr("src",$(this).data("src"))}),$("#calculate_one").ionRangeSlider({grid:!0,hide_min_max:!0,grid_num:6,keyboard:!0,min:0,max:6e5,from:3e5,step:1e3,prettify_enabled:!0,prefix:"$"}),$("#calculate_two").ionRangeSlider({grid:!0,hide_min_max:!0,grid_num:5,keyboard:!0,min:0,max:1e5,from:5e4,step:1e3,prettify_enabled:!0,prefix:"$"});var e=Number($("#calculate_one").val()),a=Number($("#calculate_two").val()),i=.05*(e+a),n=.1*(e+a),r=.15*(e+a);$(".apartment_pessimist").text("$ "+t(i)),$(".apartment_moderate").text("$ "+t(n)),$(".apartment_optimist").text("$ "+t(r));var o=.01*e,l=.03*e,s=.05*e;$(".apartment_pessimist1").text("$ "+t(o)),$(".apartment_moderate1").text("$ "+t(l)),$(".apartment_optimist1").text("$ "+t(s)),$(".apartment_pessimist2").each(function(){var i=Number($(this).parent().find(".year").text());$(this).text("$ "+t(Math.floor((e+a)*Math.pow(1.05,i)-(e+a)+e*Math.pow(1.01,i)-e)))}),$(".apartment_moderate2").each(function(){var i=Number($(this).parent().find(".year").text());$(this).text("$ "+t(Math.floor((e+a)*Math.pow(1.1,i)-(e+a)+e*Math.pow(1.03,i)-e)))}),$(".apartment_optimist2").each(function(){var i=Number($(this).parent().find(".year").text());$(this).text("$ "+t(Math.floor((e+a)*Math.pow(1.15,i)-(e+a)+e*Math.pow(1.05,i)-e)))}),$("#calculate_one").change(function(){var c=$(this);e=Number(c.val()),console.log(e),console.log(a),i=.05*(e+a),n=.1*(e+a),r=.15*(e+a),$(".apartment_pessimist").text("$ "+t(i)),$(".apartment_moderate").text("$ "+t(n)),$(".apartment_optimist").text("$ "+t(r)),o=.01*e,l=.03*e,s=.05*e,$(".apartment_pessimist1").text("$ "+t(o)),$(".apartment_moderate1").text("$ "+t(l)),$(".apartment_optimist1").text("$ "+t(s)),$(".apartment_pessimist2").each(function(){var i=$(this),n=Number(i.parent().find(".year").text());i.text("$ "+t(Math.floor((e+a)*Math.pow(1.15,n)-(e+a)+e*Math.pow(1.05,n)-e)))}),$(".apartment_moderate2").each(function(){var i=$(this),n=Number(i.parent().find(".year").text());i.text("$ "+t(Math.floor((e+a)*Math.pow(1.1,n)-(e+a)+e*Math.pow(1.03,n)-e)))}),$(".apartment_optimist2").each(function(){var i=$(this),n=Number(i.parent().find(".year").text());i.text("$ "+t(Math.floor((e+a)*Math.pow(1.15,n)-(e+a)+e*Math.pow(1.05,n)-e)))})}),$("#calculate_two").change(function(){var o=$(this);a=Number(o.val()),i=.05*(a+e),n=.1*(a+e),r=.15*(a+e),$(".apartment_pessimist").text("$ "+t(i)),$(".apartment_moderate").text("$ "+t(n)),$(".apartment_optimist").text("$ "+t(r)),$(".apartment_pessimist2").each(function(){var i=$(this),n=Number(i.parent().find(".year").text());i.text("$ "+t(Math.floor((e+a)*Math.pow(1.15,n)-(e+a)+e*Math.pow(1.05,n)-e)))}),$(".apartment_moderate2").each(function(){var i=$(this),n=Number(i.parent().find(".year").text());i.text("$ "+t(Math.floor((e+a)*Math.pow(1.1,n)-(e+a)+e*Math.pow(1.03,n)-e)))}),$(".apartment_optimist2").each(function(){var i=$(this),n=Number(i.parent().find(".year").text());i.text("$ "+t(Math.floor((e+a)*Math.pow(1.15,n)-(e+a)+e*Math.pow(1.05,n)-e)))})}),$(".calculate-tab_link li").click(function(){$(".calculate-tab_link li").removeClass("active"),$(this).addClass("active")}),$('.calculate-tab_link li[data-link="apartment"]').click(function(){var t=$("#calculate_one").data("ionRangeSlider"),e=$("#calculate_two").data("ionRangeSlider");t.update({from:3e5}),e.update({from:25e4})}),$('.calculate-tab_link li[data-link="office"]').click(function(){var t=$("#calculate_one").data("ionRangeSlider"),e=$("#calculate_two").data("ionRangeSlider");t.update({from:1e5}),e.update({from:2e4})}),$('.calculate-tab_link li[data-link="hotel"]').click(function(){var t=$("#calculate_one").data("ionRangeSlider"),e=$("#calculate_two").data("ionRangeSlider");t.update({from:15e4}),e.update({from:3e4})});var c=$.animateNumber.numberStepFactories.separator(" ");$(".about").viewportChecker({callbackFunction:function(t,e){$(".about-item .title span").each(function(){$(this).animateNumber({number:$(this).attr("id"),numberStep:c},2e3)})},scrollHorizontal:!1}),sale_projectsSlider=$(".sale_projects-carousel"),sale_projectsSlider.owlCarousel({loop:!0,nav:!0,dots:!1,navText:!1,margin:20,responsive:{0:{items:1},600:{items:2},1900:{items:2}}}),sale_projectsSlider.on("changed.owl.carousel",function(t){var e=t.item.index;1==e&&(e=t.item.count+1),$(".sale_projects-all").text("0"+t.item.count),$(".sale_projects-cur").text("0"+(e-1))}),$(".sale_projects-next").click(function(){sale_projectsSlider.trigger("next.owl.carousel")}),$(".sale_projects-prev").click(function(){sale_projectsSlider.trigger("prev.owl.carousel")}),propertySlider=$(".property-carousel"),propertySlider.owlCarousel({loop:!0,nav:!0,dots:!1,navText:!1,margin:20,animateOut:"fadeOut",responsive:{0:{items:1}}}),propertySlider.on("changed.owl.carousel",function(t){var e=t.item.index;1==e&&(e=t.item.count+1),$(".sale_projects-all").text("0"+t.item.count),$(".sale_projects-cur").text("0"+(e-1))}),$(".property-next").click(function(){propertySlider.trigger("next.owl.carousel")}),$(".property-prev").click(function(){propertySlider.trigger("prev.owl.carousel")})}),$(document).ready(function(){function t(){var t={};window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(e,a,i){t[a]=i});return t}function e(t){for(var e=t+"=",a=document.cookie.split(";"),i=0;i<a.length;i++){for(var n=a[i];" "==n.charAt(0);)n=n.substring(1,n.length);if(0==n.indexOf(e))return n.substring(e.length,n.length)}return null}$('input[name="utm_source"]').val(t().utm_source),$('input[name="utm_campaign"]').val(t().utm_campaign),$('input[name="utm_medium"]').val(t().utm_medium),$('input[name="utm_term"]').val(t().utm_term),$('input[name="utm_content"]').val(t().utm_content),$('input[name="click_id"]').val(t().aff_sub),$('input[name="affiliate_id"]').val(t().aff_id),$('input[name="user_agent"]').val(navigator.userAgent),$('input[name="ref"]').val(document.referrer),$.get("https://ipinfo.io",function(t){$('input[name="ip_address"]').val(t.ip),$('input[name="city"]').val(t.city)},"jsonp"),setTimeout(function(){$(".gclid_field").val(e("gclid")),""==$(".gclid_field").val()&&$(".gclid_field").val(e("_gid"))},2e3);var a,i='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286.1 286.1"><path d="M143 0C64 0 0 64 0 143c0 79 64 143 143 143 79 0 143-64 143-143C286.1 64 222 0 143 0zM143 259.2c-64.2 0-116.2-52-116.2-116.2S78.8 26.8 143 26.8s116.2 52 116.2 116.2S207.2 259.2 143 259.2zM143 62.7c-10.2 0-18 5.3-18 14v79.2c0 8.6 7.8 14 18 14 10 0 18-5.6 18-14V76.7C161 68.3 153 62.7 143 62.7zM143 187.7c-9.8 0-17.9 8-17.9 17.9 0 9.8 8 17.8 17.9 17.8s17.8-8 17.8-17.8C160.9 195.7 152.9 187.7 143 187.7z" fill="#E2574C"/></svg>';$(".submit").click(function(t){t.preventDefault();var e=$(this).closest("form").find("[required]");$(e).each(function(){if(""==$(this).val()){$(this);if("email"==$(this).attr("type")){var t=/^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;t.test($(this).val())||($("input[name=email]").val(""),$(this).addClass("error").parent(".field").append('<div class="allert"><p>Укажите коректный e-mail</p>'+i+"</div>"),a=1,$(":input.error:first").focus())}else $(this).addClass("error").parent(".field").append('<div class="allert"><p>Заполните это поле</p>'+i+"</div>"),a=1,$(":input.error:first").focus()}else $(this).removeClass("error").parent(".field").find(".allert").remove();var e=$(this).parents("form").find("input[name=phone]").val();if(console.log(e),"tel"==$(this).attr("type")){var n=/^()[- +()0-9]{9,18}/i;!n.test($(this).val())&&""==e||" "==e||e.length<7?($("input[name=phone]").val(""),$(this).addClass("error").parent(".field").append('<div class="allert"><p>Укажите номер телефона в формате +3809999999</p>'+i+"</div>"),a=1,$(":input.error:first").focus()):(a=0,$(this).addClass("error").parent(".field").find(".allert").remove())}}),0==a&&$(this).unbind("submit").submit()}),$("form").on("submit",function(t){t.preventDefault(),$(".submit").addClass("inactive"),$(".submit").prop("disabled",!0);var e=$(this);e.find("input");$.ajax({type:"POST",url:"db/registration.php",dataType:"json",data:e.serialize(),success:function(t){}}),setTimeout(function(){window.location.href="success.html"},800)})});