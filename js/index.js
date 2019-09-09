$(function(){
	$(window).scroll(function(event){
		var h=$(window).scrollTop()
		if (h>0){
			$('header').addClass('headfix');
		}else{
			$('header').removeClass('headfix');
		}
	})


	for(var i=0;i<12; i++) {
		$('.banner-img li').eq(i+1).css('left',i*100+'%')
	}

	$('.banner-img li').eq(0).css('left','-100%')

	var o=0;
	var p=0
	$('.banner-right').click(bt(br,1000))
	function bt(fn,time){
		var stratime=new Date();
		return function(){
			var item=(new Date()-stratime) >= time
			if (item) {
				fn.apply(this);
				stratime=new Date()
			}
		}
	}
	function br(){
		o++;
		p++;
		$('.banner-img').stop(true).animate({'margin-left':-o*100+'%'},500,function(){
			if (o>9){
				$('.banner-img').css('margin-left','0')
				o=0;
			}
		})
		if (p>9){
			p=0
		}
		$('.banner-dot>li').eq(p).addClass('circle').siblings().removeClass('circle')
		$('.banner-dot>li>i').eq(p).css('background-color','transparent').parents('li').siblings('li').children('i').css('background-color','#fff')
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
		$('.banner-dot>li').eq(p).addClass('circle').siblings().removeClass('circle')
		$('.banner-dot>li>i').eq(p).css('background-color','transparent').parents('li').siblings('li').children('i').css('background-color','#fff')

	
	}
	$('.banner-left').click(bt(bl,1000))
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
			$('.banner-dot>li>i').eq(p).css('background-color','transparent').parents('li').siblings('li').children('i').css('background-color','#fff')
			$('.banner-dot>li').eq(p).addClass('circle').siblings().removeClass('circle')
		},4000)
	}
	time1()
	$('.banner').mouseenter(function(){
		clearInterval(time);
	})
	$('.banner').mouseleave(function(){
		time1()
	})
	$('.banner-dot>li').mouseenter(function(){
		$(this).addClass('circle').siblings().removeClass('circle')
		$(this).children('i').css('background-color','transparent').parents('li').siblings('li').children('i').css('background-color','#fff')
		var dot=$(this).index()
		o=dot;
		p=dot;
		$('.banner-img').css('margin-left',-o*100+'%')
		console.log(o)
	})

	$('.hd-navtitle').mouseenter(function(event){
		$(this).children('.hd-hidnav').css('display','block').parents('.hd-navtitle').siblings('.hd-navtitle').children('.hd-hidnav').css('display','none')
	});
	$('.hd-hidnav').mouseleave(function(event){
		$('.hd-hidnav').css('display','none');
	});
	$('.hd-navtitle2').mouseenter(function(event){
		$('.hd-hidnav').css('display','none')
	});
	$('.hd-hidnav').hover(function(event){
		$(this).css('display','block')
	},function(event){
		$(this).css('display','none')
	})
	$('.hd-c1-title').mouseenter(function(event){
		$(this).children('.childnav-child').css('display','block').parents().siblings().children('.childnav-child').css('display','none')
	});

	$('.fb-left').click(function(event){
		$('.fb').css({'margin-left':-369+'px'});
		var fbimg=$('.fb-img').eq(0).html();
		var m='<li class="fb-img"></li>'
		$('.fb').append(m)
		$('.fb-img').eq(9).html(fbimg);
		$('.fb-img').eq(0).remove();
	});

	$('.fb-right').click(function(event){
		$('.fb').css({'margin-left':0+'px'});
		var fbimg=$('.fb-img').eq(8).html();
		var m='<li class="fb-img"></li>'
		$('.fb').prepend(m)
		$('.fb-img').eq(0).html(fbimg);
		$('.fb-img').eq(9).remove();
	});

	$('.hd-hidbut').hover(function(event){
		$('.hid-md').css('display','block')
		$('.hid-zx').css('display','block')
	},function(){
		$('.hid-md').css('display','none')
		$('.hid-zx').css('display','none')
	})

	$('.vip-in').click(function(event){
		$('.vip').css('display','block')
	});
	$('.vip-close').click(function(event){
		$('.vip').css('display','none')
	})

	$('.hd-childnav1>li').hover(function(){
		$(this).css('border-bottom-color','blue').siblings().css('border-bottom-color','#f2f2f2')
		$(this).children('a').children('.n-img1').hide().siblings('.n-img2').show()
	},function(){
		$('.hd-childnav1>li').eq(0).css('border-bottom-color','blue').siblings().css('border-bottom-color','#f2f2f2')
		$(this).children('a').children('.n-img2').hide().siblings('.n-img1').show()
	
	})

	$('.sec-product1').mouseenter(function(){
		var secd=$(this).index()
		console.log(secd)
		$('.boxx').eq(secd).show().siblings('.boxx').hide()
	})










})