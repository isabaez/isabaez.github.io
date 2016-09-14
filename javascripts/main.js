$(document).ready(function() {
	console.log("Ready!")

	$('#home').click(function() {
	console.log("You clicked on home")
	$('#home-container').toggle()
	})

	$('#about').click(function() {
		console.log("You clicked on about")
	})

	$('#resume').click(function() {
		console.log("You clicked on resume")
	})
})
