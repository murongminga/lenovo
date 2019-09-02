$(function(){
	$('.sec-form-chose').click(function(){
		var sfci=$('.sec-form-choseicon').css('background-position')
		var pfci=$('.product-form-choseicon').css('background-position')
		if (sfci=='-167px -4px') {
			$('.sec-form-choseicon').css('background-position','-148px -4px');
			$('.add-form-choseicon').css('background-position','-148px -4px');
			$('.product-form-choseicon').css('background-position','-148px -4px');
			$('.product-form').addClass('add');
		}else{
			$('.sec-form-choseicon').css('background-position','-167px -4px');
			$('.add-form-choseicon').css('background-position','-167px -4px');
			$('.product-form-choseicon').css('background-position','-167px -4px')
			$('.product-form').removeClass('add');
		}
		addfun();
	})
	$('.p-f-n-b-add').click(function(){
		var pnum=$(this).siblings('.p-f-n-b-num').html();
		pnum=parseInt(pnum)+1;
		$(this).siblings('.p-f-n-b-num').html(pnum);
		var pprice=$(this).parents('.p-f-n-box').parents('.product-form-number').siblings('.product-form-price').html()
		pprice=parseInt(pprice)
		$(this).parents('.p-f-n-box').parents('.product-form-number').siblings('.product-form-money').html(pnum*pprice+'.00')
		addfun();
	})
	$('.p-f-n-b-del').click(function(){
		var pnum=$(this).siblings('.p-f-n-b-num').html();
		pnum=parseInt(pnum)-1;
		if (pnum<1) {
			pnum=1
		}
		$(this).siblings('.p-f-n-b-num').html(pnum);
		var pprice=$(this).parents('.p-f-n-box').parents('.product-form-number').siblings('.product-form-price').html()
		pprice=parseInt(pprice)
		$(this).parents('.p-f-n-box').parents('.product-form-number').siblings('.product-form-money').html(pnum*pprice+'.00')
		addfun();
	})

	$('.warn-box-close').click(function(){
		$(this).parents('.product-warn-box').hide();
	})
	$('.warn-box-but-cancle').click(function(){
		$(this).parents('.product-warn-box').hide();
	})
	$('.product-del').click(function(){
		$(this).siblings('.product-warn-box').show();
	})
	$('.warn-box-but-sure').click(function(){
		$(this).parents('.product-form').remove();
		var pros=$('section').find('.product-form')
		if(pros.length=='0'){			
			$('.add-form').remove();
			$('.hid-form').show();
		}
		addfun()
	})
	$('.product-form-choseicon').click(function(){
		var pfci=$(this).css('background-position')
		if (pfci=='-167px -4px') {
			$(this).css('background-position','-148px -4px');
			$(this).parents('.product-form').addClass('add');
			addfun()
		}else{
			$(this).css('background-position','-167px -4px')
			$(this).parents('.product-form').removeClass('add')
			addfun()
		}
		var pros=$('section').find('.product-form')
		var prosadd=$('section').find('.add')
		if (pros.length==prosadd.length){
			$('.sec-form-choseicon').css('background-position','-148px -4px');
			$('.add-form-choseicon').css('background-position','-148px -4px');
		}else{
			$('.sec-form-choseicon').css('background-position','-167px -4px');
			$('.add-form-choseicon').css('background-position','-167px -4px');
		}
	})
	$('.add-form-del').click(function(){
		var delbox=$('section').find('.add');
		if (delbox.length=='0'){
			$('.warningbox2').show();
			timeover()
		}else{
			$('.warningbox').show()
		}
		
	})
	$('.warn-box-but-sure2').click(function(){
		$('.add').remove()
		$('.warningbox').hide()
		var pros=$('section').find('.product-form')
		if(pros.length=='0'){			
			$('.add-form').remove();
			$('.hid-form').show();
		}
		addfun()
	})

	function addfun(){
		var proprice=$('section').find('.add');
		var allprice=[];
		for (var i =0; i<proprice.length; i++) {
			allprice.push($('.add').eq(i).children('.product-form-money').html());
		}
		$('.shop-money').html(eval(allprice.join("+"))+".00")
		$('.all-money').html(eval(allprice.join("+"))+".00")
		if (proprice.length==0){
			$('.shop-money').html("0.00")
			$('.all-money').html("0.00")
		}
	}
	function timeover(){
		var time1;
		clearInterval(time1);
		time1=setTimeout(function(){
			$('.warningbox2').hide();
		},2000)
	}

    $('.head-dl').click(function(){
      $('.vip').show()
      return false;
    })
    $('.vip-close').click(function(){
      $('.vip').hide()
    })














})