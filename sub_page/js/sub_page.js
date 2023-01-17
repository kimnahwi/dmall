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


    //best_tab

    let bestTab = $('.main_wrap .best_tab>li');
    let bestSheet = $('.main_wrap .best_sheet .best_sheet01');

    bestTab.click(function(){

        let i = $(this).index();

        bestTab.removeClass('on');
        bestTab.eq(i).addClass('on');

        bestSheet.removeClass('on_sheet');
        bestSheet.eq(i).addClass('on_sheet');

    })

    //family

    let family = $('.footer .footer_top .family');
    let familyBtn = $('.footer .footer_top .family .family_btn');
    let familySite = $('.footer .footer_top .family_site');

    family.click(function(){
        familySite.toggle();
        familyBtn.toggleClass('close');
    });






})