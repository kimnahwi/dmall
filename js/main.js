
$(function(){

  //header

  $(window).scroll(function(){
    let innerHeader = $('.out_header .inner_header');

    if($(this).scrollTop()>0) {
      innerHeader.addClass('sticky');
    }else {
      innerHeader.removeClass('sticky');
    };
  });

  //lnb

  lnbLi = $('.lnb>li');
  ul = $('.lnb>li>ul');
  header = $('.header');

  lnbLi.mouseover(function(){
    header.stop().animate({
      height :header.innerHeight()+ul.innerHeight()
    },250);
  }).mouseout(function(){
    header.stop().animate({
      height : $(this).height()
    },250);
  });


  // visual_main

  var swiper = new Swiper(".visual_main .mySwiper", {

    loop : true,

    effect : 'fade',

    allowSlidePrev : true,

    allowSlideNext : true,

    autoplay : {
      delay : 4000,
      disableOnInteraction : false
    },

    speed : 1000,

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }

  });


  //metaphor

  var swiper = new Swiper(".metaphor_container .mySwiper", {

    slidesPerView : 6,

    spaceBetween : 20,

    loop : true,

    autoplay : {
      delay : 2500,
      disableOnInteraction : false
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }

  });

  //metaphor_img

  $('.metaphor01').mouseenter(function(){
    $(this).children('img').attr('src','./images/metaphor01_logo.png')
  }).mouseleave(function(){
    $(this).children('img').attr('src','./images/metaphor01.png')
  });

  $('.metaphor02').mouseenter(function(){
    $(this).children('img').attr('src','./images/metaphor02_logo.png')
  }).mouseleave(function(){
    $(this).children('img').attr('src','./images/metaphor02.png')
  });

  $('.metaphor03').mouseenter(function(){
    $(this).children('img').attr('src','./images/metaphor03_logo.png')
  }).mouseleave(function(){
    $(this).children('img').attr('src','./images/metaphor03.png')
  });

  $('.metaphor04').mouseenter(function(){
    $(this).children('img').attr('src','./images/metaphor04_logo.png')
  }).mouseleave(function(){
    $(this).children('img').attr('src','./images/metaphor04.png')
  });

  $('.metaphor05').mouseenter(function(){
    $(this).children('img').attr('src','./images/metaphor05_logo.png')
  }).mouseleave(function(){
    $(this).children('img').attr('src','./images/metaphor05.png')
  });

  $('.metaphor06').mouseenter(function(){
    $(this).children('img').attr('src','./images/metaphor06_logo.png')
  }).mouseleave(function(){
    $(this).children('img').attr('src','./images/metaphor06.png')
  });

  $('.metaphor07').mouseenter(function(){
    $(this).children('img').attr('src','./images/metaphor07_logo.png')
  }).mouseleave(function(){
    $(this).children('img').attr('src','./images/metaphor07.png')
  });

  $('.metaphor08').mouseenter(function(){
    $(this).children('img').attr('src','./images/metaphor08_logo.png')
  }).mouseleave(function(){
    $(this).children('img').attr('src','./images/metaphor08.png')
  });

  $('.metaphor09').mouseenter(function(){
    $(this).children('img').attr('src','./images/metaphor09_logo.png')
  }).mouseleave(function(){
    $(this).children('img').attr('src','./images/metaphor09.png')
  });

  $('.metaphor10').mouseenter(function(){
    $(this).children('img').attr('src','./images/metaphor10_logo.png')
  }).mouseleave(function(){
    $(this).children('img').attr('src','./images/metaphor10.png')
  });

  $('.metaphor11').mouseenter(function(){
    $(this).children('img').attr('src','./images/metaphor11_logo.png')
  }).mouseleave(function(){
    $(this).children('img').attr('src','./images/metaphor11.png')
  });

  $('.metaphor12').mouseenter(function(){
    $(this).children('img').attr('src','./images/metaphor12_logo.png')
  }).mouseleave(function(){
    $(this).children('img').attr('src','./images/metaphor12.png')
  });

  $('.metaphor13').mouseenter(function(){
    $(this).children('img').attr('src','./images/metaphor13_logo.png')
  }).mouseleave(function(){
    $(this).children('img').attr('src','./images/metaphor13.png')
  });

  $('.metaphor14').mouseenter(function(){
    $(this).children('img').attr('src','./images/metaphor14_logo.png')
  }).mouseleave(function(){
    $(this).children('img').attr('src','./images/metaphor14.png')
  });

  $('.metaphor15').mouseenter(function(){
    $(this).children('img').attr('src','./images/metaphor15_logo.png')
  }).mouseleave(function(){
    $(this).children('img').attr('src','./images/metaphor15.png')
  });

  $('.metaphor16').mouseenter(function(){
    $(this).children('img').attr('src','./images/metaphor16_logo.png')
  }).mouseleave(function(){
    $(this).children('img').attr('src','./images/metaphor16.png')
  });

  $('.metaphor17').mouseenter(function(){
    $(this).children('img').attr('src','./images/metaphor17_logo.png')
  }).mouseleave(function(){
    $(this).children('img').attr('src','./images/metaphor17.png')
  });

  $('.metaphor18').mouseenter(function(){
    $(this).children('img').attr('src','./images/metaphor18_logo.png')
  }).mouseleave(function(){
    $(this).children('img').attr('src','./images/metaphor18.png')
  });



  //contents01(best)

  let tab = $('.contents01_container .contents01_tab>ul>li');
  let sheet = $('.contents01_container .contents01_sheet_box .contents01_sheet');

  tab.click(function(){

    let i = $(this).index();

    tab.removeClass('on');
    tab.eq(i).addClass('on');

    sheet.removeClass('on_sheet');
    sheet.eq(i).addClass('on_sheet');

 
  })


  //contents02(new)

  var swiper = new Swiper(".contents02_contents .mySwiper", {
    
    loop : true,

    slidesPerView : 3,

    spaceBetween : 20,

    autoplay :{
      delay : 3000,
      disableOnInteraction : false
    },
    
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar"
    }
  });

  //contents03-1(지금 뜨고 있어요!(왼쪽))

  var swiper1 = new Swiper(".list_swiper", {

    loop : true,

    effect : 'fade',

    autoplay :{
      delay : 2500,
      disableOnInteraction : false
    }

  });

  //contents03-2(지금 뜨고 있어요!(오른쪽))

  var swiper2 = new Swiper(".contents03_ranking .ranking_swiper", {

    slidesPerView : 5,

    spaceBetween : 20,

    effect : 'fade',

    // direction: "vertical",

    autoplay :{
      delay : 2500,
      disableOnInteraction : false
    }


  });

  //contents05(review)

  let eleWidth = $('.contens05_container .contens05_frame ul li').width();
  const prevBtn = $('.contents05_container .contents05_prev_btn');
  const nextBtn = $('.contents05_container .contents05_next_btn');
  let direction = 'left';
  let state = false;

  function left() {
    
    stop();

    direction = 'left';

    $('.contents05_frame ul').animate({
      left : eleWidth*-1
    },300,function(){
      $(this).children('li:first').insertAfter($(this).children('li:last'));
      $(this).css('left', 0);
      state = false;
    });

    
  };

  function right() {

    stop();

    direction = 'right';

    $('.contents05_frame ul li:last').insertBefore($('.contents05_frame ul li:first'));
    $('.contents05_frame ul').css('left',eleWidth*-1);
    $('.contents05_frame ul').animate({
      left : 0
    },300,function(){
      state=false;
    });

    
  }; 

  prevBtn.click(function(){
    if(!state) {
      state = true;
      left();
    }
  });

  nextBtn.click(function(){
    if(!state) {
      state = true;
      right();
    }
  });

  
  //family_site

  let family = $('.footer .footer_top .family');
  let familyBtn = $('.footer .footer_top .family .family_btn');
  let familySite = $('.footer .footer_top .family_site');

  family.click(function(){
    familySite.toggle();
    familyBtn.toggleClass('close');
  });


  //aside(top_btn/quick)

  const topBtn = $('.top_btn');
  const quick = $('.quick');

  $(window).scroll(function(){
    if($(this).scrollTop()>300) {
      topBtn.fadeIn(300);
      quick.fadeIn(300);
    }else {
      topBtn.fadeOut(300);
      quick.fadeOut(300);
    };
  });

  topBtn.click(function(){
    $('html,body').stop().animate({
      scrollTop : 0
    },300);
  });
  

  //login 

  login = $('.gnb_box .gnb .login_tab');
  loginForm = $('.login_form');
  loginClose = $('.login_form .login_box .close_btn')

  login.click(function(){
    loginForm.show();
    $('#user_id').focus();
  });

  loginClose.click(function(){
    loginForm.hide();
  });

})





