$(function(){
	for(var i=0;i<12; i++) {
		$('.banner-img li').eq(i+1).css('left',i*100+'%')
	}

	$('.banner-img li').eq(0).css('left','-100%')

	var o=0;
	var p=0
	$('.banner-right').click(function(){
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

	})
	$('.banner-left').click(function(){
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
	})
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
			console.log(p)
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
		if(h==500){
			
		}
	})



})