let burgerOpen = false

//event listener on navbar burger for mobile
$(".navbar-burger").click(function() {
  if (burgerOpen === false){
    $("#navbarMenuHeroA").addClass("is-active" )
    burgerOpen = true
  }else {
    $("#navbarMenuHeroA").removeClass("is-active")
    burgerOpen = false
  }
});


//select nav elements, attach listener to smooth scroll to correct section when clicked on navbar. Also collapses burger nav if user is on mobile

$(".navbar-end").find("a").click(function (e) {
  e.preventDefault();
  let $section = $(this).attr("href");
  $("html, body").animate({
    scrollTop: $($section).offset().top
  });
  if (burgerOpen === true){
    $("#navbarMenuHeroA").removeClass("is-active")
    burgerOpen = false
  }
});



//scroll listener to toggle navbar color
$(function () {
    $(document).scroll(function () {
      let $nav = $(".hero-head");
      let $navText = $("#nav-text")
      $nav.toggleClass('scrolled', $(this).scrollTop() >= $nav.height());
      $navText.toggleClass('scrolled', $(this).scrollTop() >= $nav.height());
    });
  });


//set is-active class on nav items based on position on screen

$(document).ready(function () {

  $("section").hover(function () {
    let id = $(this).attr("id");
    $("a").removeClass("is-active");
    $("[href=#" + id + "]").addClass("is-active");
  });

});