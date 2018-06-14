$(function() {
	if ($(window).innerWidth() <= 1023) {
		//二维码显示
		$(".wei:nth-of-type(1)").click(function() {
			if($("#erweima").css("top") == "-210px"){
				$("#erweima").css({
				visibility: 'visible',
				top: '-250px'
			});
			}else{
				$("#erweima").css({
					visibility: 'hidden',
					top: '-210px'
				});
			}
		});

		//导航栏宽度改变
		$(".blank").height($(".nav-wrapper").height());
		//菜单栏切换
		$("#m-nav-wrapper").height($(window).innerHeight() - 80);
		$(".lines").click(function() {
			if ($(".second-line").width() != 0) {
				console.log("点了");
				$(".second-line").width(0);
				$(".second-line").height(0);
				$(".first-line").addClass('rotate45');
				$(".third-line").addClass('rotate-45');
				$("#m-nav-wrapper").css("margin-top", "0");
				$("body").css("overflow", "hidden");
			} else {
				$(".second-line").width(24);
				$(".second-line").height(3);
				$(".first-line").removeClass('rotate45');
				$(".third-line").removeClass('rotate-45');
				$("#m-nav-wrapper").css("margin-top", "-9999px");
				$("body").css("overflow", "auto");
			}
		});
	}
	if ($(window).innerWidth() <= 1023 && $(window).innerWidth() > 414) {
		//替换第八张图
		$(".article-item:nth-of-type(8) img:nth-of-type(1)").attr({
			src: "img/m_a.jpg",
			"data-src": "img/m_a.jpg"
		});
		$(".article-item:nth-of-type(8) img:nth-of-type(2)").attr({
			src: "img/m_b.jpg",
			"data-src": "img/m_b.jpg"
		});
	}
	if ($(window).innerWidth() <= 414) {
		//替换第三张图
		$(".article-item:nth-of-type(1) img").attr({
			src: "img/mm.jpg",
			"data-src": "img/mm.jpg"
		});
		//替换第三张图
		$(".article-item:nth-of-type(3) img:nth-of-type(1)").attr({
			src: "img/mm1_a.jpg",
			"data-src": "img/mm1_a.jpg"
		});
		$(".article-item:nth-of-type(3) img:nth-of-type(2)").attr({
			src: "img/mm1_b.jpg",
			"data-src": "img/mm1_b.jpg"
		});
		//替换第五张图
		$(".article-item:nth-of-type(5) img:nth-of-type(1)").attr({
			src: "img/mm2_a.jpg",
			"data-src": "img/mm2_a.jpg"
		});
		$(".article-item:nth-of-type(5) img:nth-of-type(2)").attr({
			src: "img/mm2_b.jpg",
			"data-src": "img/mm2_b.jpg"
		});
		//替换第八张图
		$(".article-item:nth-of-type(8) img:nth-of-type(1)").attr({
			src: "img/mm3_a.jpg",
			"data-src": "img/mm3_a.jpg"
		});
		$(".article-item:nth-of-type(8) img:nth-of-type(2)").attr({
			src: "img/mm3_b.jpg",
			"data-src": "img/mm3_b.jpg"
		});
	}
})
