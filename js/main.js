//비주얼 슬라이더
var swiper = new Swiper(".visualSwiper", {
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    autoplay: {
        delay: 5000,
    },
});



// container2 tab
$(".i_img_wrap:gt(0)").hide();
$(".b_title:gt(0)").hide();

$(".tab li").click(function(){
    var nn = $(this).index();              
    console.log(nn+"번째 li를 클릭했습니다");

    $(".tab li").removeClass("select");
    $(this).addClass("select");

    $(".i_img_wrap").hide();
    $(".i_img_wrap").eq(nn).show()

    $(".b_title").hide();
    $(".b_title").eq(nn).show();

});

// container3 스크롤 슬라이더

var swiper = new Swiper(".goodsSwiper", {
    slidesPerView: "auto",
    spaceBetween: 10,
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});

