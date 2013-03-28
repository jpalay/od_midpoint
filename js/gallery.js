$(function(){
	$(".image").mouseup(function(){
		var src = "img/gallery/thumbs/" + $(this).attr("id") + ".jpg";
		var large_src = "img/gallery/" + $(this).attr("id") + ".jpg";
		var image = new Image();
		image.src = src;

		size_light_content(image.height, image.width, large_src);

		$("#lightbox").fadeIn();
	});

	$(window).resize(function() {
        delay(function(){
        	if ($("#lightbox").css("display") != "none")
        	{
        		file_name = /\/(\w+\.jpg)/.exec($("#light_content").css("background"))[1];
        		var image = new Image();
        		image.src = "img/gallery/thumbs/" + file_name;
        		var large_src = "img/gallery/" + file_name;
        		size_light_content(image.height, image.width, large_src);
        	}
        }, 100);
    });

	$("#lightbox").mouseup(function(){
		$(this).fadeOut();
	});
});

function size_light_content(img_height, img_width, large_src)
{

	var height =      0;
	var width =       0;
	var vert_margin =  0;
	var horiz_margin = 0;

	// if 
	if ((1.0 * img_height / img_width) >
	    (1.0 * window.innerHeight / window.innerWidth))
	{
		var height_num = .75 * window.innerHeight;
		console.log("WINDOW HEIGHT:" + window.innerHeight);
		var width_num = (height_num * img_width) / (img_height);
		height = 75;
		width = 100.0 *  width_num / window.innerWidth;
		vert_margin = 6.25;
	}

	else
	{
		var width_num = .75 * window.innerWidth;
		console.log("WINDOW WIDTH:" +window.innerWidth);
		var height_num = (width_num * img_height) / (img_width);
		height = 100.0 *  height_num / window.innerHeight;
		width = 75;
		vert_margin = (100 - height)/2;
	}

	console.log(width);
	console.log(height);

	console.log(large_src);
	$("#light_content").css({
		"background": "url(" + large_src + ") no-repeat",
		"height": height + "%",
		"width": width + "%",
		"margin": vert_margin + "% " + "auto " + vert_margin + "% " + "auto",
		"-webkit-background-size": "contain",
		"-moz-background-size": "contain",
		"-o-background-size": "contain",
		"background-size": "contain"
	});
}