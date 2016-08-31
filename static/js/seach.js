// JavaScript Document

$(document).ready(function() {
	//登陆
	$(".text-1 a").click( function(){
		var $this = $(this);
		var str = $("#userName").val();//用户名
		var reg = /^[a-zA-Z/d_0-9]{6,18}$/;//正则
		var check = true;

		if($(".input-on-1[name=userName]").val().length == 0){
			$(".fut").html("不能为空");
			check = false;
		}else{
			if(!reg.test(str)){
				$(".fut").html("请输入正常字符");
				check = false;
			}
		}
		
		var str = $("#passWord").val();//密码
		if($(".input-on-2[name=passWord]").val().length==0){
			$(".fut-1").html("不能为空");
			check = false;
		}
		 
		function loading(){ 
			$('.tubi').css("display","block");
			$('.tubi').html('<img class="middle" src="/static/imges/5-121204193Q9-50.gif" />'); 
			
		}
		setTimeout(function Response(data){ 
			$(".tubi").html("");
			$('.tubi').css("display","none");
			if(data.result = 0){
				$(".fut").html(" + username_massuse + ");
				$(".fut").html(" + password_massuse + ");
			}else{
				window.location.href = data.url;	
			}
		}, 1000);
		
		
		if(check){
			$(".fut").html("");
			$(".fut-1").html("");
			$.ajax({ 
				type:$this.closest("form").attr("method"), 
				url:$this.closest("form").attr("action"), 
				data:$this.closest("form").serialize(),
				dataType: "json",
				beforeSend:loading,
				success:Response
			})
		}
	})
})