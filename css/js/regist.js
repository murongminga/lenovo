$(function(){
	$('input[type="submit"]').click(function(){
		var num=$('.phone').val();
		var yzm=$('.message').val();
		var mima=$(".password1").val();
		var mimb=$(".password2").val();
		var numz=/^1[35789]\d{9}$/;
		var mimaz=/^(?=.*\d)(?=.*[a-z]){8,20}/i
		var yzmz=/\d{6}/
		if (num==""){
			$('.waring').css('display','block');
			$('.waring-txt').text('账号不能为空')
			$('.phone').css('border-color','red');
			return false;
		}
		else if(numz.test(num)==false){
			$('.waring').css('display','block');
			$('.waring-txt').text('请输入正确的手机号')	
			return false;
		}else if (mima==""){
			$('.waring').css('display','block');
			$('.waring-txt').text('密码不能为空');
			$('.password1').css('border-color','red');
			return false;
		}else if(mimaz.test(mima)==false){
			$('.waring').css('display','block');
			$('.waring-txt').text('密码至少包含数字，字母，字符其中的两种')	;
			$('.password1').css('border-color','red');
			return false;
		}else if(mima!=mimb){
			$('.waring').css('display','block');
			$('.waring-txt').text('确认密码和密码不一致')	;
			$('.password2').css('border-color','red');
			return false;
		}else if(yzm==""){
			$('.waring').css('display','block');
			$('.waring-txt').text('请输入验证码')	;
			$('.message').css('border-color','red');
			return false;
		}
		else if(yzmz.test(yzm)==false){
			$('.waring').css('display','block');
			$('.waring-txt').text('请输入正确的验证码')	;
			$('.message').css('border-color','red');
			return false;
		}
		else{
			return true;
		}
		
	})










})
