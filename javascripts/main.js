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
		$(".enlarge").fadeToggle(500)
		$("#spotlight").attr('src', enlarge_src)
		if (enlarge_src === "images/evie1.png" || enlarge_src === "images/evie2.png") {
			console.log("evie clicked")
			$("#spotlight").css('height', "80%");
			$("#spotlight").css('width', "");
			console.log($("#spotlight").css('height'))
			console.log($("#spotlight").css('width'))

		}
		$("#spotlight").css('height', "");
		$("#spotlight").css('width', '80%');
	})

	$(".enlarge>div>a>.fa-times").click(function() {
	  	$(".enlarge").fadeToggle(500)
	})
})