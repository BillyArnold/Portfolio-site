
/* for testing
confirm("Anyone there?");
prompt("Has this worked?");

*/
function main() {
  $(".menus").hide();
    $(".menus").fadeIn(1500);

  $("#header-text").hide();
    $("#header-text").fadeIn(1500);

  $(".footer").hide();
    $(".footer").fadeIn(1500);

    $(".aboutcontent").hide();
      $(".aboutcontent").fadeIn(4000);

    $('#slider').hide();

    $('.seeprojectshtml').on('click', function() {
  		$(this).next().slideToggle(400);
      $(this).toggleClass('hideprojects');
      $(this).text('Hide Projects');
  	});


    $('#slider2').hide();


    $('.seeprojectsjava').on('click', function() {
  		$(this).next().slideToggle(400);
      $(this).toggleClass('hideprojects');
      $(this).text('Hide Testimonials');
  	});
  }


  jQuery(document).ready(function ($) {

    $('#checkbox').change(function(){
      setInterval(function () {
          moveRight();
      }, 3000);
    });

  	var slideCount = $('#slider ul li').length;
  	var slideWidth = $('#slider ul li').width();
  	var slideHeight = $('#slider ul li').height();
  	var sliderUlWidth = slideCount * slideWidth;

  	$('#slider').css({ width: slideWidth, height: slideHeight });

  	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

      $('#slider ul li:last-child').prependTo('#slider ul');

      function moveLeft() {
          $('#slider ul').animate({
              left: + slideWidth
          }, 200, function () {
              $('#slider ul li:last-child').prependTo('#slider ul');
              $('#slider ul').css('left', '');
          });
      };

      function moveRight() {
          $('#slider ul').animate({
              left: - slideWidth
          }, 200, function () {
              $('#slider ul li:first-child').appendTo('#slider ul');
              $('#slider ul').css('left', '');
          });
      };

      $('a.control_prev').click(function () {
          moveLeft();
      });

      $('a.control_next').click(function () {
          moveRight();
      });

  });










  jQuery(document).ready(function ($) {

    $('#checkbox').change(function(){
      setInterval(function () {
          moveRight();
      }, 3000);
    });

    var slideCount = $('#slider2 ul li').length;
    var slideWidth = $('#slider2 ul li').width();
    var slideHeight = $('#slider2 ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('#slider2').css({ width: slideWidth, height: slideHeight });

    $('#slider2 ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

      $('#slider2 ul li:last-child').prependTo('#slider2 ul');

      function moveLeft() {
          $('#slider2 ul').animate({
              left: + slideWidth
          }, 200, function () {
              $('#slider2 ul li:last-child').prependTo('#slider2 ul');
              $('#slider2 ul').css('left', '');
          });
      };

      function moveRight() {
          $('#slider2 ul').animate({
              left: - slideWidth
          }, 200, function () {
              $('#slider2 ul li:first-child').appendTo('#slider2 ul');
              $('#slider2 ul').css('left', '');
          });
      };

      $('a.control_prev2').click(function () {
          moveLeft();
      });

      $('a.control_next2').click(function () {
          moveRight();
      });

  });








  jQuery(document).ready(function ($) {

    var slideCount = $('#slidersample ul li').length;
    var slideWidth = $('#slidersample ul li').width();
    var slideHeight = $('#slidersample ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('#slidersample').css({ width: slideWidth, height: slideHeight });

    $('#slidersample ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

      $('#slidersample ul li:last-child').prependTo('#slidersample ul');

      function moveLeft() {
          $('#slidersample ul').animate({
              left: + slideWidth
          }, 200, function () {
              $('#slidersample ul li:last-child').prependTo('#slider2 ul');
              $('#slidersample ul').css('left', '');
          });
      };

      function moveRight() {
          $('#slidersample ul').animate({
              left: - slideWidth
          }, 200, function () {
              $('#slidersample ul li:first-child').appendTo('#slidersample ul');
              $('#slidersample ul').css('left', '');
          });
      };

      $('a.control_prev').click(function () {
          moveLeft();
      });

      $('a.control_next').click(function () {
          moveRight();
      });

  });



  $(document).ready(function () {
      updateContainer();
      $(window).resize(function() {
          updateContainer();
      });
  });

/*   function updateContainer() {
      var $containerHeight = $(window).height();
      if ($containerHeight <= 818) {
          $('.footer').css({
              position: 'static',
              bottom: 'auto',
              left: 'auto'
          });
      }
      if ($containerHeight > 819) {
          $('.footer').css({
              position: 'absolute',
              bottom: '3px',
              left: '0px'
          });
      }
  }

*/

$(document).ready(main);

/*

var currentCard = 'Heart';

while (currentCard !== 'Spade') {
  console.log(currentCard);

  var randomNumber = Math.floor(Math.random() * 4);

  currentCard = cards[randomNumber];
}

console.log('Found a Spade!');

*/
