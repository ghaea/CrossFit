$(document).on('ready', function() {
	$('.menuButton').on('click', function() {
		$('.menu').toggleClass('active')
	})

	$('.find').on('click', function() {
		$('.findATrainer').toggleClass('hidden')
		$('.menuButton').hide()
		$('.menu').toggleClass('active')

	})

	$('.back').on('click', function() {
		$('.findATrainer').toggleClass('hidden')
		$('.menuButton').show()
		$('.menu').toggleClass('active')
	})

	$('.start').on('click', function() {
		$('.whereToStart').toggleClass('hidden')
		$('.menuButton').show()
		$('.menu').toggleClass('active')
	})
})