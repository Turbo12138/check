var validate = function (data, r) {
			var rule = {
				number: function (data) {
					return /^[a-zA-Z0-9_-]{6,18}$/.test(data)
				},
				phone: function (data) {
					return /^\d{11}$/.test(data);	
				},
				email: function (data) {
					return /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(data);	
				},
				passWord: function (data) {
					return /^[a-zA-Z0-9_-]{6,18}$/.test(data);	
				}
			};
			return rule[r](data);
		}
			function loading(){ 
			$('.tubi').css("display","block");
			$('.tubi').html('<img class="middle" src="/static/imges/5-121204193Q9-50.gif" />'); 
			
		}
$(document).ready(function() {
	$(".text-2 a").click( function(){
		
		var check = true;
		var $this = $(this);
		if($(name=userName).val().length == 0){
			$(".fut").html("不能为空");
			check = false;
		}else{
			if(!validate($(name=userName).val(),'number')){
				$(".fut").html("请输入正常字符");
				check = false;
			}else{
				$(".fut").html("");
			}
		}
		if($(".input-on-4[name=mobile]").val().length == 0){
			$(".fut-1").html("不能为空");
			check = false;
		}else{
			if(!validate($(".input-on-4[name=mobile]").val(),'phone')){
				$(".fut-1").html("不是11位");
				check = false;
			}else{
				$(".fut-1").html("");
			}
		}
		if($(name=email).val().length==0){
			$(".fut-2").html("不能为空");	
			check = false;
		}else{
			if(!validate($(name=email).val(),'email')){
				$(".fut-2").html("邮箱有误");
				check = false;
			}else{
				$(".fut-2").html("");
			}
		}
		if($(name=passWord).val().length==0){
			$(".fut-3").html("不能为空");
			check = false;	
		}else{
			if(!validate($(name=passWord).val(),'passWord')){
				$(".fut-3").html("密码格式不对");
				check = false;
			}else{
				$(".fut-3").html("");
			}
		}
		if(check){
			$.ajax({ 
				type:$this.closest("form").attr("method"), 
				url:$this.closest("form").attr("action"), 
				data:$this.closest("form").serialize(),
				dataType: "json",
				beforeSend:loading,
				success:function (data) {
					setTimeout(function (){ 
						$(".tubi").html("");
						$('.tubi').css("display","none");
						if(data.result == 0){
							$(".fut").html(data.username_message);
							$(".fut-1").html(data.email_message);
							$(".fut-2").html(data.mobile_message);
							$(".fut-3").html(data.password_message);
						}else{
							window.location.href = data.url;	
						}
					}, 1000);
				}
			})
		}
	})
})