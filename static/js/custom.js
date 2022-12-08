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
  $(this).children(".readmore").css("visibility", "hidden");
  $(".box-simple")
    .children(".readmore")
    .not($(this).find(".readmore"))
    .css("visibility", "visible");
});
$(document).ready(function () {
  $(".development").addClass("box-simple-selected");
  $(".development").children(".orange-selected").css("visibility", "visible");
  $(".development").children(".readmore").css("visibility", "hidden");
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

// Modal Logic
const modal = document.querySelector("#team-modal-select");

// Open Modal by User
$("#jorryt").click(function () {
  $("#modal-header").text("About Jorryt");
  $("#modal-article").html(
    "<p>Hi, my name is Jorryt de Vries. Founder and co-owner of Cloud Connectorz. I have been working in IT for over 20+ years. I had roles from developer to consultant, project management, coaching, etc. I am result-oriented, pragmatic, analytical and always looking for solutions.</p><p>Over the years it became clear to me that I am always looking for connections. Be it personal or business, this is what drives me and what I am looking for. Connection is also the key in IT and it is from that conviction that I started Cloud Connectorz.</p>"
  );
  modal.showModal();
});
$("#ardavan").click(function () {
  $("#modal-header").text("About Ardavan");
  $("#modal-article").html(
    "<p>I am a dedicated Cloud Engineer with background in DevOps Engineering and System Administration. For me, collaboration is key and I am a firm believer in automating everything. I have a passion for learning new things and spend my free time to read more and keep myself updated.</p> <p>I have been an active member of the GNU/Linux and Open Source community since 2010, both in online and local user groups and have helped with planning and organization of events. My hobbies include painting and playing Warhammer 40K miniatures, video games and reading books on technologies related to my field of expertise. </p>"
  );
  modal.showModal();
});

$(".modal-close-button").click(function () {
  modal.close();
});
