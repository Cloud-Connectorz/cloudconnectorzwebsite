// Handle Boxes
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
  $("#team-member-photo").attr(
    "src",
    "img/Jorryt-de-Vries600.jpg?rand=" + Math.random()
  );
  $("#modal-article").html(
    "<p>Hi, my name is Jorryt de Vries. Founder and co-owner of Cloud Connectorz. I have been working in IT for over 20+ years. I had roles from developer to consultant, project management, coaching, etc. I am result-oriented, pragmatic, analytical and always looking for solutions.</p><p>Over the years it became clear to me that I am always looking for connections. Be it personal or business, this is what drives me and what I am looking for. Connection is also the key in IT and it is from that conviction that I started Cloud Connectorz.</p>"
  );
  modal.showModal();
});
$("#ardavan").click(function () {
  $("#modal-header").text("About Ardavan");
  $("#team-member-photo").attr("src", "img/Ardavan-Hosseini-800.jpg");
  $("#modal-article").html(
    "<p>I am a dedicated Cloud Engineer with background in DevOps Engineering and System Administration. For me, collaboration is key and I am a firm believer in automating everything. I have a passion for learning new things and spend my free time to read more and keep myself updated.</p> <p>I have been an active member of the GNU/Linux and Open Source community since 2010, both in online and local user groups and have helped with planning and organization of events. My hobbies include painting and playing Warhammer 40K miniatures, video games and reading books on technologies related to my field of expertise. </p>"
  );
  modal.showModal();
});
$("#bas").click(function () {
  $("#modal-header").text("About Bas");
  $("#team-member-photo").attr("src", "img/Bas-Tichelaar-600.png");
  $("#modal-article").html(
    "<p>After joining Skyworkz as a Managing Director, Bas saw an opportunity to build a new company focused on the connection. Besides managing Skyworkz, Bas is an advisor to Cloud Connectorz. He helps Jorryt behind the scenes to run the company.</p><p>Bas will always be a techie at heart. He has a solid knowledge of Cloud and DevOps, and is always in for a good technical discussion.</p><p>In his spare time he likes to spend time with his wife and 2 boys, he loves skiing and traveling, and he is an occasional sporter (road cycling and mountain biking in the summer, ice skating in the winter).</p>"
  );
  modal.showModal();
});
$("#yunus").click(function () {
  $("#modal-header").text("About Yunus");
  $("#team-member-photo").attr("src", "img/Yunus-Kilic-800.jpg");
  $("#modal-article").html(
    "<p>I have 9 years of professional experience in software engineering, cloud-native development, and DevOps. Also, I am a firm believer in the power of open-source technologies and love to build solutions leveraging cloud-native tools and technologies. Also, creative problem-solver who is always looking for new ways to optimize existing solutions. I have a great eye for detail and take pride in delivering high-quality work. I am a team player who can work independently and collaboratively with others. I like to stay up to date with the latest cloud-native technologies and best practices. My hobbies include hiking, playing video games, tennis and Formula 1.</p>"
  );
  modal.showModal();
});
$("#desmond").click(function () {
  $("#modal-header").text("About Desmond");
  $("#team-member-photo").attr("src", "img/Desmond-Rouwhorst-800.jpg");
  $("#modal-article").html(
    "<p>Hi I'm Desmond and I'm a Senior Lead Software Developer at Cloud Connectorz. I've been in the business for 20 years, where I initially focused on back-end development, but in recent years I've expanded my knowledge in the field of front-end and Azure. The combination of front-end, back-end, Azure and Lead is the golden circle for me, the combination that I enjoy doing the most. Developing nice software and coaching and guiding people. I love to deliver beautiful products together with a team, to let the individuals or the entire team grow and thus help a company grow further.In my free time I like to do fun things with my wife and son. We love to go out with family and friends, to enjoy good food and drinks, but we are certainly not averse to a party here and there to go dancing.</p>"
  );
  modal.showModal();
});
$("#dexter").click(function () {
  $("#modal-header").text("About Dexter");
  $("#team-member-photo").attr("src", "img/Dexter-Ajoku-800.jpg");
  $("#modal-article").html(
    "<p>I'm an experienced .NET software engineer with many years of experience building mission-critical services in cloud environments within distributed teams. My professional interests are in cloud-native architectures, high-performance applications and service observability. </p>"
  );
  modal.showModal();
});

// Close Modal
$(".modal-close-button").click(function () {
  modal.close();
});
