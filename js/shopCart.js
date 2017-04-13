$(document).ready(function(){
		
	//勾选
    $(".checkLabel").click(function(){
    	var flag = $(this).prev().is(':checked');

    	var flagval=$(this).prev().val();
    	
    	if(flagval==1){
    		
            $(this).prev().attr("checked",false);
            $(this).prev().val(0);
            $(this).children().css("background-position","0 0");
            $("#buy-sele-all").attr("checked", false); //将全选勾除
            $("#buy-sele-all").val(0);
            
        }else{
        	$(this).prev().val(1);
            $(this).prev().attr("checked",true);
           $(this).children().css("background-position","0 -0.2rem")
        };
            //如果全部都选中了，将全选勾选
            var groupUL = $(".container").find("input[type='checkbox']").get();
            var checkUL = $(".container").find("input[type='checkbox'][value='1']").get();
            
            if(groupUL.length == checkUL.length){
            	$("#buy-sele-all").attr("checked", true);
            	$("#buy-sele-all").val(1);
            	$("#buy-sele-all").next().find("span").css("background-position","0 -0.2rem");
            }else{
            	$("#buy-sele-all").attr("checked", false);
            	$("#buy-sele-all").val(0);
            	$("#buy-sele-all").next().find("span").css("background-position","0 0");
            }
        
    	
      //计算总价
	  calculateTotal();
    });  
    // 全选，全不选
    $("#buy-sele-all").click(function() {
        var flag = $(this).val();

        if(flag ==1){
            $(this).val(0);
            $(this).next().find("span").css("background-position","0 0");
            $(".ids").attr("checked", false);
            $(".ids").val(0);
            $(".ids").next().find("span").css("background-position","0 0");        
        }else{
            $(this).val(1);
            $(this).next().find("span").css("background-position","0 -0.2rem");
            $(".ids").attr("checked",true);
            $(".ids").val(1);
            $(".ids").next().find("span").css("background-position","0 -0.2rem"); 
        }
        
      //计算总价
  	  calculateTotal();
    });
    
	  //计算总价
	//  calculateTotal();
	});

//相加

function increase(obj){
	var cartlimit=100
    var _this = $(obj);
    var count=Number(_this.prev().val());
    count+=1;
    if(count<=cartlimit){
    	_this.prev().val(count);
    }else{
    	_this.prev().val(cartlimit);    	
    }
    //计算总价
    calculateTotal();
}
//减
function decrease(obj){
	
    var _this = $(obj);
    var count=Number(_this.next().val());
    count-=1;
    if(count>0){
    	_this.next().val(count);
    }else{
    	_this.next().val(1);
    }
    //计算总价
    calculateTotal();
}

//更新购物车商品数量
/*function changeShopCartNumber(_basketId,_num,_prodId,_skuId,type){
	var config = false;
	$.ajax({
		url: contextPath+"/changeShopCartNum", 
		data: {"num":_num,"basketId":_basketId,"prodId":_prodId,"skuId":_skuId,"type":type},
		type:'post', 
		async : false, //默认为true 异步   
		dataType : 'json', 
		error:function(data){
		},  
		success:function(result){
			if(result.status=="OK"){
				config = true;
			}else if(result.fail=="RESTRICTION"){
				floatNotify.simple("超出购买限制");
			}else if(result.fail=="ERR"){
				floatNotify.simple("更新失败");
			}else if(result.fail=="PROD_RESTRICTION"){
				floatNotify.simple("商品超出购买限制");
			}else if(result.fail=="PARAM_ERR"){
				floatNotify.simple("参数有误");
			}
		}
	});
	return config;
}
*/
//计算总价
function calculateTotal(){
	var allCash = 0;
	var allCount = 0;
	var list = $(".container").find(".list-group-item").get();
	
	for(var i=0;i<list.length;i++){
		var selectedval = $(list[i]).find("input[type='checkbox']").val();
		if(selectedval==1){
			var cash = $(list[i]).find("em[class='price']").html();//取单价
			var count = $(list[i]).find("input[type='tel']").val();//取数量
			allCash += Number(cash)*Number(count);
	    allCount += Number(count);
	    
		}		
	}	
	
	if(allCash!=0){
        $("#totalPrice").html(allCash);
        $('.btn-buy').removeClass('bg-ccc-c-fff')
	}else{
		 $("#totalPrice").html("0.00");
		  $('.btn-buy').addClass('bg-ccc-c-fff')
	}
	
	$("#Count").html(allCount);
	allCash=0;
	allCount=0;
}
//左划删除产品
function deleteitem(obj){
	_this=$(obj);
	_this.parent().parent().remove();
	calculateTotal();
}
//全选删除产品
function deleteAll(){
	var selectall=$("#buy-sele-all").val();
	var rows=$(".container").find(".list-group-item").parent().get();
	var checkUL = $(".container").find("input[type='checkbox'][value='1']").get();
	if(selectall==1){
        for(var i=0;i<rows.length;i++){
        	$(rows[i]).hide()
        }
	location.href="cartnothing.html";
	}else{
        for(var j=0;j<checkUL.length;j++){
        	$(checkUL[j]).parent().parent().parent().remove();
        	calculateTotal();
        }
	}
	
}
//金额说明开始和关闭
function cashExpShow(){
	$(".fixed-foot").animate({height:"0.88rem"},"slow");
    $("#cashexp").slideDown("slow");
}
function cashExpRemove(){
    $(".fixed-foot").animate({height:"0.48rem"},"slow");
    $("#cashexp").slideUp("slow");
   
}
//删除购物车商品
function deleteShopCart(_basketId,_basketName,_prodId,_skuId){
	if(confirm("删除后不可恢复, 确定要删除本商品吗？")){
		$.ajax({
			url: contextPath+"/deletShopCart", 
			data: {"basket_id":_basketId,"prod_id":_prodId,"sku_id":_skuId},
			type:'post', 
			async : true, //默认为true 异步   
			dataType : 'json', 
			error:function(data){
			},   
			success:function(data){
				if(data=="OK"){
					window.location.href= contextPath + "/shopcart";
					return ;
				}else{
					floatNotify.simple("删除失败");
					return false;
				}
				
			}   
		});         
	} 
}


/*function submitShopCart(){
	
	var array = $(".ids:checked").get();
	if(array.length==0){
		floatNotify.simple("请选择要结算的商品");
		return;
	}
	
    var shopCartStr = "";
	for(var i in array){
		if(i!=0){
			shopCartStr =shopCartStr+",";
		}
		var basket_id = $(array[i]).attr("itemkey");
		shopCartStr=shopCartStr + basket_id;
	}
	
	//调用方法  
	abstractForm(contextPath+'/p/orderDetails', shopCartStr);
}

function abstractForm(URL, shopCartIds){
	   var temp = document.createElement("form");        
	   temp.action = URL;        
	   temp.method = "post";        
	   temp.style.display = "none";        
	   var opt = document.createElement("textarea");        
	   opt.name = 'shopCartItems';        
	   opt.value = shopCartIds;        
	   temp.appendChild(opt);        
	   document.body.appendChild(temp);        
	   temp.submit();        
	   return temp;  
}*/