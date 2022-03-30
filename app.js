$(function(){
  $('.box1').slideDown(function(){
    $('.box1').css({
      'background-color':'#0000ff',
      'height':'100px'
    }).slideUp();
  });
});

$(function(){
  $('.box2').slideDown(function(){
    $('.box2').css({
      'background-color':'black',
    }).slideUp();
  });
});

$(function(){
  $('.box3').slideDown(function(){
    $('.box3').css({'background-color':'black'}).slideUp();
  });
});

$(function(){
  $('.box4').mouseover(function(){
    $('.box4').addClass('box4-ext');
  });
  $('.box4').mouseout(function(){
    $('.box4').removeClass('box4-ext');
  });
});

$(function(){
  $('.box5').on('click',function(){
    $('.box5').addClass('box5-ext');
  });
  $('.box5').mouseout(function(){
  $('.box5').removeClass('box5-ext');
});
});

$(function(){
  $('.boxs').on('click',function(){
   $(this).slideUp(); 
  });
});
