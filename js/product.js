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
		if (h>300){
			$('.aside-right').show()
		}
		else{
			$('.aside-right').hide()
		}
	})
	$('.a-r-7').click(function(){
		$('html,body').animate({'scrollTop':0},200);
	})

  	$('.aside-right-li').mouseenter(function(){
  		$(this).children('.aside-hid').show().parents('.aside-right-li').siblings('.aside-right-li').children('.aside-hid').hide()
  		$(this).children('.aside-hid').animate({'right':'52px'},200).parents('.aside-right-li').siblings('.aside-right-li').children('.aside-hid').animate({'right':'70px'},200)
  	})
  	$('.aside-right-li').mouseleave(function(){
  		$(this).children('.aside-hid').hide()
  	})

	var sw=0;
  	$('.s-w-li').mouseenter(function(){
  		$(this).css('border-color','red').siblings('.s-w-li').css('border-color','#ccc')
  		sw=$(this).index();
  		$('.s-b-bigimg').eq(sw).show().siblings('.s-b-bigimg').hide()
  	})
  	$('.s-w-right').click(function(){
  		sw++;
  		if(sw>4){
  			sw=4;
  		}
  		$('.s-w-li').eq(sw).css('border-color','red').siblings('.s-w-li').css('border-color','#ccc')
  		$('.s-b-bigimg').eq(sw).show().siblings('.s-b-bigimg').hide()
  	})
  	$('.s-w-left').click(function(){
  		sw--;
  		if(sw<0){
  			sw=0;
  		}
  		$('.s-w-li').eq(sw).css('border-color','red').siblings('.s-w-li').css('border-color','#ccc')
  		$('.s-b-bigimg').eq(sw).show().siblings('.s-b-bigimg').hide()
  	})

  	$('.sreve-left').hover(function(){
  		$('.serve-hidboxleft').show()
  		$(this).children('p').children('.sreve-icon').css('background-position','-48px -5px')
  	},function(){
  		$('.serve-hidboxleft').hide()
  		$(this).children('p').children('.sreve-icon').css('background-position','-31px -5px')
  	})
  	$('.checkbox1').click(function(){
  		var co=$(this).parents('.sreve-left').css('border-color')
  		console.log(co)
  		if (co=='rgb(204, 204, 204)'){
  			$(this).parents('.sreve-left').css('border-color','red')
  		}else{
			$(this).parents('.sreve-left').css('border-color','#ccc')
  		}
  	});

  	$('.sreve-right').hover(function(){
  		$('.serve-hidboxright').show()
  		$(this).children('p').children('.sreve-icon').css('background-position','-48px -5px')
  	},function(){
  		$('.serve-hidboxright').hide()
  		$(this).children('p').children('.sreve-icon').css('background-position','-31px -5px')
  	})
  	$('.checkbox2').click(function(){
  		var co=$(this).parents('.sreve-right').css('border-color')
  		if (co=='rgb(204, 204, 204)'){
  			$(this).parents('.sreve-right').css('border-color','red')
  		}else{
			$(this).parents('.sreve-right').css('border-color','#ccc')
  		}
  	});

  	$('.buyexplain').hover(function(){
  		$('.buyexplain-hid').show();
  	},function(){
  		$('.buyexplain-hid').hide()
  	})
  	$('.buynumber-jia').click(function(){
  		var n=$('.buynumber-test').html()
  		n=parseInt(n)
  		n=n+1;
  		if (n>3) {
  			n=3
  			$('.kuchun').show()
  			aa()
  		}
  		$('.buynumber-test').html(n)
  	})
  	$('.buynumber-jian').click(function(){
  		var n=$('.buynumber-test').html()
  		n=parseInt(n)
  		n=n-1;
  		if (n<1) {
  			n=1
  		}
  		$('.buynumber-test').html(n)
  	})

  	function aa(){
  		var time11;
  		clearInterval(time11);
  		time11=setTimeout(function(){
  			$('.kuchun').hide()
  		},3000)
  	}

})
		