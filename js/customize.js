    function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
    });
}


$("#apple").hover(function () {
    $('#category').text('User Experience, Visual Design');
    $("body").css("color", 'white');
    $("#work").css("background-image", 'url("../img/apple.jpg")');
    $("nav").css("color", '#111111');
    $(".grid").css("opacity", '0.05');
    $('#description').text('I worked as a Visual Designer with the team at Apple, Inc. on a variety of consumer-facing digital projects. We were responsible collaborating closely with Apple’s design team to craft high-level concepts and product narratives that solved business goals and improved metric benchmarks within the organization. Several projects received significant media attention, as well as kudos from Mr. Timothy Cook himself. I also spent 3 hours on a bus commuting every single day for a year.. that has to be worth of some kind of award, no?');
    $("#awwwards").css("color", '#000');
    $("#blackbelt").css("color", '#000');
    $("#carbon").css("color", '#000');
    $("#uo").css("color", '#000');
    $("#fff").css("color", '#000');
    $("#method").css("color", '#000');
    $("h3").css("color", '#666');
});

$("#awwwards").hover(function () {
    $('#category').text('Jury Panel Member');
    $("body").css("color", 'white');
    $("#work").css("background-image", 'url("../img/awards.jpg")');
    $("nav").css("color", '#111111');
    $(".grid").css("opacity", '0.05');
    $('#description').text('The Awwwards Jury is a panel of specialists formed by the most important designers, creative directors, bloggers and agencies in the industry, dedicate themselves to the challenging task of assessing the talent and effort invested in the web projects that are submitted to Awwwards on a daily basis. In 2017 I was fortunate enough to be welcomed the Jury panel. Jury members are selected because they possess the expertise and experience necessary to critique the work of the best designers and agencies from all over the world. Each and every evaluation is extremely important making professionalism and rigour a fundamental part the Awwwards platform.');
    $("#apple").css("color", '#000');
    $("#blackbelt").css("color", '#000');
    $("#carbon").css("color", '#000');
    $("#uo").css("color", '#000');
    $("#fff").css("color", '#000');
    $("#method").css("color", '#000');
    $("h3").css("color", '#666');
});

$("#blackbelt").hover(function () {
    $('#category').text('Identity, Strategy, UX');
    $(".grid").css("opacity", '0.05');
    $("body").css("color", 'white');
    $("#work").css("background-image", 'url("../img/blackbelt.jpg")');
    $('#description').text('Blackbelt is an artificial-intelligence-powered marketing agency – actively building the first insights-driven Ai marketing platform with their own proprietary data. The team approached me to help them re-think their brand positioning & identity going into 2017, the company’s second year in operation. As the lead (and sole) designer, I collaborated closely with the agency stakeholders to bring the newly developed business plan to life by crafting a new brand-identity, as well as re-thinking Blackbelt’s digital presence to support this newly created brand language.');
    $("#apple").css("color", '#000');
    $("#awwwards").css("color", '#000');
    $("#carbon").css("color", '#000');
    $("#uo").css("color", '#000');
    $("#fff").css("color", '#000');
    $("#method").css("color", '#000');
    $("h3").css("color", '#666');
});

$("#carbon").hover(function () {
    $('#category').text('Art Direction, Visual Design');
    $("body").css("color", 'white');
    $(".grid").css("opacity", '0.05');
    $("#work").css("background-image", 'url("../img/carbon.jpg")');
    $('#description').text('Carbonblack, Inc. is an endpoint security platform that helps organizations of all sizes replace ineffective antivirus, lock down endpoints and critical systems, as well as hunt down threats. I worked as a designer on several full-lifecycle digital projects – from conception and execution all the way through to production and development launch. As a team, we assisted Carbonblack in refining and developing their new brand-identity, as well adapting the brand-language to function across a variety of consumer touchpoints.');
    $("#apple").css("color", '#000');
    $("#awwwards").css("color", '#000');
    $("#blackbelt").css("color", '#000');
    $("#uo").css("color", '#000');
    $("#fff").css("color", '#000');
    $("#method").css("color", '#000');
    $("h3").css("color", '#666');
});

$("#fff").hover(function () {
    $('#category').text('Partner, Design');
    $("#work").css("background-image", 'url("../img/fourfootfive.jpg")');
    $(".grid").css("opacity", '0.05');
    $("body").css("color", 'white');
    $('#description').text('Fourfootfive is a small freelance collective – We are illustrators, designers, and developers from around the globe working both together and separately, creating brands and experiences that impact people and create results. I started Fourfootfive during the latter part of 2016 with one goal in mind – to do the best work of our lives, when we want, where we want. Collectively, we have worked on projects for brands including Levis, Apple, Morgan Stanley, Harvard Business, Dolby, Hotwire, Hewlett Packard, EA, Method, Blackbelt.io and more.');
    $("#apple").css("color", '#000');
    $("#awwwards").css("color", '#000');
    $("#blackbelt").css("color", '#000');
    $("#uo").css("color", '#000');
    $("#carbon").css("color", '#000');
    $("#method").css("color", '#000');
    $("h3").css("color", '#666');
});


$("#method").hover(function () {
    $('#category').text('Branding');
    $("#work").css("background-image", 'url("../img/method.jpg")');
    $(".grid").css("opacity", '0.05');
    $("body").css("color", 'white');
    $('#description').text('Method is a service and experiential design team with offices around the globe. I collaborated closely with the amazing teams in San Francisco & London to redesign both their internal & external brand positioning, as well as design a new website that would serve as an extension of the newly created brand. The work done was explorative – involving new colors, typography, imagery, as well as a restructuring of the site’s architecture and interaction model.');
    $("#apple").css("color", '#000');
    $("#awwwards").css("color", '#000');
    $("#blackbelt").css("color", '#000');
    $("#uo").css("color", '#000');
    $("#carbon").css("color", '#000');
    $("#fff").css("color", '#000');
    $("h3").css("color", '#666');
});

$("#uo").hover(function () {
    $('#category').text('iOS Design, Editorial Design');
    $("body").css("color", 'white');
    $(".grid").css("opacity", '0.05');
    $("#work").css("background-image", 'url("../img/OR.jpg")');
    $('#description').text('OR Magazine is an interactive magazine for iOS on iPad, published by the University of Oregon. We told engaging, media-rich stories highlighting the untold, unique aspects of Oregon that even Oregon’s greatest explorers have yet to experience. I worked as the Art Director for the Spring 2012 issue, leading the design direction behind the issue’s typography, color, and content. The issue was semi-finalist in the Adobe Design Achievement Awards, and was showcased on Adobe’s website alongside magazines like GQ, Wired, and Esquire Magazine.');
    $("#apple").css("color", '#000');
    $("#awwwards").css("color", '#000');
    $("#blackbelt").css("color", '#000');
    $("#carbon").css("color", '#000');
    $("#fff").css("color", '#000');
    $("#method").css("color", '#000');
    $("h3").css("color", '#666');
});

$("nav").mouseout(function () {
    $('#category').text('Select A Project');
    $("#imageswap").css("background-image", 'url("../img/me.jpg")');
    $("#work").css("background-image", 'url("../img/blank.png")');
    $("body").css("background-color", 'white');
    $("body").css("color", '#222');
    $('#description').text('I am a 25 year old freelance designer, (crappy) front-end developer, and entrepreneur solving complex problems for consumer-facing brands. I have worked on teams at Method, Blast Radius, and Hello Elephant for clients like Apple, Hewlett Packard, Electronic Arts, Dolby, Levi’s, Hotwire, Bank of The West, University of Oregon and plenty more. My work spans across a wide variety of mediums – from broadcast, print and out of home, to packaging, interactive, and (yes, unfortunately) social media. If you’d like to learn more about my work, hover over the links to the left.');
    $(".grid").css("opacity", '1.0');
    $("nav h2 a").css("color", '#222');
    $("h3").css("color", '#bbb');
});



$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1200);
      return false;
    }
  }
});