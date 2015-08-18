$(document).ready(function(){
  $(".view_buttn").click(function(){
    $(".mywork_linkcontainer").animate(
    	{
    		'margin-left':'0px'
    	},500);
    $(".mywork_linkcontainer").show();
  });
  $(".javascript_link").click(function(){
  	window.location="javascript.html";
  })

  $(".jquery_link").click(function(){
    window.location="jquery.html";
  })

  $(".java_link").click(function(){
    window.location = 'java.html';
  })
});

function customAlert()
{

  this.box = function()
  {
    var winW = window.innerWidth;
    var winH = window.innerHeight;
    var overLay = document.getElementById('overlay_dialog');
    var alerbox = document.getElementById('prompt_box');
    overLay.style.display="block";
    overLay.style.height=winH+"px";
    alerbox.style.left=(winW/2)-(550*.5)+'px';
    // alerbox.style.left='470px';
    alerbox.style.top='230px';
    alerbox.style.display = "block";

    document.getElementById('close_buttn').innerHTML='<button class="buttn" onclick="Alert.close()">Close Window</button>';

  }
  this.close = function()
  {
      document.getElementById('overlay_dialog').style.display="none";
      document.getElementById('prompt_box').style.display="none";
  }
}
var Alert = new customAlert();
