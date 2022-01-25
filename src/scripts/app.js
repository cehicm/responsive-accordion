(function ($) {
	$('.list-item').on('click', function() {
	$(this).children('.question-answer').slideToggle('slow');
    $(this).children('.question-title').toggleClass('text-dark--bold ');
	$(this).children('svg').toggleClass('rotate-180');
   });
})(jQuery);