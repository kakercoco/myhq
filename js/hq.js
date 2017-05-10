$(function(){
	function timer() {
		var ts = (new Date(2018, 2, 23, 19, 0, 0)) - (new Date()); //计算剩余的毫秒数  
		var dd = parseInt(ts / 1000 / 60 / 60 / 24, 10); //计算剩余的天数  
		var hh = parseInt(ts / 1000 / 60 / 60 % 24, 10); //计算剩余的小时数  
		var mm = parseInt(ts / 1000 / 60 % 60, 10); //计算剩余的分钟数  
		var ss = parseInt(ts / 1000 % 60, 10); //计算剩余的秒数  
		dd = checkTime(dd);
		hh = checkTime(hh);
		mm = checkTime(mm);
		ss = checkTime(ss);
		$('#timerhh').html(hh)
		$('#timermm').html(mm)
		$('#timerss').html(ss)
	}
	timer();
	setInterval(timer, 1000)
	function checkTime(i) {
		if (i < 10) {
			i = "0" + i;
		}
		return i;
	}
	(function tabchange(){
		$('.top2-p').click(function(){
			$('.top2-d').removeClass('selected')
			$(this).addClass('selected')
			$('.pcontent').css('display','block')
			$('#myCarousel').css('display','block')
			$('.itop2').css('height','4rem')
			$('.pcontent2').css('display','none')
			$('.btop').hide()
		})
		$('.top2-d').click(function(){
			$('.top2-p').removeClass('selected')
			$(this).addClass('selected')
			$('.pcontent').css('display','none')
			$('.itop2').css('height','0.42rem')
			$('#myCarousel').css('display','none')
			$('.pcontent2').css('display','block')
			$('.btop').show()
		})
		
		$('.plc-change').click(function(){
			$('.top2-p').removeClass('selected')
			$('.top2-d').addClass('selected')
			$('.pcontent').css('display','none')
			$('.itop2').css('height','0.42rem')
			$('#myCarousel').css('display','none')
			$('.pcontent2').css('display','block')
			$('.btop').show()
		})
		$('.pl-contnum').click(function(){
			$('.p-chooce').slideDown('fast')
			$('.pc-wrap').css('display','block')
		})
		$('.pl-contcd').click(function(){
			$('.p-arg').slideDown('fast')
			$('.pc-wrap').css('display','block')
		})
		$('.wanc').click(function(){
			$('.p-arg').slideUp('fast')
			$('.pc-wrap').css('display','none')
		})
		$('.pl-contdz').click(function(){
			$('.pc-wrap').css('display','block')
			$('.p-dizhi').slideDown('fast')
		})
		$('.p-close').click(function(){
			$('.p-chooce').slideUp('fast')
			$('.pc-wrap').css('display','none')
		})
		$('.pcc-cr li').click(function(){
			$('.pcc-cr li').removeClass('bg-yellow ')
			$(this).addClass('bg-yellow')
		})
		$('.pcc-ml li').click(function(){
			$('.pcc-ml li').removeClass('bg-yellow ')
			$(this).addClass('bg-yellow')
		})
		var num=1
		$('.unAddNum').click(function(){
			if(num==1){
				num=1
			}else{
				num--
				$('.addNum2').html(num)
			}
		})
		$('.addNum').click(function(){
			num++
			$('.addNum2').html(num)
		})
		$('.iatt-btn').click(function(){
			$('.erwei').fadeIn('fast')
		})
		$('.erwei').click(function(){
			$('.erwei').fadeOut('fast')
		})
		$('.p-dizhi li').click(function(){
			$('.p-dizhi li i').removeClass('pdz-icon3')
			$('.p-dizhi li').css('color','#333')
			$('.p-dizhi li b').removeClass('pdz-icon2')
			$(this).children('b').addClass('pdz-icon2')
			$(this).css('color','#000')
			$(this).children('i').addClass('pdz-icon3')
			$('.pl-contdz span').html($(this)[0].innerText)
			$('.pc-wrap').css('display','none')
			$('.p-dizhi').slideUp('fast')
		})
		$('.pfooter-kef').click(function(){
			$('.p-kef').fadeIn('fast')
			$('.pc-wrap').css('display','block')
		})
		$('.pc-wrap').click(function(){
			$('.p-kef').fadeOut('fast')
			$('.pc-wrap').css('display','none')
			$('.p-arg').slideUp('fast')
			$('.p-dizhi').slideUp('fast')
		})
		$('.addr p').click(function(){
			$('.addr').hide()
			$('.addr2').show()
		})
		$('.unaddbtn').click(function(){
			window.location.href="produce.html";
		})
		$('.rf-btn').click(function(){
			$(".r-wrap").height($("window").height()); 
			if($('.rc-pay').html().indexOf('货到付款')!==-1){
				$('.r-wrap').fadeIn('fast')
				$('.r-alert').fadeIn('fast')
				$('.r-wrap').css('z-index','20')
			}else{
				window.location.href="wchatpay.html"
			}
			
		})
		$('.ra-q').click(function(){
			$('.r-wrap').fadeOut('fast')
			$('.r-alert').fadeOut('fast')
			$('.r-wrap').css('z-index','10')
		})
		$('.ra-s').click(function(){
			window.location.href="paysuccess.html";
		})
//		$('.rf-close').click(function(){
//			$('.r-wrap').hide()
//			$('.rf-pay').slideUp()
//		})
		$('.rt-add').click(function(){
			window.location.href="goodsadd.html";
		})
		$('.gd-list').click(function(){
			$('.gdc-r i').removeClass('bg-fc33')
			$(this).find('i').addClass('bg-fc33')
			window.location.href="order.html";
		})
		$('.addr3').click(function(){
			window.location.href="address.html";
		})
		$('.rc-pay').click(function(){
			window.location.href="paymethod.html";
		})
		$('.rc-quan').click(function(){
			window.location.href="quan.html";
		})
		$('.paymt').click(function(){
			$('.paymt i').removeClass('bg-fc333')
			$(this).find('i').addClass('bg-fc333')
			window.location.href="order.html";
		})
		$('.quanl-r .c-333').click(function(){
			window.location.href="order.html";
		})
		var num=0
		$('.jage').click(function(){
			num++
			$('.pf-shop i').html(num)
		})
		$('.huoqu').click(function(){
			var dm=60
			$('.huoqu').attr('disabled','disabled')
			$('.myphone .huoqu').css('background-color','#dfdfdf')
			var timer=setInterval(function(){
				dm--
				if(dm==0){
					$('.myphone .huoqu').css('background-color','#FFCC33')	
					$('.huoqu').html('重新获取')
					$('.huoqu').removeAttr('disabled')
					clearInterval(timer)
				}else{
					$('.myphone .huoqu').css('background-color','#dfdfdf')	
					$('.huoqu').html("剩余"+dm+'秒')
				}
			},1000)
		})
		$('.amanbm-dg').click(function(){
			$('.amanbm-dg span').removeClass('bg-fc33')
			$(this).children('span').addClass('bg-fc33')
		})
		$('.aman-remove').click(function(){
			$('.aman-wrap').fadeIn('fast')
			$('.aman-alert').fadeIn('fast')
		})
		$('.aman-edit').click(function(){
			window.location.href="address.html";
		})
		$('.aman-back').click(function(){
			$('.aman-wrap').fadeOut('fast')
			$('.aman-alert').fadeOut('fast')
		})
		$('.aman-delet').click(function(){
			window.location.href="addmanage.html";
		})
		function checkPhone(){ 
		    var phone = document.getElementById('feed-phone').value;
		    if(!(/^1[34578]\d{9}$/.test(phone))){ 
		        return false;
		 	} else{
		 		return true;
		 	}
		}	
		$('.feed-btn').click(function(){
			var feedipt=document.getElementById('feed-input').value;
			if(checkPhone()){
				if(feedipt!==""){
					alert('nice')
				}else{
					alert('反馈意见不能为空哦。')
				}
			}else{
				alert('请输入正确的手机号。')
			}
		})
		$('.feed-top li').click(function(){
			if($(this).hasClass('bg-fc3-c-fff')){
				$(this).removeClass('bg-fc3-c-fff')
			}else{
				$('.feed-top li').removeClass('bg-fc3-c-fff')
				$(this).addClass('bg-fc3-c-fff')
			}
		})
		$('.mysoild').height($('.wl-btm').height())
	})();
	
})
