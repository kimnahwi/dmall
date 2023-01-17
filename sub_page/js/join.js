$(function(){

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

    //family

    let family = $('.footer .footer_top .family');
    let familyBtn = $('.footer .footer_top .family .family_btn');
    let familySite = $('.footer .footer_top .family_site');
    let state = 'false';
    family.click(function(){
        familySite.toggle();
        familyBtn.toggleClass('close');
    });

})

document.addEventListener('DOMContentLoaded',()=>{
    
    let userId = document.getElementById('id')
    let userPw1 = document.getElementById('password1')
    let userPw2 = document.getElementById('password2')
    let pwBtn = document.getElementById('pw_btn')
    let userName = document.getElementById('user_name')
    let telSelect = document.getElementById('tel_select')
    let userTel2 = document.getElementById('user_tel2')
    let userTel3 = document.getElementById('user_tel3')
    let cellphoneSelect = document.getElementById('cellphone_select')
    let userCellphone2 = document.getElementById('user_cellphone2')
    let userCellphone3 = document.getElementById('user_cellphone3')
    let address = document.getElementById('address1')
    let userBirth1 = document.getElementById('birth1')
    let userBirth2 = document.getElementById('birth2')
    let userBirth3 = document.getElementById('birth3')
    let totalTerms = document.getElementById('total_terms')
    let termsEls = document.querySelectorAll('.terms_el')
    let terms1 = document.getElementById('terms1')
    let terms2 = document.getElementById('terms2')
    let terms3 = document.getElementById('terms3')
    let terms4 = document.getElementById('terms4')


    userId.addEventListener('change',checkID)
    userPw1.addEventListener('change',checkPW)
    pwBtn.addEventListener('click',comparePW)
    userTel2.addEventListener('keyup',moveTelNo1)
    userTel3.addEventListener('keyup',moveTelNo2)
    userCellphone2.addEventListener('keyup',moveTelNo3)
    userCellphone3.addEventListener('keyup',moveTelNo4)
    userBirth1.addEventListener('keyup',moveBirth1)
    userBirth2.addEventListener('keyup',moveBirth2)
    userBirth3.addEventListener('keyup',moveBirth3)
    totalTerms.addEventListener('click',totalCheck)
    terms1.addEventListener('click',termCheck)
    terms2.addEventListener('click',termCheck)
    terms3.addEventListener('click',termCheck)
    terms4.addEventListener('click',termCheck)




    function checkID() {

        if(userId.value.length < 4 || userId.value.length > 16){
            document.querySelector('.id_message').textContent = '아이디는 4~16자로 입력해주세요.'
            userId.value = ''
            userId.focus()
        }else {
            document.querySelector('.id_message').textContent = '사용가능한 아이디입니다.'
            userPw1.focus()
        }

    }

    function checkPW() {

        if(userPw1.value.length < 8 || userPw1.value.length > 16) {
            document.querySelector('.pw1_message').textContent = '비밀번호는 8~16자로 입력해주세요.'
            userPw1.value = ''
            userPw1.focus()
        }else {
            document.querySelector('.pw1_message').textContent = ''
            userPw2.focus()
        }

    }

    function comparePW() {

        if(userPw1.value != userPw2.value){
            document.querySelector('.pw2_message').textContent = '비밀번호가 일치하지 않습니다.' 
            userPw2.value = ''
            userPw2.focus()
        }else {
            document.querySelector('.pw2_message').textContent = '사용가능한 비밀번호입니다.'
            userName.focus()
        }
        
    }

    function moveTelNo1() {
        
       if(userTel2.value.length>=4){
            userTel3.focus()
       }
       
    }

    function moveTelNo2() {
        
        if(userTel3.value.length>=4){
            cellphoneSelect.focus()
        }
        
    }

    function moveTelNo3() {
        
        if(userCellphone2.value.length>=4){
            userCellphone3.focus()
        }
        
    }

    function moveTelNo4() {
        
        if(userCellphone3.value.length>=4){
            address.focus()
        }
        
    }

    function moveBirth1() {

        if(userBirth1.value.length>=4){
            userBirth2.focus()
        }

    }

    function moveBirth2() {

        if(userBirth2.value.length>=2){
            userBirth3.focus()
        }
        
    }

    function moveBirth3() {

        if(userBirth3.value.length>=2){
            totalTerms.focus()
        }
        
    }

    function totalCheck() {
        if(totalTerms.checked == true) {
            termsEls.forEach((termsEl)=>{
                termsEl.checked = true
            })
        }else {
            terms1.checked = false
            terms2.checked = false
            terms3.checked = false
            terms4.checked = false
        }
    }

    function termCheck() {
        if(terms1.checked == true && terms2.checked == true && terms3.checked == true && terms4.checked == true){
            totalTerms.checked = true
        }else {
            totalTerms.checked = false
        }
    }




})