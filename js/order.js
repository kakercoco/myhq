//全部订单，待付款，待发货，代收货订单相关JS

$(document).ready(function(){
  //确定删除取消
$(".confirmno").click(function(){
  $("#grayback").hide();
  $("body").css("overflow","auto");
  $("#confirminfo").hide();
  $(".container").find("#yes").attr("id","no");
});
//确认删除弹出框弹出
$(".confirmshow").click(function(e){
  $(e.target).attr("id","yes");
//$('html,body').animate({scrollTop: '0px'}, 100);
  $("#grayback").show();
  $("body").css("overflow","hidden");
  $("#confirminfo").show();
});
//确认删除点击删除
$(".confirmyes").click(function(){
  $("#grayback").hide();
  $("body").css("overflow","auto");
  $("#confirminfo").hide();
  $("#yes").parent().parent().parent().parent().hide();
});
//待发货发货提醒
$(".alerttosend").click(function(){
//$('html,body').animate({scrollTop: '0px'}, 100);
  $("#grayback").show();
  $("body").css("overflow","hidden");
  $("#alertinfo").show();
  setTimeout(alertHide,1000)
})
function alertHide(){
  $("#grayback").hide();
  $("body").css("overflow","auto");
  $("#alertinfo").hide();
}
//确认支付框关闭
$('.rf-close').click(function(){
      $('#grayback').hide();
      $("body").css("overflow","auto");
      $('.rf-pay').slideUp();
    })
//确认支付框弹出
$(".rf-btn").click(function(){
//    $('html,body').animate({scrollTop: '0px'}, 100);
      $('#grayback').show();
      $("body").css("overflow","hidden");
      $('.rf-pay').slideDown();
    })


})

