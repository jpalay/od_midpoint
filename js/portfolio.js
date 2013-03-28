var pic_container_height = 0;

$(function(){
	pic_container_height = $(".pic_container").height();

	$(window).resize(function() {
        delay(function(){
            vertically_center_img("fast");
        }, 100);
    });

    delay(function(){
        vertically_center_img("fast");
    }, 500);
});

// $(".pic_container img").load(function(){
// 	vertically_center_img("fast");
// });

function vertically_center_img(speed)
{
	var img = $(".pic_container img");
	margin_top = (pic_container_height - img.height())/2;
	console.log(img.height());
	img.animate({
		marginTop: margin_top
    }, speed);
}