$(".box-simple").click(function () {
  $(".box-simple.box-simple-selected")
    .not(this)
    .removeClass("box-simple-selected");
  $(this).addClass("box-simple-selected");
  $(this).children(".orange-selected").css("visibility", "visible");
  $(".box-simple")
    .children(".orange-selected")
    .not($(this).find(".orange-selected"))
    .css("visibility", "hidden");
});
$(document).ready(function () {
  $(".development").click(function () {
    $("#infobox")
      .text(
        "Development has long ceased to be about monolithic applications. Nowadays it is a series of (micro)services, functions, containers, interfaces, services, etc. This type of development requires a different approach. Not only object-oriented, but much more. Development revolves around creativity, analytical skills, continuous learning, passion and fun and interaction with each other."
      )
      .show();
  });
  $(".security").click(function () {
    $("#infobox")
      .text(
        "Automation has brought us a lot. Nowadays, when you check in your code, it automatically goes to production after a number of automatic checks and balances. Development is a collection of scripts, packages, tools and code. More often than not also from third parties which are updated automatically. But is this update always an upgrade? What if a vulnerability has sneaked into this package or code? How do you make sure this part is also secure?"
      )
      .show();
  });
  $(".operations").click(function () {
    $("#infobox")
      .text(
        "With the increased complexity of development it’s also necessary to have a much better understanding of how to keep your IT operational and how everything fits together. It was Werner Vogel in 2006 that said: ‘You build it, you run it’. Ultimately, it comes down to the fact that many disciplines have started to interact much more and perform overlapping activities. IT is only successful trough understanding and strong connections."
      )
      .show();
  });
});
