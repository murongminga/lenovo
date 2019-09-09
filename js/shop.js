$(function(){
	for(var i=0;i<12; i++) {
		$('.banner-img li').eq(i+1).css('left',i*100+'%')
	}

	$('.banner-img li').eq(0).css('left','-100%')

	var o=0;
	var p=0
	$('.banner-right').click(bt(br,1000))
	$('.banner-left').click(bt(bl,1000))
	function br(){
		o++;
		p++;
		$('.banner-img').animate({'margin-left':-o*100+'%'},500,function(){
			if (o>9){
				$('.banner-img').css('margin-left','0')
				o=0;
			}
		})
		if (p>9){
			p=0
		}
		$('.banner-dot>li').eq(p).css('background-color','#fff').siblings().css('background-color','#383838')
	}
	function bl(){
		o--;
		p--;
		$('.banner-img').animate({'margin-left':-o*100+'%'},500,function(){
			if (o<0){
				$('.banner-img').css('margin-left','-900%')
				o=9;
			}
		})
		if (p<0){
			p=9
		}
		$('.banner-dot>li').eq(p).css('background-color','#fff').siblings().css('background-color','#383838')
	}
	function bt(fn,time){
		var startime=new Date();
		return function(){
			var item=(new Date()-startime)>=time
			if (item) {
				fn.apply(this);
				startime=new Date()
			}
		}
	}
	var time
	function time1(){
		clearInterval(time)
		time=setInterval(function(){
			o++;
			p++;
			$('.banner-img').animate({'margin-left':-o*100+'%'},500,function(){
				if (o>9){
					$('.banner-img').css('margin-left','0')
					o=0;
				}
			})
			if (p>9){
				p=0
			}
			$('.banner-dot>li').eq(p).css('background-color','#fff').siblings().css('background-color','#383838')
		},4000)
	}
	time1()
	$('.banner').mouseenter(function(){
		clearInterval(time);
		$('.banner-left').css('display','block')
		$('.banner-right').css('display','block')
	})
	$('.banner').mouseleave(function(){
		time1()
		$('.banner-left').css('display','none')
		$('.banner-right').css('display','none')
	})
	$('.banner-dot>li').click(function(){
		$(this).css('background-color','#fff').siblings().css('background-color','#383838')
		var dot=$(this).index();
		o=dot;
		p=dot;
		$('.banner-img').css('margin-left',-o*100+'%')
	})

	$('.b-nav-left>ul>li').mouseenter(function(){
		var bli=$(this).index();
		$('.b-nav-right').eq(bli).css('display','block').siblings('.b-nav-right').css('display','none');
		$('.banner-dot').css('z-index','9')
	})
	$('.b-nav-right').mouseenter(function(){
		$(this).css('display','block')
		$('.banner-dot').css('z-index','9')
	})
	$('.b-nav-left>ul>li').mouseleave(function(){
		var bli=$(this).index();
		$('.b-nav-right').css('display','none')
		$('.banner-dot').css('z-index','99')
	})
	$('.b-nav-right').mouseleave(function(){
		$(this).css('display','none')
		$('.banner-dot').css('z-index','99')
	})

	$('.qucik-link>li').hover(function(){
		$(this).children('img').eq(0).css('display','none').parents('li').siblings('li').children('img').eq(0).css('display','inline-block');
		$(this).children('img').eq(1).css('display','inline-block').parents('li').siblings('li').children('img').eq(1).css('display','none');
		$(this).children('p').css('color','black').parents('li').siblings('li').children('p').css('color','#9c9c9c');
	},function(){
		$(this).children('img').eq(0).css('display','inline-block');
		$(this).children('img').eq(1).css('display','none');
		$(this).children('p').css('color','#9c9c9c')
	})
	$('.sec-product-s-smallimg').eq(1).css('border-top','none')


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
		if (h>480){
			$('.aside-left').show()
		}
		else{
			$('.aside-left').hide()
		}
		if (h>300){
			$('.aside-right').show()
		}
		else{
			$('.aside-right').hide()
		}
		if(h>500&&h<1000){
			$('.test1').eq(0).children('.as-1').hide()
			$('.test1').eq(0).children('.as-2').show()
			$('.test1').eq(0).children('.as-2').css('color','skyblue')
		}
		else{
			$('.test1').eq(0).children('.as-1').show()
			$('.test1').eq(0).children('.as-2').hide()
		}
		for (var i=0; i<8; i++) {
			if(h>1000+i*600&&h<1000+(i+1)*600){
				$('.test1').eq(i+1).children('.as-1').hide()
				$('.test1').eq(i+1).children('.as-2').show()
				$('.test1').eq(i+1).children('.as-2').css('color','skyblue')
			}
			else{
				$('.test1').eq(i+1).children('.as-1').show()
				$('.test1').eq(i+1).children('.as-2').hide()
			}
		}
		if (h>5800){
			$('.aside-left').hide()
		}
	})
	$('.test1').hover(function(){
		$(this).children('.as-1').hide().siblings('.as-2').show()
	},function(){
		$(this).children('.as-2').hide().siblings('.as-1').show()
	})

	$('.test1').click(function(){
		var s=$(this).index()/2
		var z=$('section>.container>div').eq(s).offset().top;
		$('html,body').animate({'scrollTop':z-70},500);
	})
  	var mydate=new Date;
  	var hour=mydate.getHours();
  	var minutes=mydate.getMinutes();
  	var seconds=mydate.getSeconds();
  	if (hour>9){
  		$('.flashkill-time>img').eq(0).show();
  		$('.flashkill-time>img').eq(1).hide();
  		$('.flashkill-text2').show();
  		$('.flashkill-text').hide();
  		$('.flashkill-overtime').show();
  	}
  	else{
  		$('.flashkill-time>img').eq(0).hide();
  		$('.flashkill-time>img').eq(1).show();
  		$('.flashkill-text').show();
  		$('.flashkill-text2').hide();
  		$('.flashkill-overtime').hide();
  	}
  	var timess;
  	clearInterval(timess)
  	timess=setInterval(function(){
  		var mydate=new Date;
	  	var hour=mydate.getHours();
	  	var minutes=mydate.getMinutes();
	  	var seconds=mydate.getSeconds();
	  	hour=23-hour;
	  	minutes=59-minutes;
		seconds=59-seconds;
  		if (hour<'10'){
	  		$('.fk-hour').html('0'+hour);
	  	}else{
	  		$('.fk-hour').html(hour)
	  	}
	  	if (minutes<'10'){
	  		$('.fk-minutes').html('0'+minutes);
	  	}else{
	  		$('.fk-minutes').html(minutes)
	  	}
	  	if (seconds<'10'){
	  		$('.fk-seconds').html('0'+seconds);
	  	}else{
	  		$('.fk-seconds').html(seconds)
	  	}
  	},1000);
  	$('.aside-right-li span').click(function(){
  		$('html,body').animate({'scrollTop':0},200);
  	})
  	$('.aside-right-li').mouseenter(function(){
  		$(this).children('.aside-hid').show().parents('.aside-right-li').siblings('.aside-right-li').children('.aside-hid').hide()
  		$(this).children('.aside-hid').animate({'right':'52px'},200).parents('.aside-right-li').siblings('.aside-right-li').children('.aside-hid').animate({'right':'70px'},200)
  	})
  	$('.aside-right-li').mouseleave(function(){
  		$(this).children('.aside-hid').hide()
  	})
  	$('.nav-dl').click(function(){
  		$('.vip').show()
  		return false;
  	})
  	$('.vip-close').click(function(){
  		$('.vip').hide()
  	})
})