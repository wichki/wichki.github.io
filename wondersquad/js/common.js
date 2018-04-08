$(document).ready(function() {

  // Enable high contrast
  $("#highContrastEnable").on("change", function(){
    if (this.checked){
      $("*").addClass("high-contrast");
    }
    else{
      $("*").removeClass("high-contrast");
    }
  });

  // Adjust the font size
	$(".small-font").click(function(){
		$("body").css("font-size","12px");
	});
	$(".normal-font").click(function(){
		$("body").css("font-size","16px");
	});
  $(".big-font").click(function(){
		$("body").css("font-size","24px");
	});
});
