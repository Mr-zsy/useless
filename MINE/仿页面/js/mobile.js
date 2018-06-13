$(function(){
	if($(window).innerWidth()<=880){
		//替换第八张图
		$(".article-item:nth-of-type(8) img:nth-of-type(1)").attr({src :"img/m_a.jpg"});
		$(".article-item:nth-of-type(8) img:nth-of-type(2)").attr({src :"img/m_b.jpg"});
		//二维码显示
		$("wei:nth-of-type(1)").hover(function(){
			$("#erweima").css({
				visibility: 'visible',
				top: '-250px'
			});
		},function(){
			$("#erweima").css({
				visibility: 'hidden',
				top: '0'
			});
		});
		//菜单栏切换
		$("#m-nav-wrapper").height($(window).innerHeight()-80);
		$(".lines").click(function(){
			if($(".second-line").width() !=0){
				console.log("点了");
				$(".second-line").width(0);
				$(".second-line").height(0);
				$(".first-line").addClass('rotate45');
				$(".third-line").addClass('rotate-45');
				$("#m-nav-wrapper").css("margin-top","0");
				$("body").css("overflow","hidden");
			}else{
				$(".second-line").width(24);
				$(".second-line").height(3);
				$(".first-line").removeClass('rotate45');
				$(".third-line").removeClass('rotate-45');
				$("#m-nav-wrapper").css("margin-top","-9999px");
				$("body").css("overflow","auto");
			}
		});
	}
})




