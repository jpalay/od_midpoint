$(function(){
	var container_height = $(".project").height();

	$(window).resize(function() {
        delay(function(){
            if (window.innerWidth >= 760)
                vertically_center_img("fast");
        }, 100);
    });
    if (window.innerWidth >= 760)
        delay(function(){
            vertically_center_img("fast");
        }, 500);
});

function vertically_center_img(speed)
{
    var container_height = $(".project").height();
	var img = $(".pic_container img");
	margin_top = (container_height - img.height())/2;
	console.log(img.height());
	img.animate({
		marginTop: margin_top
    }, speed);
}