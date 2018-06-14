// 导航菜单下划线
$(".nav-item>a").hover(
	function() {
		$(this).siblings('.underline').width($(this).width());
		$(this).siblings('.underline').css({
			"border-style": "solid"
		});
		console.log("1");
	},
	function() {
		$(this).siblings('.underline').width(0);
		setTimeout(function() {
			$(".nav-item>a").siblings('.underline').css({
				"border-style": "none"
			});
		}, 300)
	}
);

// 鼠标悬停缩放
$(".article-item").hover(function() {
	$(this).find(".img-wrapper").addClass('add-scale');

}, function() {
	$(this).find(".img-wrapper").removeClass('add-scale');
});

// 头部导航栏效果
var startScorllTop;
startScorllTop = 80;
var navHeight = $("nav").height();
$(".blank").height(navHeight);
scrollChange(startScorllTop, navHeight);

function scrollChange(start, height) {
	$(window).scroll(function() {
		if ($(window).scrollTop() <= 80) {
			$("nav").height(80);
		}
		if ($(window).scrollTop() > height && $(window).scrollTop() > start) {
			$("nav").css("margin-top", "-180px");
		}
		if ($(window).scrollTop() < start) {
			$("nav").height(80);
			$("nav").css("margin-top", "0");
			if ($(window).scrollTop() == 0) {
				$("nav").height(height);
			}
		}
		start = $(window).scrollTop();
	});
}
//链接点击后主动失焦
$("a").click(function() {
	$(this).blur();
});