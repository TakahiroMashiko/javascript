$(function(){
  $('.box1').mouseover(function(){
    $('.box1').addClass({'box1-ext'});
  });
  $('.box1').mouseout(function(){
    $('.box1).css({'background-color': '#FF0000'});
  });
});
