$(document).ready(function() {

	$('#about').click(function() {
		$('#intro').toggle(false);
		$('#intro-desc').toggle(false)
		$('#container-left').fadeIn("slow")
	})

	$('#projects').click(function() {
		$('#intro').toggle(false);
		$('#intro-desc').toggle(false)
		$('#container-mid').fadeIn("slow")
	})

	$('#connect').click(function() {
		$('#intro').toggle(false);
		$('#intro-desc').toggle(false)
		$('#container-right').fadeIn("slow")
	})

	$(window).on('blur', function() {
		document.title = "Come back soon!";
	})

	$(window).on('focus', function() {
		document.title = "Isaias Uriel Baez";
	})
})
