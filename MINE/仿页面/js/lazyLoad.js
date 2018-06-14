$(function() {
	// $("img").attr({
	// 	src: 'img/l.jpg'
	// });
	if ($(window).innerWidth() > 1023) {
		$(".article-item").each(function(index, item) {
			$(this).find('img').attr("src", $(this).find('img').attr("data-src"));
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
			$(this).find('img').attr("src", $(this).find('img').attr("data-src"));
		}
	});
}