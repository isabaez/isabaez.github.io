$(document).ready(function() {

	$(window).on('blur', function() {
		document.title = "Come back soon!";
	})

	$(window).on('focus', function() {
		document.title = "Isaias Uriel Baez";
	})

	$("#projects").click(function() {
		$(".projects").fadeToggle(1000)
	})

	$(".projects>div>a>.fa-times").click(function() {
	  	$(".projects").fadeToggle(1000)
	})

	$(".screenshot>a").click(function(elem) {
		var enlarge_src = $(elem.target).attr('src')
		$(".spotlight").fadeToggle(500)
		$("#spotlight").attr('src', enlarge_src)
	})

	$(".spotlight>a>.fa-times").click(function() {
	  	$(".spotlight").fadeToggle(500)
	})
})