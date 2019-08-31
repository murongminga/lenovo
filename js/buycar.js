$(function(){
	$('.sec-form-chose').click(function(){
		var sfci=$('.sec-form-choseicon').css('background-position')
		var pfci=$('.product-form-choseicon').css('background-position')
		if (sfci=='-167px -4px') {
			$('.sec-form-choseicon').css('background-position','-148px -4px');
			$('.add-form-choseicon').css('background-position','-148px -4px');
		}else{
			$('.sec-form-choseicon').css('background-position','-167px -4px');
			$('.add-form-choseicon').css('background-position','-167px -4px');
		}
		if (pfci=='-167px -4px') {
			$('.product-form-choseicon').css('background-position','-148px -4px');
		}else{
			$('.product-form-choseicon').css('background-position','-167px -4px')
		}
	})
	$('.add-form-chose').click(function(){
		var afci=$('.add-form-choseicon').css('background-position')
		var pfci=$('.product-form-choseicon').css('background-position')
		if (afci=='-167px -4px') {
			$('.sec-form-choseicon').css('background-position','-148px -4px');
			$('.add-form-choseicon').css('background-position','-148px -4px');
		}else{
			$('.sec-form-choseicon').css('background-position','-167px -4px');
			$('.add-form-choseicon').css('background-position','-167px -4px');
		}
		if (pfci=='-167px -4px') {
			$('.product-form-choseicon').css('background-position','-148px -4px');
		}else{
			$('.product-form-choseicon').css('background-position','-167px -4px')
		}
	})
	$('.p-f-n-b-add').click(function(){
		var pnum=$(this).siblings('.p-f-n-b-num').html();
		pnum=parseInt(pnum)+1;
		$(this).siblings('.p-f-n-b-num').html(pnum);
		var pprice=$(this).parents('.p-f-n-box').parents('.product-form-number').siblings('.product-form-price').html()
		pprice=parseInt(pprice)

		$(this).parents('.p-f-n-box').parents('.product-form-number').siblings('.product-form-money').html(pnum*pprice+'.00')
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
	})




















})