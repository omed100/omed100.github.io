function scroll () {
	var scroll_value = window.pageYOffset;
	console.log(scroll_value);
	var nav = document.getElementById("headerNav");
	var hc = document.getElementById("header_colour");
	var bttn_color = document.getElementById("bttn_color");
	var middlescroll =document.getElementById("middle_scroll");
	var main_feature =document.getElementById("feature_comtainer");

	console.log(scroll_value);

	if(scroll_value>50)
	{
		nav.className="hrader_featurenew";
		hc.className="chanecolor";
		bttn_color.className="button_container_color";
		middlescroll.className="newPos";
	}
	else
	{
		nav.className="hrader_feature";
		hc.className="header_div";
		bttn_color.className="button_container";
	}

}
window.onscroll=function()
{
	scroll();
}
$(document).ready(function()
{
	var main_feature =document.getElementById("feature_comtainer");

	$(".view_buttn").click(function()
	{
		main_feature.className="new_main_feature";
	})

	$(".image").click(function(){
		window.location="htmlworks.html";
	})
	$(".image_javascript").click(function(){
		window.location="javascript.html";
	})
	$(".image_jquery").click(function(){
		window.location="jquery.html";
	})
	$(".image_python").click(function(){
		window.location="python.html";
	})
	$(".image_java").click(function(){
		window.location="java.html";
	})
	$(".image_project").click(function(){
		window.location="project.html";
	})
})

// Auto scroll function goes here
var scrollY =0;
var distance = 40;
var speed = 25;
function autoscrollTo(el)
{	
	var currentY = window.pageYOffset;
	var targetY =document.getElementById(el).offsetTop;
	var bodyHeight = document.body.offsetHeight;
	var ypos =currentY+window.innerHeight;
	var animator = setTimeout('autoscrollTo(\''+el+'\')',speed);

	if(ypos>bodyHeight)
	{
		clearTimeout(animator);
	}
	else
	{
		if(currentY<targetY-distance)
		{
			scrollY = currentY+distance;
			window.scroll(0,scrollY);
		}
		else
		{
			clearTimeout(animator);
		}
	}
}