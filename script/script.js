$(document).ready(function(){
    // 헤더_서브메뉴
    $(".nav ul li").mouseover(function(){
      $(".sub_menu").show().stop().slideDown(200)
      $(".navBG").show().stop().slideDown(200)
    });
    $(".nav ul li").mouseout(function(){
      $(".sub_menu").show().stop().slideUp(200)
      $(".navBG").show().stop().slideUp(200)
    });
    
    // 서브메뉴 : 검색창
    $(".G_nav_und .search").click(function(){
      $(".search_box").toggle()
    });


    // 배너 : 슬라이드
    $('.banner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay : true,
        autoplaySpeed : 2500,
        
      });

    // Product : 탭메뉴
    let pro_tab = $(".pro_tab ul li");
    let pro_cont= $(".pro_conts > div");

    pro_cont.hide().eq(0).show()
    pro_tab.click(function(){
        let target = $(this)
        let index = target.index()
        console.log(index)
       
        pro_tab.removeClass("active")
        target.addClass("active")
        pro_cont.hide().eq(index).show()
        $(".pro_con02 > .sale ").get(0).slick.setPosition();
    });

    // Product : 베스트_스와이퍼
    let swiper = new Swiper(".pro_con01", {
      slidesPerView: 3.4,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
    });

    // Product : 세일_슬릭
    swiper = new Swiper(".pro_con02", {
      slidesPerView: 3.4,
      spaceBetween: 30,
      autoplay: {
        delay: 2500,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
    });
    // $('.sale').slick({
    //   infinite: true,
    //   slidesToShow: 3.4,
    //   slidesToScroll: 1,
    //   arrows: false,
    //   // dots:true,
    //   // autoplay: true,
    //   autoplaySpeed : 3000,
    //   // variableWidth: true,
    //   initialSlide: 0,
    // });

    // 베스트리뷰 : 슬릭
    $('.review_box').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1
    });

    // 인스타 : 슬릭
    $('.ins_center').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
    });

    //팝업
    let pop_X = $(".pop_All .pop_X p")
    pop_X.click(function(){
      $(".pop_All").fadeOut(200)
    });
});