$(function() {
	// 检测分辨率以适应背景图片 
	var s_height = window.screen.availHeight;
	var s_width = window.screen.availWidth;
	// var s_height = window.screen.height;
	// var s_width = window.screen.width;
	console.log(s_height);
	console.log(s_width);
	document.body.style.backgroundSize = s_width + "px " + s_height + "px";
	console.log(document.body.style.backgroundSize);
	// $(window).resize(function() {
	// 	$("#all").width(s_width);
	// 	$("#all").height(s_height);
	// });
})

$("button:eq(0)").click(function() {
	//alert("1");
	$(location).attr('href', 'CV.html');
	$(this).blur();
});
$("button:eq(1)").click(function() {
	//alert("1");
	$("#dialog").show();
	$(this).blur();
});
$("#btn1").click(function() {
	$("#dialog").hide();
	$("#x").hide();
	$("#dialog input").attr('placeholder', '不可以~');
	$(this).blur();
});
$("#btn2").click(function() {
	$("#x").show();
	$("#dialog input").attr('placeholder', '不对，不对~');
	$(this).blur();
});