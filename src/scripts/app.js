(function () {
  $(".list-item").on("click", function () {
    $(this).toggleClass("open");

    //Collapse active element when a new one is opened
    if ($(this).hasClass("open")) {
      $(".list-item").not(this).removeClass("open");
    }
    //Revert arrow to original position when oanother element is opened
    const questionButton = $(this).children("svg");
    $("svg").not(questionButton).removeClass("rotate-180");
    questionButton.toggleClass("rotate-180");

    //Revert text style when not active
    const questionTitle = $(this).children(".question-title");
    $(".question-title").not(questionTitle).removeClass("text-dark--bold");
    questionTitle.toggleClass("text-dark--bold");
  });
})(jQuery);
