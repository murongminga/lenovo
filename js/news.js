$(function(){
		$(window).scroll(function(event){
		var h=$(window).scrollTop()
		console.log(h)
		if (h>0){
			$('.header2').addClass('header2-fix');
			$('.header2-nav-sreach').hide();
			$('.header2-nav>li').css('line-height','52px');
			$('.header2-nav-hid-sreach').show();
			$('.logo').addClass('logo-fix')
		}else{
			$('.header2').removeClass('header2-fix');
			$('.header2-nav-sreach').show();
			$('.header2-nav>li').css('line-height','70px');
			$('.header2-nav-hid-sreach').hide();
			$('.logo').removeClass('logo-fix')
		}
	})
	$('.nav-dl').click(function(){
      $('.vip').show()
      return false;
    })
    $('.vip-close').click(function(){
      $('.vip').hide()
    })
    $('.sec-left-navtit').eq(1).click(function(){
    	$('.sec-left-navtest').slideToggle();
    })















})