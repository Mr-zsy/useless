$(function() {
	// $("img").attr({
	// 	src: 'img/l.jpg'
	// });
	if ($(window).innerWidth() > 1023) {
		$(".article-item").each(function(index, item) {
			$(this).find('img:nth-of-type(1)').attr("src", $(this).find('img:nth-of-type(1)').attr("data-src"));
			$(this).find('img:nth-of-type(2)').attr("src", $(this).find('img:nth-of-type(2)').attr("data-src"));
		});
	} else {
		loadImg();
		$(window).scroll(function() {
			loadImg();
		});
	}
})

function loadImg() {
	$(".article-item").each(function(index, item) {
		// console.log($(this).offset());
		if (($(window).scrollTop() + $(window).innerHeight()) >= $(this).offset().top) {
			$(this).find('img:nth-of-type(1)').attr("src", $(this).find('img:nth-of-type(1)').attr("data-src"));
			$(this).find('img:nth-of-type(2)').attr("src", $(this).find('img:nth-of-type(2)').attr("data-src"));
		}
	});
}